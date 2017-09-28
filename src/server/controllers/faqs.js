import _ from 'lodash';
import Promise from 'promise';
import logger from '../common/logger';
import request from '../utils/request';
import { parseTime, arrToObjByKey } from '../utils/enhance';
import { ENV, APP_TOKEN_KEY } from '../../config';
import {
  getFaqs,
  getFaqDetail
} from './api.js';

async function index(req, res, next) {
  let faqs = await getFaqs()

  let faqIds = []
  for (let i in faqs) {
    let _i = faqs[i]
    faqIds.push(_i.common_problem_id)
    _i.index = Number(i) + 1
  }

  let details = []
  for (let j in faqIds) {
    let detail = await getFaqDetail(faqIds[j])
    detail.id = faqIds[j]
    details.push(detail)
  }
  details = arrToObjByKey('id', details)

  for (let k in faqs) {
    let _k = faqs[k]
    _k.detail = details[_k.common_problem_id]
  }

  let secondHost = 'web' + ENV + '.'
  if (secondHost === 'web.') {
    secondHost = ''
  }

  res.render('faqs.html', {
    pageTitle: '帮助反馈_新生大学网',
    pageDesc: '新生大学拥有卓越的创作团队、优质的用户群体,每日生产出大量的精华内容,大范围地发布在各大主流媒体平台上。我们会竭诚为您提供帮助，反馈信息！',
    pageKeywords: '',
    secondHost: secondHost,
    APP_TOKEN_KEY: APP_TOKEN_KEY,
    ENV: ENV,
    pageStylePath: '/public/stylesheets/faqs.css',
    faqs: faqs
  });
}

export { index };
