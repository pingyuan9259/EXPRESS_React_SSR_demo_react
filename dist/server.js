require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__server_config__);


const node_env = "pre" || 'development';
/* unused harmony export node_env */


let env = '';
if (node_env === 'development' || node_env === 'dev') {
  env = 'dev';
}
if (node_env === 'pre') {
  env = 'pre';
}

const APP_TOKEN_KEY = env ? '_app_token_' + env : '_app_token';
/* harmony export (immutable) */ __webpack_exports__["e"] = APP_TOKEN_KEY;

const ENV = env ? '-' + env : '';
/* harmony export (immutable) */ __webpack_exports__["d"] = ENV;

console.log(env, ENV, APP_TOKEN_KEY, '28309213891203812093821903821903810');
const isProduction = node_env === 'production';
/* unused harmony export isProduction */

const debug = !isProduction;
/* harmony export (immutable) */ __webpack_exports__["a"] = debug;


const web_port = 3001 || 3001;
/* unused harmony export web_port */

const web_host =  true ? `${"localhost"}:${web_port}` : `localhost:${web_port}`;
/* unused harmony export web_host */


const port = 3001 || 3001;
/* harmony export (immutable) */ __webpack_exports__["c"] = port;

const host =  true ? `${"localhost"}:${port}` : `localhost:${port}`;
/* harmony export (immutable) */ __webpack_exports__["f"] = host;

const web_name = __WEBPACK_IMPORTED_MODULE_0__server_config___default.a.name;
/* unused harmony export web_name */


const mini_assets = node_env === 'production';
/* harmony export (immutable) */ __webpack_exports__["b"] = mini_assets;


const appId = isProduction ? __WEBPACK_IMPORTED_MODULE_0__server_config___default.a.app_id_pro : __WEBPACK_IMPORTED_MODULE_0__server_config___default.a.app_id_dev;
/* unused harmony export appId */

const mongodbUrl = isProduction ? __WEBPACK_IMPORTED_MODULE_0__server_config___default.a.mongodb_pro : __WEBPACK_IMPORTED_MODULE_0__server_config___default.a.mongodb_dev;
/* unused harmony export mongodbUrl */

const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
/* unused harmony export databaseUrl */

const redisInfo = isProduction ? __WEBPACK_IMPORTED_MODULE_0__server_config___default.a.redis_pro : __WEBPACK_IMPORTED_MODULE_0__server_config___default.a.redis_dev;
/* unused harmony export redisInfo */


console.log('############## env ####################');

console.log(`## node_env = ${node_env}`);
console.log(`## web_host = ${web_host}`);
console.log(`## web_port = ${web_port}`);
console.log(`## host = ${host}`);
console.log(`## port = ${port}`);
console.log(`## mongodbUrl = ${mongodbUrl}`);
console.log(`## redisInfo host = ${redisInfo.host}`);
console.log(`## redisInfo port = ${redisInfo.port}`);

console.log('#######################################');

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_log4js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_log4js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_log4js__);



__WEBPACK_IMPORTED_MODULE_1_log4js___default.a.configure({
  appenders: [{ type: 'console' }, { type: 'file', filename: 'logs/cheese.log', category: 'cheese' }]
});

const logger = __WEBPACK_IMPORTED_MODULE_1_log4js___default.a.getLogger('cheese');
logger.setLevel( true ? 'DEBUG' : 'ERROR');

/* harmony default export */ __webpack_exports__["a"] = (logger);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(65);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(66);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(64);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;

      if (--inserted[id] <= 0) {
        var elem = document.getElementById(prefix + id);
        if (elem) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && btoa) {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_https__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_https___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_https__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);



__WEBPACK_IMPORTED_MODULE_0_https___default.a.globalAgent = new __WEBPACK_IMPORTED_MODULE_0_https___default.a.Agent({ keepAlive: true });

class request {
  // constructor(opt) {
  //   this.address = opt.address;
  // }

  get(hostname, url, param = {}) {
    return new Promise((resolve, reject) => {
      try {
        url = url || '';
        const queryData = __WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify(param, { arrayFormat: 'brackets' });
        const options = {
          // hostname: this.address,
          hostname,
          path: `/${url}?${queryData}`,
          headers: {
            'x-app-id': '56c6c309243cb728205a3dff'
          }
        };
        __WEBPACK_IMPORTED_MODULE_0_https___default.a.get(options, res => {
          const { statusCode, headers } = res;

          res.setEncoding('utf8');

          let rawData = '';

          res.on('data', chunk => {
            rawData += chunk;
          });

          res.on('end', () => {
            const body = { statusCode, headers, rawData };
            return resolve(body);
          });
        });
      } catch (err) {
        return reject(new Error(err));
      }
    });
  }

  post(hostname, url, param = {}) {
    return new Promise((resolve, reject) => {
      try {
        url = url || '';
        const formData = __WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify(param, { arrayFormat: 'brackets' });
        const options = {
          // hostname: this.address,
          hostname,
          path: `/${url}`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(formData)
          }
        };

        const req = __WEBPACK_IMPORTED_MODULE_0_https___default.a.request(options, res => {
          const { statusCode, headers } = res;

          res.setEncoding('utf8');

          let rawData = '';

          res.on('data', chunk => {
            rawData += chunk;
          });

          res.on('end', () => {
            const body = { statusCode, headers, rawData };
            return resolve(body);
          });
        });

        req.write(formData);
        req.end();
      } catch (err) {
        return reject(new Error(err));
      }
    });
  }

  postJson(hostname, url, param = {}) {
    return new Promise((resolve, reject) => {
      try {
        url = url || '';
        const data = JSON.stringify(param);
        const options = {
          // hostname: this.address,
          hostname,
          path: `/${url}`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data)
          }
        };

        const req = __WEBPACK_IMPORTED_MODULE_0_https___default.a.request(options, res => {
          const { statusCode } = res;

          if (statusCode !== 200) {
            res.resume();
            return reject(new Error(`Status Code: ${statusCode}`));
          }

          res.setEncoding('utf8');

          let rawData = '';

          res.on('data', chunk => {
            rawData += chunk;
          });

          res.on('end', () => {
            try {
              const result = JSON.parse(rawData);

              if (Number(result.code) !== 1) {
                let err_message = result.message || result.code;
                if (typeof err_message === 'string' || typeof err_message === 'number') {
                  err_message = new Error(err_message);
                }
                return reject(err_message);
              }

              return resolve(result.result);
            } catch (e) {
              return reject(e);
            }
          });
        });
        req.write(data);
        req.end();
      } catch (err) {
        return reject(new Error(err));
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrToObjByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseTime; });
/* unused harmony export getUrlQuery */
var _arguments = arguments;
const arrToObjByKey = (key, arr) => {
  if (!key) {
    throw new Error('arrToObjByKey in enhance.js is lack of key');
  }
  if (typeof key !== 'string') {
    throw new Error('arrToObjByKey in enhance.js, key should be string');
  }
  let result = {};
  for (let item of arr) {
    if (item && item[key]) {
      result[item[key]] = item;
    }
  }
  return result;
};

const parseTime = (time, cFormat) => {
  if (_arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (`${time}`.length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    if (result.length > 0 && value < 10) {
      if (key === 'i' || key === 's') {
        value = `0${value}`;
      }
    }
    return value || 0;
  });
  return timeStr;
};

const getUrlQuery = key => {
  let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
  let res = window.location.search.substr(1).match(reg);
  if (res !== null) {
    return unescape(res[2]);
  }
  return null;
};



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("promise");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllCoursesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getRecommendation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCourseInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTeacherIntros; });
/* unused harmony export getMemberCourseInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCourseBanners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getCourseFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getCourseOutlines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getCourseFaqs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFaqs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFaqDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
let getAllCoursesList = (() => {
  var _ref = _asyncToGenerator(function* ({ page, limit }) {
    try {
      if (!page || !limit) {
        throw new Error('api: "getAllCoursesList" params error');
      }

      let res = yield Request.get(`course-api${__WEBPACK_IMPORTED_MODULE_1__config__["d" /* ENV */]}.tinfinite.com`, 'v3/course/course-list-unlogin', { page, limit });

      res = JSON.parse(res.rawData);

      if (res.code && res.code === 1) {
        return res.result;
      }
      throw new Error(res.message);
    } catch (err) {
      throw new Error('recommendation_api_error');
    }
  });

  return function getAllCoursesList(_x) {
    return _ref.apply(this, arguments);
  };
})();

let getRecommendation = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    try {
      let res = yield Request.get(`api-saas${__WEBPACK_IMPORTED_MODULE_1__config__["d" /* ENV */]}.tinfinite.com`, 'v3/recommendation',
      // type 推荐类型：1: 课程 2. 文章 3. 频道
      { type: 1 });

      res = JSON.parse(res.rawData);

      if (res.code && res.code === 1) {
        return res.result;
      }
      throw new Error(res.message);
    } catch (err) {
      throw new Error('recommendation_api_error');
    }
  });

  return function getRecommendation() {
    return _ref2.apply(this, arguments);
  };
})();

let getCourseInfo = (() => {
  var _ref3 = _asyncToGenerator(function* (courseId) {
    try {
      if (!courseId) {
        throw new Error('api: "getCourseInfo" needs param "courseId"');
      }

      let res = yield Request.get(`course-api${__WEBPACK_IMPORTED_MODULE_1__config__["d" /* ENV */]}.tinfinite.com`, 'v3/course/course-info', { product_id: courseId });

      res = JSON.parse(res.rawData);

      if (res.code && res.code === 1) {
        return res.result;
      }
      throw new Error(res.message);
    } catch (err) {
      throw new Error(err);
    }
  });

  return function getCourseInfo(_x2) {
    return _ref3.apply(this, arguments);
  };
})();

let getTeacherIntros = (() => {
  var _ref4 = _asyncToGenerator(function* (courseId) {
    try {
      if (!courseId) {
        throw new Error('api: "getTeacherIntros" needs param "courseId"');
      }

      let res = yield Request.get(`course-api${__WEBPACK_IMPORTED_MODULE_1__config__["d" /* ENV */]}.tinfinite.com`, 'v3/course/teacher-intros', { product_id: courseId });

      res = JSON.parse(res.rawData);

      if (res.code && res.code === 1) {
        return res.result;
      }
      throw new Error(res.message);
    } catch (err) {
      throw new Error(err);
    }
  });

  return function getTeacherIntros(_x3) {
    return _ref4.apply(this, arguments);
  };
})();

let getCourseBanners = (() => {
  var _ref5 = _asyncToGenerator(function* (courseId) {
    try {
      if (!courseId) {
        throw new Error('api: "getCourseBanners" needs param "courseId"');
      }

      let res = yield Request.get(`course-api${__WEBPACK_IMPORTED_MODULE_1__config__["d" /* ENV */]}.tinfinite.com`, 'v3/course/banners', { product_id: courseId });

      res = JSON.parse(res.rawData);

      if (res.code && res.code === 1) {
        return res.result;
      }
      throw new Error(res.message);
    } catch (err) {
      throw new Error(err);
    }
  });

  return function getCourseBanners(_x4) {
    return _ref5.apply(this, arguments);
  };
})();

let getCourseFeatures = (() => {
  var _ref6 = _asyncToGenerator(function* (courseId) {
    try {
      if (!courseId) {
        throw new Error('api: "getCourseFeatures" needs param "courseId"');
      }

      let res = yield Request.get(`course-api${__WEBPACK_IMPORTED_MODULE_1__config__["d" /* ENV */]}.tinfinite.com`, 'v3/course/features', { product_id: courseId });

      res = JSON.parse(res.rawData);

      if (res.code && res.code === 1) {
        return res.result;
      }
      throw new Error(res.message);
    } catch (err) {
      throw new Error(err);
    }
  });

  return function getCourseFeatures(_x5) {
    return _ref6.apply(this, arguments);
  };
})();

let getCourseOutlines = (() => {
  var _ref7 = _asyncToGenerator(function* (courseId) {
    try {
      if (!courseId) {
        throw new Error('api: "getCourseOutlines" needs param "courseId"');
      }

      let res = yield Request.get(`course-api${__WEBPACK_IMPORTED_MODULE_1__config__["d" /* ENV */]}.tinfinite.com`, 'v3/course/outlines', { product_id: courseId });

      res = JSON.parse(res.rawData);

      if (res.code && res.code === 1) {
        return res.result;
      }
      throw new Error(res.message);
    } catch (err) {
      throw new Error(err);
    }
  });

  return function getCourseOutlines(_x6) {
    return _ref7.apply(this, arguments);
  };
})();

let getCourseFaqs = (() => {
  var _ref8 = _asyncToGenerator(function* (courseId) {
    try {
      if (!courseId) {
        throw new Error('api: "getCourseFaqs" needs param "courseId"');
      }

      let res = yield Request.get(`course-api${__WEBPACK_IMPORTED_MODULE_1__config__["d" /* ENV */]}.tinfinite.com`, 'v3/course/faqs', { product_id: courseId });

      res = JSON.parse(res.rawData);

      if (res.code && res.code === 1) {
        return res.result;
      }
      throw new Error(res.message);
    } catch (err) {
      throw new Error(err);
    }
  });

  return function getCourseFaqs(_x7) {
    return _ref8.apply(this, arguments);
  };
})();

let getFaqs = (() => {
  var _ref9 = _asyncToGenerator(function* () {
    try {
      let res = yield Request.get(`api-saas${__WEBPACK_IMPORTED_MODULE_1__config__["d" /* ENV */]}.tinfinite.com`, 'v3/problem/h5/list', { app_id: '56c6c309243cb728205a3dff' });

      res = JSON.parse(res.rawData);

      if (res.code && res.code === 1) {
        return res.result;
      }
      throw new Error(res.message);
    } catch (err) {
      throw new Error(err);
    }
  });

  return function getFaqs() {
    return _ref9.apply(this, arguments);
  };
})();

let getFaqDetail = (() => {
  var _ref10 = _asyncToGenerator(function* (faqId) {
    try {
      let res = yield Request.get(`api-saas${__WEBPACK_IMPORTED_MODULE_1__config__["d" /* ENV */]}.tinfinite.com`, `v3/problem/h5/detail/${faqId}`);

      res = JSON.parse(res.rawData);

      if (res.code && res.code === 1) {
        return res.result;
      }
      throw new Error(res.message);
    } catch (err) {
      throw new Error(err);
    }
  });

  return function getFaqDetail(_x8) {
    return _ref10.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




const Request = new __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */]();



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_css__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer__ = __webpack_require__(21);
var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/Layout/Layout.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







class Layout extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }),
      this.props.children,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })
    );
  }
}

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Layout_css___default.a)(Layout));

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_history__ = __webpack_require__(27);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/Link/Link.js';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_1__core_history__["a" /* default */].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
          { to, children } = _props,
          props = _objectWithoutProperties(_props, ['to', 'children']);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({ href: to }, props, { onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }),
      children
    );
  }
}

Link.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};
Link.defaultProps = {
  onClick: null
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * config
 */

var path = __webpack_require__(17);

var config = {

  name: '新生大学活动中心', // 社区名字
  description: '', // 社区的描述
  keywords: '',

  // 添加到 html head 中的信息
  site_headers: ['<meta name="xugaoyang" content="xugaoyang01@gmail.com" />'],

  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名

  session_secret: 'activities_secret', // 务必修改
  auth_cookie_name: 'activities_cookie', // 务必修改

  mongodb_pro: 'mongodb://127.0.0.1/activities_db',
  mongodb_dev: 'mongodb://127.0.0.1/activities_db_test',

  redis_pro: { host: '127.0.0.1', port: 6379, db: 0, password: '' },
  redis_dev: { host: '127.0.0.1', port: 6379, db: 0, password: '' },

  // 话题列表显示的话题数量
  list_topic_count: 50,

  // 话题回复的数量
  list_reply_count: 50,

  // admin 可删除话题，编辑标签。把 user_login_name 换成你的登录名
  admins: { admin: true },

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  qn_access: {
    accessKey: '',
    secretKey: '',
    bucket: '',
    origin: '',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: ''
  },

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  file_limit: '1MB',

  mdType: 'markdown', // markdown的样式

  xsAppId: '56c6c309243cb728205a3dff',

  xsKey_test: {
    partner_id: '58a29943fdec1df763000001',
    key: '6BNPb3Rpmui8HTneVYT7'
  },

  xsKey: {
    partner_id: '58a29943fdec1df763000001',
    key: '6BNPb3Rpmui8HTneVYT7'
  }
};

module.exports = config;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(49);
    var insertCss = __webpack_require__(4);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./ErrorPage.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom_server__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_universal_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pretty_error__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_App__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Html__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes_error_ErrorPage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_error_ErrorPage_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_json__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__server_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__server_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__server_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_loader__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_express_session__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__server_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_compression__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_connect_busboy__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_connect_busboy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_connect_busboy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_errorhandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_errorhandler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_errorhandler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__server_middlewares_request_log__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__server_middlewares_render__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__server_common_logger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_helmet__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_bytes__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_bytes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_bytes__);
var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/server.js',
    _this = this;

__webpack_require__(71);
// require('./server/middlewares/mongoose_log'); // 打印 mongodb 查询日志
// require('./server/models');



// import connectMongodb from 'connect-mongo';










 // eslint-disable-line import/no-unresolved



if (!__WEBPACK_IMPORTED_MODULE_14__config__["a" /* debug */] && __WEBPACK_IMPORTED_MODULE_15__server_config___default.a.oneapm_key) {
  __webpack_require__(85);
}


// var LoaderConnect = require('loader-connect');













// const MongoStore = new connectMongodb(session);
// assets
let serverAssets = {};

if (__WEBPACK_IMPORTED_MODULE_14__config__["b" /* mini_assets */]) {
  try {
    serverAssets = __webpack_require__(61);
  } catch (e) {
    __WEBPACK_IMPORTED_MODULE_25__server_common_logger__["a" /* default */].error('You must execute `make build` before start app when mini_assets is true.');
    throw e;
  }
}

const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

// configuration in all env
app.set('views', __WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', __webpack_require__(74));

app.locals._layoutFile = 'layout.html';
app.enable('trust proxy');
// Request logger。请求时间
app.use(__WEBPACK_IMPORTED_MODULE_23__server_middlewares_request_log__["a" /* requestLog */]);
if (__WEBPACK_IMPORTED_MODULE_15__server_config___default.a.debug) {
  // 渲染时间
  app.use(__WEBPACK_IMPORTED_MODULE_24__server_middlewares_render__["a" /* default */]);
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
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()(__WEBPACK_IMPORTED_MODULE_15__server_config___default.a.session_secret));
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());

app.use('/public', __WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));
app.use('/fileCache', __WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'fileCache')));
app.use(__webpack_require__(89)());

app.use(__WEBPACK_IMPORTED_MODULE_26_helmet___default.a.frameguard('sameorigin'));
app.use(__webpack_require__(83)());

app.use(__WEBPACK_IMPORTED_MODULE_20_compression___default()());
app.use(__webpack_require__(15)(__WEBPACK_IMPORTED_MODULE_15__server_config___default.a.session_secret));
// app.use(session({
//   secret: serverConfig.session_secret,
//   store: new MongoStore({
//     url: mongodbUrl,
//   }),
//   resave: true,
//   saveUninitialized: true,
// }));

__WEBPACK_IMPORTED_MODULE_15__server_config___default.a.mini_assets = __WEBPACK_IMPORTED_MODULE_14__config__["b" /* mini_assets */];

__WEBPACK_IMPORTED_MODULE_19_lodash___default.a.extend(app.locals, {
  config: __WEBPACK_IMPORTED_MODULE_15__server_config___default.a,
  Loader: __WEBPACK_IMPORTED_MODULE_16_loader___default.a,
  assets: serverAssets,
  _: __WEBPACK_IMPORTED_MODULE_19_lodash___default.a,
  staticFile(filePath) {
    if (filePath.indexOf('http') === 0 || filePath.indexOf('//') === 0) {
      return filePath;
    }
    return __WEBPACK_IMPORTED_MODULE_15__server_config___default.a.site_static_host + filePath;
  }
});

app.use(__WEBPACK_IMPORTED_MODULE_21_connect_busboy___default()({
  limits: {
    fileSize: __WEBPACK_IMPORTED_MODULE_27_bytes___default()(__WEBPACK_IMPORTED_MODULE_15__server_config___default.a.file_limit)
  }
}));

app.use((req, res, next) => {
  __WEBPACK_IMPORTED_MODULE_25__server_common_logger__["a" /* default */].debug('query'.red, JSON.stringify(req.query));
  __WEBPACK_IMPORTED_MODULE_25__server_common_logger__["a" /* default */].debug('body'.red, JSON.stringify(req.body));
  next();
});

app.use((req, res, next) => {
  app.locals.xsUserInfo = req.xsobj && req.xsobj.userInfo ? req.xsobj.userInfo : null;
  next();
});

// app.use(passport.initialize());

if (true) {
  app.enable('trust proxy');
}

app.use('/', __WEBPACK_IMPORTED_MODULE_18__server_router__["a" /* default */]);

app.use(function (req, res, next) {
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
const pe = new __WEBPACK_IMPORTED_MODULE_7_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  __WEBPACK_IMPORTED_MODULE_25__server_common_logger__["a" /* default */].error(err);

  if (typeof err !== 'object') {
    err = new Error(err);
  }

  if (req.xhr) {
    const statusCode = res.statusCode || 500;

    res.status(statusCode).json({ err });
  } else {
    const html = __WEBPACK_IMPORTED_MODULE_5_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_9__components_Html__["a" /* default */],
      {
        title: 'Internal Server Error',
        description: err.message,
        style: __WEBPACK_IMPORTED_MODULE_11__routes_error_ErrorPage_css___default.a._getCss() // eslint-disable-line no-underscore-dangle
        , __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_5_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], { error: err, __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: _this
      }))
    ));
    res.status(err.status || 500);
    res.send(`<!doctype html>${html}`);
  }
});
//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
// models.sync().catch(err => console.error(err.stack)).then(() => {
app.listen(__WEBPACK_IMPORTED_MODULE_14__config__["c" /* port */], () => {
  console.log('server run at env: ', "pre");
  console.log(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_14__config__["c" /* port */]}/`);
});
// });
/* eslint-enable no-console */

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
  }

}

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element.isRequired
};
App.childContextTypes = ContextType;
/* unused harmony default export */ var _unused_webpack_default_export = (App);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(12);
var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/Footer/Footer.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class Footer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.text, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          '\xA9 Your Company'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          '\xB7'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link, to: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          'Home'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          '\xB7'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link, to: '/admin', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          'Admin'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          '\xB7'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link, to: '/privacy', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          },
          'Privacy'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          },
          '\xB7'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link, to: '/not-found', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          'Not Found'
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a)(Footer));

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_small_png__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__logo_small_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png__);
var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/Header/Header.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Navigation__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
          { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.brand, to: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_5__logo_small_png___default.a, srcSet: `${__WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png___default.a} 2x`, width: '38', height: '38', alt: 'React', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.brandTxt, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            'Your Company'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.banner, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.bannerTitle, __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            },
            'React'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.bannerDesc, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            'Complex web apps made easy'
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Header_css___default.a)(Header));

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/Html.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




class Html extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const { title, description, styles, scripts, children } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'html',
      { className: 'no-js', lang: 'en', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'head',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: description, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }),
        styles.map(style => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', {
          key: style.id,
          id: style.id
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: { __html: style.cssText },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }))
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'body',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          id: 'app'
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: { __html: children },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }),
        scripts.map(script => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: script, src: script, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }))
      )
    );
  }
}

Html.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  styles: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    id: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    cssText: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired),
  scripts: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired),
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
Html.defaultProps = {
  styles: [],
  scripts: []
};
/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__(12);
var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/Navigation/Navigation.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







class Navigation extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.root, role: 'navigation', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, to: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        },
        'About'
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a)(Navigation));

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Page_css__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Page_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Page_css__);
var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/Page/Page.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Page extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const { title, html } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Page_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Page_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: html },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        })
      )
    );
  }
}

Page.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  html: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Page_css___default.a)(Page));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localFetch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(1);
/* unused harmony reexport Request */
/* unused harmony reexport Headers */
/* unused harmony reexport Response */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





__WEBPACK_IMPORTED_MODULE_1_node_fetch___default.a.Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;
__WEBPACK_IMPORTED_MODULE_1_node_fetch__["Response"].Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;

function localUrl(url) {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return `http://${__WEBPACK_IMPORTED_MODULE_2__config__["f" /* host */]}${url}`;
}

function localFetch(url, options) {
  return __WEBPACK_IMPORTED_MODULE_1_node_fetch___default()(localUrl(url), options);
}



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__(25);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/routes/about/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/about',

  action() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const data = yield new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(62);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

      return {
        title: data.title,
        chunk: 'about',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Page__["a" /* default */], _extends({}, data, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: _this
          }))
        )
      };
    })();
  }

});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__);
var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/routes/error/ErrorPage.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class ErrorPage extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    if (true) {
      const { error } = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          error.name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          error.message
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'pre',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          },
          error.stack
        )
      );
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        },
        'Error'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        },
        'Sorry, a critical error occurred on this page.'
      )
    );
  }
}

ErrorPage.propTypes = {
  error: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    name: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    message: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    stack: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired
};

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default.a)(ErrorPage));

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_css__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Home_css__);
var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/routes/home/Home.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          },
          'React.js News'
        ),
        this.props.news.map(item => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'article',
          { key: item.link, className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.newsItem, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.newsTitle, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: item.link, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                },
                __self: this
              },
              item.title
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.newsDesc
            // eslint-disable-next-line react/no-danger
            , dangerouslySetInnerHTML: { __html: item.content },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          })
        ))
      )
    );
  }
}

Home.propTypes = {
  news: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    link: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    content: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
  })).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Home_css___default.a)(Home));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__(11);
var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/routes/home/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{news{title,link,content}}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      if (!data || !data.news) throw new Error('Failed to load the news feed.');
      return {
        title: 'React Starter Kit',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { news: data.news, __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: _this
          })
        )
      };
    })();
  }

});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
/* unused harmony default export */ var _unused_webpack_default_export = ({

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(31).default,
  // require('./contact').default,
  __webpack_require__(28).default,
  // require('./admin').default,

  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(34).default],

  action({ next }) {
    return _asyncToGenerator(function* () {
      // Execute each child route until one of them return the result
      const route = yield next();

      // Provide default values for title, description etc.
      route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
      route.description = route.description || '';

      return route;
    })();
  }

});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_css__);
var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/routes/notFound/NotFound.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class NotFound extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          this.props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          'Sorry, the page you were trying to view does not exist.'
        )
      )
    );
  }
}

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a)(NotFound));

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(33);
var _jsxFileName = '/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/routes/notFound/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const title = 'Page Not Found';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '*',

  action() {
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        })
      ),
      status: 404
    };
  }

});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(1);
let index = (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    let secondHost = 'web' + __WEBPACK_IMPORTED_MODULE_0__config__["d" /* ENV */] + '.';
    if (secondHost === 'web.') {
      secondHost = '';
    }

    res.render('abort.html', {
      pageTitle: '关于我们_新生大学网',
      pageDesc: '新生大学（隶属于北京七年教育科技有限公司）是专注互联网在线教育的平台，贯彻“督促”和“陪伴”两个主题，尽可能督促学生完成课程。我们是一个热爱互联网的年轻团队，我们用责任来做这件事情，致力于打造最高效学习的在线教育平台。',
      pageKeywords: '',
      secondHost: secondHost,
      APP_TOKEN_KEY: __WEBPACK_IMPORTED_MODULE_0__config__["e" /* APP_TOKEN_KEY */],
      ENV: __WEBPACK_IMPORTED_MODULE_0__config__["d" /* ENV */],
      pageStylePath: '/public/stylesheets/abort.css'
    });
  });

  return function index(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_promise__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_logger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_request__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_enhance__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(1);
let index = (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {

    let secondHost = 'web' + __WEBPACK_IMPORTED_MODULE_5__config__["d" /* ENV */] + '.';
    if (secondHost === 'web.') {
      secondHost = '';
    }

    res.render('contact.html', {
      pageTitle: '联系我们_新生大学网',
      pageDesc: '新生大学聚集了一群以持续自我升级为乐的同伴，可以这样联系我们。商务合作Email lixuewei@xinshengdaxue.com客服邮箱Email contact@xinshengdaxue.com办公地址北京市朝阳区建外SOHO东区',
      pageKeywords: '',
      secondHost: secondHost,
      APP_TOKEN_KEY: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* APP_TOKEN_KEY */],
      ENV: __WEBPACK_IMPORTED_MODULE_5__config__["d" /* ENV */],
      pageStylePath: '/public/stylesheets/contact.css'
    });
  });

  return function index(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new __WEBPACK_IMPORTED_MODULE_1_promise___default.a(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return __WEBPACK_IMPORTED_MODULE_1_promise___default.a.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }










/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_promise__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_logger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_request__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_enhance__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_js__ = __webpack_require__(10);
let index = (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    let courseId = req.params.courseId;

    let result = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["e" /* getCourseBanners */])(courseId);
    let banners = [];
    for (let i in result) {
      let _i = result[i];
      _i._content = _i.content + '?imageView2/5/w/1000/h/562';
      banners.push(_i._content);
    }

    let courseInfo = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["f" /* getCourseInfo */])(courseId);
    courseInfo._beginAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_enhance__["b" /* parseTime */])(courseInfo.beginAt / 1000, '{y}.{m}.{d}');
    courseInfo._endAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_enhance__["b" /* parseTime */])(courseInfo.endAt / 1000, '{y}.{m}.{d}');
    let curTime = Date.parse(new Date());
    if (curTime < courseInfo.signupDeadline) {
      courseInfo._signupDeadline = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_enhance__["b" /* parseTime */])(courseInfo.signupDeadline / 1000, '{y}.{m}.{d}');
    } else {
      courseInfo._signupDeadline = '已截止';
    }

    let features = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["g" /* getCourseFeatures */])(courseId);
    let arr = [];
    for (let i in features) {
      let _i = features[i];
      if (!arr[_i.flag]) {
        arr[_i.flag] = {};
      }
      arr[_i.flag][_i.contentTag] = _i.content;
    }
    features = Object.assign([], arr);

    let teacherIntros = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["d" /* getTeacherIntros */])(courseId);
    for (let i in teacherIntros) {
      let _i = teacherIntros[i];
      _i._avatar = _i.content + '?imageView2/1/w/760/h/760/interlace/1';
      if (_i.text) {
        // eslint-disable-next-line
        _i._introduction = _i.text.replace(/\n/g, '<br>');
      }
    }
    teacherIntros = Object.assign([], teacherIntros);

    let outlines = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["h" /* getCourseOutlines */])(courseId);
    arr = [];
    for (let i in outlines) {
      let item = outlines[i];
      if (!arr[item.flag]) {
        arr[item.flag] = {};
      }
      arr[item.flag][item.contentTag] = item.content;
    }
    for (let j in arr) {
      arr[j]['1'] = arr[j]['1'] + '?imageView2/1/w/100/h/100/interlace/1';
    }
    outlines = Object.assign([], arr);

    let faqs = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["i" /* getCourseFaqs */])(courseId);
    arr = [];
    for (let i in faqs) {
      let item = faqs[i];
      if (!arr[item.flag]) {
        arr[item.flag] = {};
      }
      arr[item.flag][item.contentTag] = item.content;
    }
    faqs = Object.assign([], arr);

    let secondHost = 'web' + __WEBPACK_IMPORTED_MODULE_5__config__["d" /* ENV */] + '.';
    if (secondHost === 'web.') {
      secondHost = '';
    }

    let tdk = {
      title: '七年教育 | 新生大学',
      desc: '',
      keywords: ''
    };

    if (courseInfo.tdk) {
      tdk = Object.assign(JSON.parse(courseInfo.tdk));
    }

    res.render('details.html', {
      pageTitle: tdk.title,
      pageDesc: tdk.desc,
      pageKeywords: tdk.keywords,
      secondHost: secondHost,
      APP_TOKEN_KEY: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* APP_TOKEN_KEY */],
      ENV: __WEBPACK_IMPORTED_MODULE_5__config__["d" /* ENV */],
      pageStylePath: '/public/stylesheets/details.css',
      banners: banners,
      courseInfo: courseInfo,
      features: features,
      outlines: outlines,
      teacherIntros: teacherIntros,
      faqs: faqs
    });
  });

  return function index(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new __WEBPACK_IMPORTED_MODULE_1_promise___default.a(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return __WEBPACK_IMPORTED_MODULE_1_promise___default.a.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }











/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_promise__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_logger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_request__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_enhance__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_js__ = __webpack_require__(10);
let index = (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    let faqs = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["a" /* getFaqs */])();

    let faqIds = [];
    for (let i in faqs) {
      let _i = faqs[i];
      faqIds.push(_i.common_problem_id);
      _i.index = Number(i) + 1;
    }

    let details = [];
    for (let j in faqIds) {
      let detail = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["b" /* getFaqDetail */])(faqIds[j]);
      detail.id = faqIds[j];
      details.push(detail);
    }
    details = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_enhance__["a" /* arrToObjByKey */])('id', details);

    for (let k in faqs) {
      let _k = faqs[k];
      _k.detail = details[_k.common_problem_id];
    }

    let secondHost = 'web' + __WEBPACK_IMPORTED_MODULE_5__config__["d" /* ENV */] + '.';
    if (secondHost === 'web.') {
      secondHost = '';
    }

    res.render('faqs.html', {
      pageTitle: '帮助反馈_新生大学网',
      pageDesc: '新生大学拥有卓越的创作团队、优质的用户群体,每日生产出大量的精华内容,大范围地发布在各大主流媒体平台上。我们会竭诚为您提供帮助，反馈信息！',
      pageKeywords: '',
      secondHost: secondHost,
      APP_TOKEN_KEY: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* APP_TOKEN_KEY */],
      ENV: __WEBPACK_IMPORTED_MODULE_5__config__["d" /* ENV */],
      pageStylePath: '/public/stylesheets/faqs.css',
      faqs: faqs
    });
  });

  return function index(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new __WEBPACK_IMPORTED_MODULE_1_promise___default.a(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return __WEBPACK_IMPORTED_MODULE_1_promise___default.a.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }











/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_promise__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_logger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_request__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_enhance__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_js__ = __webpack_require__(10);
let index = (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    const courses = [];
    const recommendation = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["j" /* getRecommendation */])();
    for (const i in recommendation) {
      // 来确定主页只取3个
      if (i === '3') break;

      // 获取课程详情
      const courseId = recommendation[i].id;
      const courseInfo = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["f" /* getCourseInfo */])(courseId);

      // 获取老师信息
      const teacherIntro = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["d" /* getTeacherIntros */])(courseId);

      // 数据处理
      const course = courseInfo;
      course.teacherIntro = teacherIntro[0];
      course._avatar = `${course.avatar}?imageView2/1/w/640/h/420/interlace/1`;
      course._beginAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_enhance__["b" /* parseTime */])(course.beginAt / 1000, '{y}.{m}.{d}');
      course._endAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_enhance__["b" /* parseTime */])(course.endAt / 1000, '{y}.{m}.{d}');
      courses.push(course);
    }

    let secondHost = 'web' + __WEBPACK_IMPORTED_MODULE_5__config__["d" /* ENV */] + '.';
    if (secondHost === 'web.') {
      secondHost = '';
    }

    res.render('index.html', {
      courses,
      pageTitle: '【新生大学网】在线学习_视频教程_网络课程_学习资料_新生大学APP_新生大学APP下载_新生大学软件下载',
      pageDesc: '新生大学网是在线学习平台的领军人物,为用户提供全方位的视频教程,网络课程,学习资料等在线学习资源（IT课程、外语、考研、职场、技能培训、医学、体育、音乐、舞蹈等）.我们拥有优秀的创作团队,每日更新大量优质学习课程,绝对给您不一样的学习体验!',
      pageKeywords: '在线学习,视频教程,网络课程,学习资料,自主学习,新生大学APP,新生大学APP下载,新生大学软件下载',
      secondHost: secondHost,
      APP_TOKEN_KEY: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* APP_TOKEN_KEY */],
      ENV: __WEBPACK_IMPORTED_MODULE_5__config__["d" /* ENV */],
      pageStylePath: '/public/stylesheets/index.css'
    });
  });

  return function index(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new __WEBPACK_IMPORTED_MODULE_1_promise___default.a(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return __WEBPACK_IMPORTED_MODULE_1_promise___default.a.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }











/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_promise__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_logger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_request__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_enhance__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_js__ = __webpack_require__(10);
let index = (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    let curPage = req.params.page;
    let limit = 9;
    let result = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["c" /* getAllCoursesList */])({ page: curPage, limit: limit });
    let courses = result.rows;
    let total = result.total;

    // 将每个课程的courseId(productId)收集，获取老师介绍
    // 将每个课程的liveshowId收集，获取是否正在直播
    let courseIds = [];
    for (let i in courses) {
      let _i = courses[i];
      courseIds.push(_i.id);
      _i._avatar = _i.avatar + '?imageView2/1/w/640/h/420/interlace/1';
      _i._beginAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_enhance__["b" /* parseTime */])(_i.beginAt / 1000, '{y}.{m}.{d}');
      _i._endAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_enhance__["b" /* parseTime */])(_i.endAt / 1000, '{y}.{m}.{d}');
    }

    // 循环获得老师介绍数组并以courseId规约为对象
    // “我的授课”不需要获取老师信息
    let teacherIntros = [];
    for (let j in courseIds) {
      let teacherIntro = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_js__["d" /* getTeacherIntros */])(courseIds[j]);
      teacherIntros.push(teacherIntro[0]);
    }
    teacherIntros = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_enhance__["a" /* arrToObjByKey */])('productId', teacherIntros);

    // 补充老师信息
    for (let k in courses) {
      let _k = courses[k];
      _k.teacherIntro = teacherIntros[_k.id];
    }

    // 初始化分页
    let pageCount = Math.ceil(total / limit);
    let showPagination = pageCount > 1;
    let pageItem = [];
    for (let i = 0; i < pageCount; i++) {
      pageItem.push({ 'page': i + 1 });
    }

    let secondHost = 'web' + __WEBPACK_IMPORTED_MODULE_5__config__["d" /* ENV */] + '.';
    if (secondHost === 'web.') {
      secondHost = '';
    }

    res.render('lessons.html', {
      pageTitle: '【在线课程】在线课程学习_在线课程学习平台_新生大学网',
      pageDesc: '新生大学网提供海量在线课程,课程包括外语,IT课程,职场,技能培训等当下高人气学习课程,让热爱学习的人们可通过我们的在线课程学习平台不断提升自身价值,实现自我梦想!',
      pageKeywords: '在线课程，在线课程学习,在线课程学习平台',
      secondHost: secondHost,
      APP_TOKEN_KEY: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* APP_TOKEN_KEY */],
      ENV: __WEBPACK_IMPORTED_MODULE_5__config__["d" /* ENV */],
      pageStylePath: '/public/stylesheets/lessons.css',
      courses: courses,
      showPagination: showPagination,
      curPage: curPage,
      pageItem: pageItem
    });
  });

  return function index(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new __WEBPACK_IMPORTED_MODULE_1_promise___default.a(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return __WEBPACK_IMPORTED_MODULE_1_promise___default.a.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }











/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_logger__ = __webpack_require__(2);


// Patch res.render method to output logger
/* harmony default export */ __webpack_exports__["a"] = (function (req, res, next) {
  res._render = res.render;

  res.render = function (view, options, fn) {
    const t = new Date();

    res._render(view, options, fn);

    const duration = new Date() - t;
    __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].info('Render view', view, `(${duration}ms)`.green);
  };

  next();
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ignore */
/* harmony export (immutable) */ __webpack_exports__["a"] = requestLog;
/* unused harmony export requestErrorLog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_logger__ = __webpack_require__(2);


var ignore = /^\/(public|agent)/;

function requestLog(req, res, next) {
  // Assets do not out log.
  if (ignore.test(req.url)) {
    next();
    return;
  }

  const t = new Date();
  __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].info('\n\nStarted', t.toISOString(), req.method, req.url, req.ip);

  res.on('finish', () => {
    const duration = new Date() - t;

    __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].info('Completed', res.statusCode, `(${duration}ms)`.green);
  });

  next();
}

function requestErrorLog(req, res) {
  // Assets do not out log.
  if (ignore.test(req.url)) {
    return;
  }

  const t = new Date();
  __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].error('\n\nStarted', t.toISOString(), req.method, req.url, req.ip);

  res.on('finish', () => {
    const duration = new Date() - t;

    __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].error('Completed', res.statusCode, `(${duration}ms)`.green);
  });
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_details__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_lessons__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_abort__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_contact__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_faqs__ = __webpack_require__(38);








const router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.get('/', __WEBPACK_IMPORTED_MODULE_1__controllers_home__["a" /* index */]);
router.get('/details/:courseId', __WEBPACK_IMPORTED_MODULE_2__controllers_details__["a" /* index */]);
router.get('/lessons/:page', __WEBPACK_IMPORTED_MODULE_3__controllers_lessons__["a" /* index */]);
router.get('/abort', __WEBPACK_IMPORTED_MODULE_4__controllers_abort__["a" /* index */]);
router.get('/contact', __WEBPACK_IMPORTED_MODULE_5__controllers_contact__["a" /* index */]);
router.get('/faqs', __WEBPACK_IMPORTED_MODULE_6__controllers_faqs__["a" /* index */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Footer-root-1UUMy {\n  background: #333;\n  color: #fff;\n}\n\n.Footer-container-3dfAC {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer-text-3ReUN {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer-spacer-297xE {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer-text-3ReUN,\n.Footer-link-3qHjF {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-link-3qHjF,\n.Footer-link-3qHjF:active,\n.Footer-link-3qHjF:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer-link-3qHjF:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/Footer/Footer.css","/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAoC;EACpC,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  background: #333;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Footer-root-1UUMy",
	"container": "Footer-container-3dfAC",
	"text": "Footer-text-3ReUN",
	"spacer": "Footer-spacer-297xE",
	"link": "Footer-link-3qHjF"
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Header-root-O9oW9 {\n  background: #373277;\n  color: #fff;\n}\n\n.Header-container-qQ2mF {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1000px;\n}\n\n.Header-brand-2oS_y {\n  color: rgb(146, 229, 252);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.Header-brandTxt-230aH {\n  margin-left: 10px;\n}\n\n.Header-nav-3pohg {\n  float: right;\n  margin-top: 6px;\n}\n\n.Header-banner-2AXOj {\n  text-align: center;\n}\n\n.Header-bannerTitle-3dmwX {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.Header-bannerDesc-I2eY9 {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n", "", {"version":3,"sources":["/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/Header/Header.css","/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADfD;EACE,oBAAoB;EACpB,YAAY;CACb;;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAoC;CACrC;;AAED;EACE,0BAAiD;EACjD,sBAAsB;EACtB,kBAAkB,CAAC,WAAW;CAC/B;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,WAAW;EACX,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;CACX","file":"Header.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n:root {\n  --brand-color: #61dafb;\n}\n\n.root {\n  background: #373277;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: var(--max-content-width);\n}\n\n.brand {\n  color: color(var(--brand-color) lightness(+10%));\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.brandTxt {\n  margin-left: 10px;\n}\n\n.nav {\n  float: right;\n  margin-top: 6px;\n}\n\n.banner {\n  text-align: center;\n}\n\n.bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.bannerDesc {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Header-root-O9oW9",
	"container": "Header-container-qQ2mF",
	"brand": "Header-brand-2oS_y",
	"brandTxt": "Header-brandTxt-230aH",
	"nav": "Header-nav-3pohg",
	"banner": "Header-banner-2AXOj",
	"bannerTitle": "Header-bannerTitle-3dmwX",
	"bannerDesc": "Header-bannerDesc-I2eY9"
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif;/* 1 */\n  line-height: 1.15;/* 2 */\n  -ms-text-size-adjust: 100%;/* 3 */\n  -webkit-text-size-adjust: 100%;/* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain {/* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;/* 1 */\n  height: 0;/* 1 */\n  overflow: visible;/* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;/* 1 */\n  font-size: 1em;/* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent;/* 1 */\n  -webkit-text-decoration-skip: objects;/* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;/* 1 */\n  text-decoration: underline;/* 2 */\n  text-decoration: underline dotted;/* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;/* 1 */\n  font-size: 1em;/* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;/* 1 */\n  font-size: 100%;/* 1 */\n  line-height: 1.15;/* 1 */\n  margin: 0;/* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {/* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {/* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;/* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;/* 1 */\n  color: inherit;/* 2 */\n  display: table;/* 1 */\n  max-width: 100%;/* 1 */\n  padding: 0;/* 3 */\n  white-space: normal;/* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block;/* 1 */\n  vertical-align: baseline;/* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;/* 1 */\n  padding: 0;/* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;/* 1 */\n  outline-offset: -2px;/* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;/* 1 */\n  font: inherit;/* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, \nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/Layout/Layout.css","/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/variables.css","/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AC9BD,4EAA4E;;AAE5E;;;;;GAKG;;AAEH;gFACgF;;AAVtE;EACR,wBAAwB,OAAQ;EAChC,kBAAkB,OAAQ;EAC1B,2BAA2B,OAAQ;EACnC,+BAA+B,OAAQ;CACxC;;AAcD;gFACgF;;AAEhF;;GAEG;;AAxBO;EACR,UAAU;CACX;;AA4BD;;GAEG;;AAhCO;;;;;;EAMR,eAAe;CAChB;;AAoCD;;;GAGG;;AA9CO;EACR,eAAe;EACf,iBAAiB;CAClB;;AAkDD;gFACgF;;AAEhF;;;GAGG;;AA3DO;;MAEH,OAAO;EACZ,eAAe;CAChB;;AA+DD;;GAEG;;AArEO;EACR,iBAAiB;CAClB;;AAyED;;;GAGG;;AA9EO;EACR,wBAAwB,OAAQ;EAChC,UAAU,OAAQ;EAClB,kBAAkB,OAAQ;CAC3B;;AAkFD;;;GAGG;;AAzFO;EACR,kCAAkC,OAAQ;EAC1C,eAAe,OAAQ;CACxB;;AA6FD;gFACgF;;AAEhF;;;GAGG;;AAtGO;EACR,8BAA8B,OAAQ;EACtC,sCAAsC,OAAQ;CAC/C;;AA0GD;;;GAGG;;AAhHO;;EAER,iBAAiB;CAClB;;AAoHD;;;GAGG;;AA1HO;EACR,oBAAoB,OAAQ;EAC5B,2BAA2B,OAAQ;EACnC,kCAAkC,OAAQ;CAC3C;;AA8HD;;GAEG;;AApIO;;EAER,qBAAqB;CACtB;;AAwID;;GAEG;;AA7IO;;EAER,oBAAoB;CACrB;;AAiJD;;;GAGG;;AAvJO;;;EAGR,kCAAkC,OAAQ;EAC1C,eAAe,OAAQ;CACxB;;AA2JD;;GAEG;;AAlKO;EACR,mBAAmB;CACpB;;AAsKD;;GAEG;;AA1KO;EACR,uBAAuB;EACvB,YAAY;CACb;;AA8KD;;GAEG;;AAnLO;EACR,eAAe;CAChB;;AAuLD;;;GAGG;;AA5LO;;EAER,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AANS;EACR,gBAAgB;CACjB;;AAFS;EACR,YAAY;CACb;;AA4MD;gFACgF;;AAEhF;;GAEG;;AAnNO;;EAER,sBAAsB;CACvB;;AAuND;;GAEG;;AA5NO;EACR,cAAc;EACd,UAAU;CACX;;AAgOD;;GAEG;;AArOO;EACR,mBAAmB;CACpB;;AAyOD;;GAEG;;AA7OO;EACR,iBAAiB;CAClB;;AAiPD;gFACgF;;AAEhF;;;GAGG;;AAzPO;;;;;EAKR,wBAAwB,OAAQ;EAChC,gBAAgB,OAAQ;EACxB,kBAAkB,OAAQ;EAC1B,UAAU,OAAQ;CACnB;;AA6PD;;;GAGG;;AAzQO;OACF,OAAO;EACb,kBAAkB;CACnB;;AA6QD;;;GAGG;;AAnRO;QACD,OAAO;EACd,qBAAqB;CACtB;;AAuRD;;;;GAIG;;AA9RO;;;;EAIR,2BAA2B,OAAQ;CACpC;;AAkSD;;GAEG;;AAzSO;;;;EAIR,mBAAmB;EACnB,WAAW;CACZ;;AA6SD;;GAEG;;AArTO;;;;EAIR,+BAA+B;CAChC;;AAyTD;;GAEG;;AAhUO;EACR,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAoUD;;;;;GAKG;;AA7UO;EACR,uBAAuB,OAAQ;EAC/B,eAAe,OAAQ;EACvB,eAAe,OAAQ;EACvB,gBAAgB,OAAQ;EACxB,WAAW,OAAQ;EACnB,oBAAoB,OAAQ;CAC7B;;AAiVD;;;GAGG;;AA3VO;EACR,sBAAsB,OAAQ;EAC9B,yBAAyB,OAAQ;CAClC;;AA+VD;;GAEG;;AApWO;EACR,eAAe;CAChB;;AAwWD;;;GAGG;;AA7WO;;EAER,uBAAuB,OAAQ;EAC/B,WAAW,OAAQ;CACpB;;AAiXD;;GAEG;;AAvXO;;EAER,aAAa;CACd;;AA2XD;;;GAGG;;AAjYO;EACR,8BAA8B,OAAQ;EACtC,qBAAqB,OAAQ;CAC9B;;AAqYD;;GAEG;;AA1YO;;EAER,yBAAyB;CAC1B;;AA8YD;;;GAGG;;AApZO;EACR,2BAA2B,OAAQ;EACnC,cAAc,OAAQ;CACvB;;AAwZD;gFACgF;;AAEhF;;;GAGG;;AAjaO;;EAER,eAAe;CAChB;;AAqaD;;GAEG;;AA1aO;EACR,mBAAmB;CACpB;;AA8aD;gFACgF;;AAEhF;;GAEG;;AArbO;EACR,sBAAsB;CACvB;;AAybD;;GAEG;;AA7bO;EACR,cAAc;CACf;;AAicD;gFACgF;;AAEhF;;GAEG;;AAxcO;EACR,cAAc;CACf;;AFWD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,2DAAqC;EACrC,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n@global-import 'normalize.css' ;\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-2gcJx {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.Navigation-link-Ntl35 {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-Ntl35,\n.Navigation-link-Ntl35:active,\n.Navigation-link-Ntl35:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation-link-Ntl35:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Navigation-highlight-2UNlq {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.Navigation-highlight-2UNlq:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.Navigation-spacer-3vZVG {\n  color: rgba(255, 255, 255, 0.3);\n}\n", "", {"version":3,"sources":["/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;CACb;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,gCAAgC;CACjC","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.highlight:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Navigation-root-2gcJx",
	"link": "Navigation-link-Ntl35",
	"highlight": "Navigation-highlight-2UNlq",
	"spacer": "Navigation-spacer-3vZVG"
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Page-root-2VuHt {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Page-container-QOUG7 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/Page/Page.css","/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Page.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Page-root-2VuHt",
	"container": "Page-container-QOUG7"
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;CACd;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Home-root-1avl7 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Home-container-3YPN- {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n\n.Home-newsItem--EKGZ {\n  margin: 0 0 32px;\n  margin: 0 0 2rem;\n}\n\n.Home-newsTitle-3GwAp {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\n\n.Home-newsDesc-107uo h1,\n  .Home-newsDesc-107uo h2,\n  .Home-newsDesc-107uo h3,\n  .Home-newsDesc-107uo h4,\n  .Home-newsDesc-107uo h5,\n  .Home-newsDesc-107uo h6 {\n  font-size: 18px;\n  font-size: 1.125rem;\n}\n\n.Home-newsDesc-107uo pre {\n  white-space: pre-wrap;\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n\n.Home-newsDesc-107uo img {\n  max-width: 100%;\n}\n", "", {"version":3,"sources":["/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/routes/home/Home.css","/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;;AAED;EACE,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE,gBAAkB;EAAlB,kBAAkB;CACnB;;AAGC;;;;;;EAME,gBAAoB;EAApB,oBAAoB;CACrB;;AAED;EACE,sBAAsB;EACtB,gBAAoB;EAApB,oBAAoB;CACrB;;AAED;EACE,gBAAgB;CACjB","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n\n.newsItem {\n  margin: 0 0 2rem;\n}\n\n.newsTitle {\n  font-size: 1.5rem;\n}\n\n.newsDesc {\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: 1.125rem;\n  }\n\n  pre {\n    white-space: pre-wrap;\n    font-size: 0.875rem;\n  }\n\n  img {\n    max-width: 100%;\n  }\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Home-root-1avl7",
	"container": "Home-container-3YPN-",
	"newsItem": "Home-newsItem--EKGZ",
	"newsTitle": "Home-newsTitle-3GwAp",
	"newsDesc": "Home-newsDesc-107uo"
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.NotFound-root-3_3g8 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-3FKMx {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/routes/notFound/NotFound.css","/Users/qingfeideyi/Documents/workSpace/xinsheng-web-app/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "NotFound-root-3_3g8",
	"container": "NotFound-container-3FKMx"
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/Header/logo-small.png?2f751285";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/Header/logo-small@2x.png?8844262b";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(44);
    var insertCss = __webpack_require__(4);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Footer.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Footer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(45);
    var insertCss = __webpack_require__(4);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Header.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Header.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(46);
    var insertCss = __webpack_require__(4);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Layout.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(47);
    var insertCss = __webpack_require__(4);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Navigation.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Navigation.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(48);
    var insertCss = __webpack_require__(4);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Page.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Page.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(50);
    var insertCss = __webpack_require__(4);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Home.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Home.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(51);
    var insertCss = __webpack_require__(4);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./NotFound.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = {"/public/stylesheets/knowxs.min.css":"/public/stylesheets/knowxs.min.f67ad202.min.css","/public/knowxs.min.js":"/public/knowxs.min.f201a94c.min.js"}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {"title":"About Us","component":"ContentPage","html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat\ntortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum\nlobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis\ntortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere\nligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem\npharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat\naugue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem.\nNullam efficitur vulputate mauris, nec maximus leo dignissim id.</p>\n<p>In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.\nMorbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae\nplacerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel\npurus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus\nposuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie\nac sollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu\ntempor. Sed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in\nconsequat elit tellus auctor nulla. Donec placerat elementum diam, vitae\nimperdiet lectus luctus at.</p>\n<p>Nullam eu feugiat mi. Quisque nec tristique nisl, dignissim dictum leo. Nam\nnon quam nisi. Donec rutrum turpis ac diam blandit, id pulvinar mauris\nsuscipit. Pellentesque tincidunt libero ultricies risus iaculis, sit amet\nconsequat velit blandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit\nut magna quis, feugiat porta nibh. Sed id enim lectus. Suspendisse elementum\njusto sapien, sit amet consequat orci accumsan et. Aliquam ornare ullamcorper\nsem sed finibus. Nullam ac lacus pulvinar, egestas felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem\nhendrerit aliquam. Integer eu varius orci. Vestibulum ante ipsum primis in\nfaucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at mauris\nnibh. Suspendisse maximus ac eros at vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas\ntortor et dui consequat faucibus. Nunc vitae odio ornare, venenatis ligula a,\nvulputate nisl. Aenean congue varius ex, sit amet bibendum odio posuere at.\nNulla facilisi. In finibus, nulla vitae tincidunt ornare, sapien nulla\nfermentum mauris, sed consectetur tortor arcu eget arcu. Vestibulum vel quam\nenim.</p>\n"};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("bytes");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("connect-busboy");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("ejs-mate");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("loader");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("oneapm");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("response-time");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
module.exports = __webpack_require__(18);


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map