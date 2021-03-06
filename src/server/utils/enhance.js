const arrToObjByKey = (key, arr) => {
  if (!key) {
    throw new Error('arrToObjByKey in enhance.js is lack of key')
  }
  if (typeof key !== 'string') {
    throw new Error('arrToObjByKey in enhance.js, key should be string')
  }
  let result = {}
  for (let item of arr) {
    if (item && item[key]) {
      result[item[key]] = item
    }
  }
  return result
}

const parseTime = (time, cFormat) => {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if ((`${time}`).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
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

const getUrlQuery = (key) => {
  let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
  let res = window.location.search.substr(1).match(reg)
  if (res !== null) {
    return unescape(res[2])
  }
  return null
};

export {
  arrToObjByKey,
  parseTime,
  getUrlQuery
};
