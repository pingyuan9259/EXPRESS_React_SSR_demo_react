import request from '../utils/request';
import { ENV } from '../../config';

const Request = new request();

async function getAllCoursesList({ page, limit }) {
  try {
    if (!page || !limit) {
      throw new Error('api: "getAllCoursesList" params error')
    }

    let res = await Request.get(
      `course-api${ENV}.tinfinite.com`,
      'v3/course/course-list-unlogin',
      { page, limit }
    );

    res = JSON.parse(res.rawData);

    if (res.code && res.code === 1) {
      return res.result;
    }
    throw new Error(res.message);
  } catch (err) {
    throw new Error('recommendation_api_error');
  }
}

async function getRecommendation() {
  try {
    let res = await Request.get(
      `api-saas${ENV}.tinfinite.com`,
      'v3/recommendation',
      // type 推荐类型：1: 课程 2. 文章 3. 频道
      { type: 1 }
    );

    res = JSON.parse(res.rawData);

    if (res.code && res.code === 1) {
      return res.result;
    }
    throw new Error(res.message);
  } catch (err) {
    throw new Error('recommendation_api_error');
  }
}

async function getCourseInfo(courseId) {
  try {
    if (!courseId) {
      throw new Error('api: "getCourseInfo" needs param "courseId"');
    }

    let res = await Request.get(
      `course-api${ENV}.tinfinite.com`,
      'v3/course/course-info',
      { product_id: courseId },
    );

    res = JSON.parse(res.rawData);

    if (res.code && res.code === 1) {
      return res.result;
    }
    throw new Error(res.message);
  } catch (err) {
    throw new Error(err);
  }
}

async function getTeacherIntros(courseId) {
  try {
    if (!courseId) {
      throw new Error('api: "getTeacherIntros" needs param "courseId"');
    }

    let res = await Request.get(
      `course-api${ENV}.tinfinite.com`,
      'v3/course/teacher-intros',
      { product_id: courseId },
    );

    res = JSON.parse(res.rawData);

    if (res.code && res.code === 1) {
      return res.result;
    }
    throw new Error(res.message);
  } catch (err) {
    throw new Error(err);
  }
}

async function getCourseBanners(courseId) {
  try {
    if (!courseId) {
      throw new Error('api: "getCourseBanners" needs param "courseId"');
    }

    let res = await Request.get(
      `course-api${ENV}.tinfinite.com`,
      'v3/course/banners',
      { product_id: courseId },
    );

    res = JSON.parse(res.rawData);

    if (res.code && res.code === 1) {
      return res.result;
    }
    throw new Error(res.message);
  } catch (err) {
    throw new Error(err);
  }
}

async function getCourseFeatures(courseId) {
  try {
    if (!courseId) {
      throw new Error('api: "getCourseFeatures" needs param "courseId"');
    }

    let res = await Request.get(
      `course-api${ENV}.tinfinite.com`,
      'v3/course/features',
      { product_id: courseId },
    );

    res = JSON.parse(res.rawData);

    if (res.code && res.code === 1) {
      return res.result;
    }
    throw new Error(res.message);
  } catch (err) {
    throw new Error(err);
  }
}

async function getCourseOutlines(courseId) {
  try {
    if (!courseId) {
      throw new Error('api: "getCourseOutlines" needs param "courseId"');
    }

    let res = await Request.get(
      `course-api${ENV}.tinfinite.com`,
      'v3/course/outlines',
      { product_id: courseId },
    );

    res = JSON.parse(res.rawData);

    if (res.code && res.code === 1) {
      return res.result;
    }
    throw new Error(res.message);
  } catch (err) {
    throw new Error(err);
  }
}

async function getCourseFaqs(courseId) {
  try {
    if (!courseId) {
      throw new Error('api: "getCourseFaqs" needs param "courseId"');
    }

    let res = await Request.get(
      `course-api${ENV}.tinfinite.com`,
      'v3/course/faqs',
      { product_id: courseId },
    );

    res = JSON.parse(res.rawData);

    if (res.code && res.code === 1) {
      return res.result;
    }
    throw new Error(res.message);
  } catch (err) {
    throw new Error(err);
  }
}

async function getFaqs() {
  try {
    let res = await Request.get(
      `api-saas${ENV}.tinfinite.com`,
      'v3/problem/h5/list',
      { app_id: '56c6c309243cb728205a3dff' }
    );

    res = JSON.parse(res.rawData);

    if (res.code && res.code === 1) {
      return res.result;
    }
    throw new Error(res.message);
  } catch (err) {
    throw new Error(err);
  }
}

async function getFaqDetail(faqId) {
  try {
    let res = await Request.get(
      `api-saas${ENV}.tinfinite.com`,
      `v3/problem/h5/detail/${faqId}`,
    );

    res = JSON.parse(res.rawData);

    if (res.code && res.code === 1) {
      return res.result;
    }
    throw new Error(res.message);
  } catch (err) {
    throw new Error(err);
  }
}

export {
  getAllCoursesList,
  getRecommendation,
  getCourseInfo,
  getTeacherIntros,
  getMemberCourseInfo,
  getCourseBanners,
  getCourseFeatures,
  getCourseOutlines,
  getCourseFaqs,
  getFaqs,
  getFaqDetail
};
