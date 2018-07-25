import axios from 'axios';

import constants from '../constants';

const postRequest = (newSchedule) => {
  return new Promise((resolve,reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/schedules.json`, newSchedule)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { postRequest };
