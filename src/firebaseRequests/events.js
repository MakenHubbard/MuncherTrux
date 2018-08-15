import axios from 'axios';

import constants from '../constants';

const getRequest = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/schedules.json?orderBy="uid"&equalTo="${uid}"`)
      .then((res) => {
        const events = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            events.push(res.data[fbKey]);
          });
        }
        resolve(events);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getJustTheOneEvent = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/schedules/${id}.json`
      )
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const getAllEventsForTruck = (truckId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/schedules.json?orderBy="truckId"&equalTo="${truckId}"`)
      .then(res => {
        const events = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            events.push(res.data[fbKey]);
          });
        }
        resolve(events);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const postRequest = (newSchedule) => {
  return new Promise((resolve, reject) => {
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

const deleteEventRequest = (eventId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${constants.firebaseConfig.databaseURL}/schedules/${eventId}.json`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const editEventRequest = (eventId, editedEvent) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${constants.firebaseConfig.databaseURL}/schedules/${eventId}.json`, editedEvent)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { postRequest, getRequest, deleteEventRequest, editEventRequest, getJustTheOneEvent, getAllEventsForTruck };
