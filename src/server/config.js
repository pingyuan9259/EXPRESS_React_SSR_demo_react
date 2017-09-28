/**
 * config
 */

var path = require('path');

var config = {

  name: '新生大学活动中心', // 社区名字
  description: '', // 社区的描述
  keywords: '',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="xugaoyang" content="xugaoyang01@gmail.com" />'
  ],

  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名

  session_secret: 'activities_secret', // 务必修改
  auth_cookie_name: 'activities_cookie', // 务必修改

  mongodb_pro: 'mongodb://127.0.0.1/activities_db',
  mongodb_dev: 'mongodb://127.0.0.1/activities_db_test',

  redis_pro: { host: '127.0.0.1', port: 6379, db: 0, password: ''},
  redis_dev: { host: '127.0.0.1', port: 6379, db: 0, password: ''},

  // 话题列表显示的话题数量
  list_topic_count: 50,

  // 话题回复的数量
  list_reply_count: 50,

  // admin 可删除话题，编辑标签。把 user_login_name 换成你的登录名
  admins: { admin: true },

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  qn_access: {
    accessKey: '',
    secretKey: '',
    bucket: '',
    origin: '',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: '',
  },

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  file_limit: '1MB',

  mdType: 'markdown', // markdown的样式

  xsAppId: '56c6c309243cb728205a3dff',

  xsKey_test: {
    partner_id: '58a29943fdec1df763000001',
    key: '6BNPb3Rpmui8HTneVYT7'
  },

  xsKey: {
    partner_id: '58a29943fdec1df763000001',
    key: '6BNPb3Rpmui8HTneVYT7'
  }
};

module.exports = config;
