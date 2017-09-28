import _ from 'lodash';
import Promise from 'promise';
import logger from '../common/logger';
import request from '../utils/request';
import { parseTime } from '../utils/enhance';
import { ENV, APP_TOKEN_KEY } from '../../config';

async function index(req, res, next) {

  let secondHost = 'web' + ENV + '.'
  if (secondHost === 'web.') {
    secondHost = ''
  }

  res.render('contact.html', {
    pageTitle: '联系我们_新生大学网',
    pageDesc: '新生大学聚集了一群以持续自我升级为乐的同伴，可以这样联系我们。商务合作Email lixuewei@xinshengdaxue.com客服邮箱Email contact@xinshengdaxue.com办公地址北京市朝阳区建外SOHO东区',
    pageKeywords: '',
    secondHost: secondHost,
    APP_TOKEN_KEY: APP_TOKEN_KEY,
    ENV: ENV,
    pageStylePath: '/public/stylesheets/contact.css'
  });
}

export { index };
