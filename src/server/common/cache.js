import _ from 'lodash';
import redis from './redis';
import logger from './logger';

export function get(key) {
  return new Promise((resolove, reject) => {
    const t = new Date();
    redis.get(key, (err, data) => {
      if (err) {
        logger.debug('redis.get error.');
        return resolove();
      }

      var duration = (new Date() - t);
      logger.debug('Cache', 'get', key, (`${duration}ms`).green);

      if (!data) {
        return resolove();
      }

      data = JSON.parse(data);
      resolove(data);
    });
  });
}

// time 参数可选，秒为单位
export function set(key, value, time) {
  return new Promise((resolove, reject) => {
    const t = new Date();

    value = JSON.stringify(value);

    if (!time) {
      redis.set(key, value, (err) => {
        if (err) {
          logger.debug('redis.set error.');
        }

        resolove();
      });
    } else {
      redis.setex(key, time, value, (err) => {
        if (err) {
          logger.debug('redis.set error.');
        }

        resolove();
      });
    }
    var duration = (new Date() - t);
    logger.debug('Cache', 'set', key, (`${duration}ms`).green);
  });
}
