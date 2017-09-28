import config from './server/config';

export const node_env = process.env.NODE_ENV || 'development';

let env = '';
if (node_env === 'development' || node_env === 'dev') {
  env = 'dev';
}
if (node_env === 'pre') {
  env = 'pre';
}

export const APP_TOKEN_KEY = env ? '_app_token_' + env : '_app_token';
export const ENV = env ? '-' + env : '';
console.log(env, ENV, APP_TOKEN_KEY, '28309213891203812093821903821903810')
export const isProduction = node_env === 'production';
export const debug = !isProduction;

export const web_port = process.env.WEB_PORT || 3001;
export const web_host = process.env.WEB_HOST ? `${process.env.WEB_HOST}:${web_port}` : `localhost:${web_port}`;

export const port = process.env.PORT || 3001;
export const host = process.env.HOST ? `${process.env.HOST}:${port}` : `localhost:${port}`;
export const web_name = config.name;

export const mini_assets = node_env === 'production';

export const appId = isProduction ? config.app_id_pro : config.app_id_dev;
export const mongodbUrl = isProduction ? config.mongodb_pro : config.mongodb_dev;
export const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
export const redisInfo = isProduction ? config.redis_pro : config.redis_dev;


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
