import bcrypt from 'bcryptjs';
import moment from 'moment';

moment.locale('zh-cn'); // 使用中文

// 格式化时间
export function formatDate(date, friendly) {
  date = moment(date);

  if (friendly) {
    return date.fromNow();
  }
  return date.format('YYYY-MM-DD HH:mm');
}

export function validateId(str) {
  return (/^[a-zA-Z0-9\-_]+$/i).test(str);
}

export function bhash(str) {
  return bcrypt.hashSync(str, 10);
}

export function bcompare(str, hash) {
  return bcrypt.compareSync(str, hash);
}

export function getTopicStatus() {
  return topicStatus;
}