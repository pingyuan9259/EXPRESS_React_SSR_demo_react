import Redis from 'ioredis';
import logger from './logger';
import { redisInfo } from '../../config';

const client = new Redis({
  port: redisInfo.port,
  host: redisInfo.host,
  db: redisInfo.db,
  password: redisInfo.password,
});

client.on('error', (err) => {
  if (err) {
    logger.error('connect to redis error, check your redis config', err);
    process.exit(1);
  }
});

export default client;
