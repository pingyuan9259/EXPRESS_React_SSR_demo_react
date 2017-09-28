import logger from '../common/logger';

export var ignore = /^\/(public|agent)/;

export function requestLog(req, res, next) {
  // Assets do not out log.
  if (ignore.test(req.url)) {
    next();
    return;
  }

  const t = new Date();
  logger.info('\n\nStarted', t.toISOString(), req.method, req.url, req.ip);

  res.on('finish', () => {
    const duration = ((new Date()) - t);

    logger.info('Completed', res.statusCode, (`(${duration}ms)`).green);
  });

  next();
}

export function requestErrorLog(req, res) {
  // Assets do not out log.
  if (ignore.test(req.url)) {
    return;
  }

  const t = new Date();
  logger.error('\n\nStarted', t.toISOString(), req.method, req.url, req.ip);

  res.on('finish', () => {
    const duration = ((new Date()) - t);

    logger.error('Completed', res.statusCode, (`(${duration}ms)`).green);
  });
}

