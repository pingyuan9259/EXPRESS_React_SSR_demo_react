import _ from 'lodash';
import Promise from 'promise';
import logger from '../common/logger';
import request from '../utils/request';
import { parseTime, arrToObjByKey } from '../utils/enhance';
import { ENV, APP_TOKEN_KEY } from '../../config';
import { getAllCoursesList, getTeacherIntros } from './api.js';

async function index(req, res, next) {
  let curPage = req.params.page
  let limit = 9
  let result = await getAllCoursesList({ page: curPage, limit: limit })
  let courses = result.rows
  let total = result.total

  // 将每个课程的courseId(productId)收集，获取老师介绍
  // 将每个课程的liveshowId收集，获取是否正在直播
  let courseIds = []
  for (let i in courses) {
    let _i = courses[i]
    courseIds.push(_i.id)
    _i._avatar = _i.avatar + '?imageView2/1/w/640/h/420/interlace/1'
    _i._beginAt = parseTime(_i.beginAt / 1000, '{y}.{m}.{d}')
    _i._endAt = parseTime(_i.endAt / 1000, '{y}.{m}.{d}')
  }

  // 循环获得老师介绍数组并以courseId规约为对象
  // “我的授课”不需要获取老师信息
  let teacherIntros = []
  for (let j in courseIds) {
    let teacherIntro = await getTeacherIntros(courseIds[j])
    teacherIntros.push(teacherIntro[0])
  }
  teacherIntros = arrToObjByKey('productId', teacherIntros)

  // 补充老师信息
  for (let k in courses) {
    let _k = courses[k]
    _k.teacherIntro = teacherIntros[_k.id]
  }

  // 初始化分页
  let pageCount = Math.ceil(total / limit)
  let showPagination = pageCount > 1
  let pageItem = []
  for (let i = 0; i < pageCount; i++) {
    pageItem.push({'page': i + 1})
  }

  let secondHost = 'web' + ENV + '.'
  if (secondHost === 'web.') {
    secondHost = ''
  }

  res.render('lessons.html', {
    pageTitle: '【在线课程】在线课程学习_在线课程学习平台_新生大学网',
    pageDesc: '新生大学网提供海量在线课程,课程包括外语,IT课程,职场,技能培训等当下高人气学习课程,让热爱学习的人们可通过我们的在线课程学习平台不断提升自身价值,实现自我梦想!',
    pageKeywords: '在线课程，在线课程学习,在线课程学习平台',
    secondHost: secondHost,
    APP_TOKEN_KEY: APP_TOKEN_KEY,
    ENV: ENV,
    pageStylePath: '/public/stylesheets/lessons.css',
    courses: courses,
    showPagination: showPagination,
    curPage: curPage,
    pageItem: pageItem
  });
}

export { index };
