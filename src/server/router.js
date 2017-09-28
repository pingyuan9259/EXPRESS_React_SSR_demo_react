import express from 'express';
import * as home from './controllers/home';
import * as details from './controllers/details';
import * as lessons from './controllers/lessons';
import * as abort from './controllers/abort';
import * as contact from './controllers/contact';
import * as faqs from './controllers/faqs';

const router = express.Router();

router.get('/', home.index);
router.get('/details/:courseId', details.index);
router.get('/lessons/:page', lessons.index);
router.get('/abort', abort.index);
router.get('/contact', contact.index);
router.get('/faqs', faqs.index);

export default router;
