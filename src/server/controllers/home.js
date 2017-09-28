import _ from 'lodash';
import Promise from 'promise';
import logger from '../common/logger';
import request from '../utils/request';
import { parseTime } from '../utils/enhance';
import { ENV, APP_TOKEN_KEY } from '../../config';
import {
  getRecommendation,
  getCourseInfo,
  getTeacherIntros
} from './api.js';

async function index(req, res, next) {
  const courses = [];
  const recommendation = await getRecommendation();
  for (const i in recommendation) {
    // 来确定主页只取3个
    if (i === '3') break;

    // 获取课程详情
    const courseId = recommendation[i].id;
    const courseInfo = await getCourseInfo(courseId);

    // 获取老师信息
    const teacherIntro = await getTeacherIntros(courseId);

    // 数据处理
    const course = courseInfo;
    course.teacherIntro = teacherIntro[0];
    course._avatar = `${course.avatar}?imageView2/1/w/640/h/420/interlace/1`;
    course._beginAt = parseTime(course.beginAt / 1000, '{y}.{m}.{d}');
    course._endAt = parseTime(course.endAt / 1000, '{y}.{m}.{d}');
    courses.push(course);
  }

  let secondHost = 'web' + ENV + '.'
  if (secondHost === 'web.') {
    secondHost = ''
  }

  res.render('index.html', {
    courses,
    pageTitle: '【新生大学网】在线学习_视频教程_网络课程_学习资料_新生大学APP_新生大学APP下载_新生大学软件下载',
    pageDesc: '新生大学网是在线学习平台的领军人物,为用户提供全方位的视频教程,网络课程,学习资料等在线学习资源（IT课程、外语、考研、职场、技能培训、医学、体育、音乐、舞蹈等）.我们拥有优秀的创作团队,每日更新大量优质学习课程,绝对给您不一样的学习体验!',
    pageKeywords: '在线学习,视频教程,网络课程,学习资料,自主学习,新生大学APP,新生大学APP下载,新生大学软件下载',
    secondHost: secondHost,
    APP_TOKEN_KEY: APP_TOKEN_KEY,
    ENV: ENV,
    pageStylePath: '/public/stylesheets/index.css'
  });
}

export { index };
