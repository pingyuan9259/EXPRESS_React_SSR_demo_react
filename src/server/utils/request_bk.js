import axios from 'axios';
import qs from 'qs';
import logger from '../common/logger';
import config from '../config';

export default {
  init() {
    axios.defaults.headers.common['x-app-id'] = config.xsAppId;
  },

  get(params) {
    this.init();
    return axios({
      method: 'get',
      url: params.url,
    })
      .then((res) => {
        const data = res.data;
        return data;
      })
      .catch((error) => {});
  },
};
