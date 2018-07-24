import axios from 'axios';

import constants from '../constants';

const postRequest = (newEvent) => {
  return new Promise((resolve,reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/schedules.json`, newEvent)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default postRequest;
