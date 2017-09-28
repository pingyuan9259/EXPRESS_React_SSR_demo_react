import _ from 'lodash';
import Promise from 'promise';
import logger from '../common/logger';
import request from '../utils/request';
import { parseTime } from '../utils/enhance';
import { ENV, APP_TOKEN_KEY } from '../../config';
import {
  getCourseBanners,
  getCourseInfo,
  getCourseFeatures,
  getTeacherIntros,
  getCourseOutlines,
  getCourseFaqs
} from './api.js';

async function index(req, res, next) {
  let courseId = req.params.courseId

  let result = await getCourseBanners(courseId)
  let banners = []
  for (let i in result) {
    let _i = result[i]
    _i._content = _i.content + '?imageView2/5/w/1000/h/562'
    banners.push(_i._content)
  }

  let courseInfo = await getCourseInfo(courseId)
  courseInfo._beginAt = parseTime(courseInfo.beginAt / 1000, '{y}.{m}.{d}')
  courseInfo._endAt = parseTime(courseInfo.endAt / 1000, '{y}.{m}.{d}')
  let curTime = Date.parse(new Date())
  if (curTime < courseInfo.signupDeadline) {
    courseInfo._signupDeadline = parseTime(courseInfo.signupDeadline / 1000, '{y}.{m}.{d}')
  } else {
    courseInfo._signupDeadline = '已截止'
  }

  let features = await getCourseFeatures(courseId)
  let arr = []
  for (let i in features) {
    let _i = features[i]
    if (!arr[_i.flag]) {
      arr[_i.flag] = {}
    }
    arr[_i.flag][_i.contentTag] = _i.content
  }
  features = Object.assign([], arr)

  let teacherIntros = await getTeacherIntros(courseId)
  for (let i in teacherIntros) {
    let _i = teacherIntros[i]
    _i._avatar = _i.content + '?imageView2/1/w/760/h/760/interlace/1'
    if (_i.text) {
      // eslint-disable-next-line
      _i._introduction = _i.text.replace(/\n/g, '<br>')
    }
  }
  teacherIntros = Object.assign([], teacherIntros)

  let outlines = await getCourseOutlines(courseId)
  arr = []
  for (let i in outlines) {
    let item = outlines[i]
    if (!arr[item.flag]) {
      arr[item.flag] = {}
    }
    arr[item.flag][item.contentTag] = item.content
  }
  for (let j in arr) {
    arr[j]['1'] = arr[j]['1'] + '?imageView2/1/w/100/h/100/interlace/1'
  }
  outlines = Object.assign([], arr)

  let faqs = await getCourseFaqs(courseId)
  arr = []
  for (let i in faqs) {
    let item = faqs[i]
    if (!arr[item.flag]) {
      arr[item.flag] = {}
    }
    arr[item.flag][item.contentTag] = item.content
  }
  faqs = Object.assign([], arr)

  let secondHost = 'web' + ENV + '.'
  if (secondHost === 'web.') {
    secondHost = ''
  }

  let tdk = {
    title: '七年教育 | 新生大学',
    desc: '',
    keywords: ''
  }

  if (courseInfo.tdk) {
    tdk = Object.assign(JSON.parse(courseInfo.tdk))
  }

  res.render('details.html', {
    pageTitle: tdk.title,
    pageDesc: tdk.desc,
    pageKeywords: tdk.keywords,
    secondHost: secondHost,
    APP_TOKEN_KEY: APP_TOKEN_KEY,
    ENV: ENV,
    pageStylePath: '/public/stylesheets/details.css',
    banners: banners,
    courseInfo: courseInfo,
    features: features,
    outlines: outlines,
    teacherIntros: teacherIntros,
    faqs: faqs
  });
}

export { index };
