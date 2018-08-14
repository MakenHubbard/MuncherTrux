import axios from 'axios';
import constants from '../constants';

const getRequest = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/trucks.json?orderBy="uid"&equalTo="${uid}"`)
      .then((res) => {
        const trucks = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            trucks.push(res.data[fbKey]);
          });
        }
        resolve(trucks);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getAllTrucksRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/trucks.json`)
      .then((res) => {
        const trucks = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            trucks.push(res.data[fbKey]);
          });
        }
        resolve(trucks);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const postRequest = (newTruck) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/trucks.json`, newTruck)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const gettingUsersTruckForEdit = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/trucks/${id}.json`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const editTruck = (truckId, updatedTruck) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${constants.firebaseConfig.databaseURL}/trucks/${truckId}.json`, updatedTruck)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { postRequest, getRequest, editTruck, gettingUsersTruckForEdit, getAllTrucksRequest };
