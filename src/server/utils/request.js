import https from 'https';
import qs from 'qs';

https.globalAgent = new https.Agent({ keepAlive: true });

class request {
  // constructor(opt) {
  //   this.address = opt.address;
  // }

  get(hostname, url, param = {}) {
    return new Promise((resolve, reject) => {
      try {
        url = url || '';
        const queryData = qs.stringify(param, { arrayFormat: 'brackets' });
        const options = {
          // hostname: this.address,
          hostname,
          path: `/${url}?${queryData}`,
          headers: {
            'x-app-id': '56c6c309243cb728205a3dff',
          },
        };
        https.get(options, (res) => {
          const { statusCode, headers } = res;

          res.setEncoding('utf8');

          let rawData = '';

          res.on('data', (chunk) => { rawData += chunk; });

          res.on('end', () => {
            const body = { statusCode, headers, rawData };
            return resolve(body);
          });
        });
      } catch (err) {
        return reject(new Error(err));
      }
    });
  }

  post(hostname, url, param = {}) {
    return new Promise((resolve, reject) => {
      try {
        url = url || '';
        const formData = qs.stringify(param, { arrayFormat: 'brackets' });
        const options = {
          // hostname: this.address,
          hostname,
          path: `/${url}`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(formData),
          },
        };

        const req = https.request(options, (res) => {
          const { statusCode, headers } = res;

          res.setEncoding('utf8');

          let rawData = '';

          res.on('data', (chunk) => { rawData += chunk; });

          res.on('end', () => {
            const body = { statusCode, headers, rawData };
            return resolve(body);
          });
        });

        req.write(formData);
        req.end();
      } catch (err) {
        return reject(new Error(err));
      }
    });
  }

  postJson(hostname, url, param = {}) {
    return new Promise((resolve, reject) => {
      try {
        url = url || '';
        const data = JSON.stringify(param);
        const options = {
          // hostname: this.address,
          hostname,
          path: `/${url}`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data),
          },
        };

        const req = https.request(options, (res) => {
          const { statusCode } = res;

          if (statusCode !== 200) {
            res.resume();
            return reject(new Error(`Status Code: ${statusCode}`));
          }

          res.setEncoding('utf8');

          let rawData = '';

          res.on('data', (chunk) => { rawData += chunk; });

          res.on('end', () => {
            try {
              const result = JSON.parse(rawData);

              if (Number(result.code) !== 1) {
                let err_message = result.message || result.code;
                if (typeof err_message === 'string' || typeof err_message === 'number') {
                  err_message = new Error(err_message);
                }
                return reject(err_message);
              }

              return resolve(result.result);
            } catch (e) {
              return reject(e);
            }
          });
        });
        req.write(data);
        req.end();
      } catch (err) {
        return reject(new Error(err));
      }
    });
  }
}

export default request;
