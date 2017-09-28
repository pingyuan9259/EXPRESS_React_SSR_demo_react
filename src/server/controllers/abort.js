import { ENV, APP_TOKEN_KEY } from '../../config';

async function index(req, res, next) {
  let secondHost = 'web' + ENV + '.'
  if (secondHost === 'web.') {
    secondHost = ''
  }

  res.render('abort.html', {
    pageTitle: '关于我们_新生大学网',
    pageDesc: '新生大学（隶属于北京七年教育科技有限公司）是专注互联网在线教育的平台，贯彻“督促”和“陪伴”两个主题，尽可能督促学生完成课程。我们是一个热爱互联网的年轻团队，我们用责任来做这件事情，致力于打造最高效学习的在线教育平台。',
    pageKeywords: '',
    secondHost: secondHost,
    APP_TOKEN_KEY: APP_TOKEN_KEY,
    ENV: ENV,
    pageStylePath: '/public/stylesheets/abort.css'
  });
}

export { index };
