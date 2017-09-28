require('colors');
// require('./server/middlewares/mongoose_log'); // 打印 mongodb 查询日志
// require('./server/models');
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
// import connectMongodb from 'connect-mongo';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOM from 'react-dom/server';
import UniversalRouter from 'universal-router';
import PrettyError from 'pretty-error';
import App from './components/App';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import routes from './routes';
import assets from './assets.json'; // eslint-disable-line import/no-unresolved
import { host, debug, port, redisInfo, mongodbUrl, mini_assets } from './config';
import serverConfig from './server/config';

if (!debug && serverConfig.oneapm_key) {
  require('oneapm');
}

import Loader from 'loader';
// var LoaderConnect = require('loader-connect');
import session from 'express-session';

import router from './server/router';
import _ from 'lodash';
import compress from 'compression';
import busboy from 'connect-busboy';
import errorhandler from 'errorhandler';
import { requestLog } from './server/middlewares/request_log';
import renderMiddleware from './server/middlewares/render';
import logger from './server/common/logger';
import helmet from 'helmet';
import bytes from 'bytes';

// const MongoStore = new connectMongodb(session);
// assets
let serverAssets = {};

if (mini_assets) {
  try {
    serverAssets = require('./server/assets.json');
  } catch (e) {
    logger.error('You must execute `make build` before start app when mini_assets is true.');
    throw e;
  }
}

const app = express();

// configuration in all env
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));

app.locals._layoutFile = 'layout.html';
app.enable('trust proxy');
// Request logger。请求时间
app.use(requestLog);
if (serverConfig.debug) {
  // 渲染时间
  app.use(renderMiddleware);
}

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(serverConfig.session_secret));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/fileCache', express.static(path.join(__dirname, 'fileCache')));
app.use(require('response-time')());

app.use(helmet.frameguard('sameorigin'));
app.use(require('method-override')());

app.use(compress());
app.use(require('cookie-parser')(serverConfig.session_secret));
// app.use(session({
//   secret: serverConfig.session_secret,
//   store: new MongoStore({
//     url: mongodbUrl,
//   }),
//   resave: true,
//   saveUninitialized: true,
// }));

serverConfig.mini_assets = mini_assets;

_.extend(app.locals, {
  config: serverConfig,
  Loader,
  assets: serverAssets,
  _,
  staticFile(filePath) {
    if (filePath.indexOf('http') === 0 || filePath.indexOf('//') === 0) {
      return filePath;
    }
    return serverConfig.site_static_host + filePath;
  },
});

app.use(busboy({
  limits: {
    fileSize: bytes(serverConfig.file_limit),
  },
}));

app.use((req, res, next) => {
  logger.debug(('query').red, JSON.stringify(req.query));
  logger.debug(('body').red, JSON.stringify(req.body));
  next();
});

app.use((req, res, next) => {
  app.locals.xsUserInfo = req.xsobj && req.xsobj.userInfo ? req.xsobj.userInfo : null;
  next();
});


// app.use(passport.initialize());

if (__DEV__) {
  app.enable('trust proxy');
}

app.use('/', router);

app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404.html', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  logger.error(err);

  if (typeof (err) !== 'object') {
    err = new Error(err);
  }

  if (req.xhr) {
    const statusCode = res.statusCode || 500;

    res.status(statusCode).json({ err });
  } else {
    const html = ReactDOM.renderToStaticMarkup(
      <Html
        title="Internal Server Error"
        description={err.message}
        style={errorPageStyle._getCss()} // eslint-disable-line no-underscore-dangle
      >
        {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
      </Html>,
    );
    res.status(err.status || 500);
    res.send(`<!doctype html>${html}`);
  }
});
//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
// models.sync().catch(err => console.error(err.stack)).then(() => {
app.listen(port, () => {
  console.log('server run at env: ', process.env.NODE_ENV);
  console.log(`The server is running at http://localhost:${port}/`);
});
// });
/* eslint-enable no-console */
