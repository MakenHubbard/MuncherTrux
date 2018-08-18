import React from 'react';

import authRequest from '../../firebaseRequests/auth';
import eventRequests from '../../firebaseRequests/events';
import truckRequests from '../../firebaseRequests/trucks';

import './AddEvent.css';

const defaultSchedule = {
  address: '37645 Power Saw Rd',
  city: 'Man City',
  state: 'TN',
  zip: '36750',
  imageUrl: 'data:image/jpeg;base64,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',
  arrival: 'Saturday June 36th 3:00pm',
  departure: 'Saturday June 36th 8:00pm',
  eventAttending: 'The About To Be Annual Man Run',
  truckId: '',
  uid: '',
};

class AddEvent extends React.Component {
  state = {
    newSchedule: defaultSchedule,
  };

  saveNewScheduleEvent = (e) => {
    const { newSchedule } = this.state;
    e.preventDefault();
    const uid = authRequest.getUid();
    newSchedule.uid = uid;
    truckRequests
      .getRequest(uid)
      .then((res) => {
        newSchedule.truckId = res[0].id;
        eventRequests.postRequest(newSchedule)
          .then(() => {
            this.props.history.push('/eventslist');
          })
          .catch((err) => {
            console.error('inside the addEvents postRequest', err);
          });
      });
  }

  submitScheduleEvent = (info, e) => {
    const tempSchedule = { ...this.state.newSchedule };
    tempSchedule[info] = e.target.value;
    this.setState({ newSchedule: tempSchedule });
  };

  eventAttendingChange = (e) => {
    this.submitScheduleEvent('eventAttending', e);
  }

  addressChange = (e) => {
    this.submitScheduleEvent('address', e);
  }

  cityChange = (e) => {
    this.submitScheduleEvent('city', e);
  }

  stateChange = (e) => {
    this.submitScheduleEvent('state', e);
  }

  zipCodeChange = (e) => {
    this.submitScheduleEvent('zip', e);
  }

  imageUrlChange = (e) => {
    this.submitScheduleEvent('imageUrl', e);
  }

  arrivalTime = (e) => {
    this.submitScheduleEvent('arrival', e);
  }

  departureTime = (e) => {
    this.submitScheduleEvent('departure', e);
  }

  render () {
    const { newSchedule } = this.state;
    return (
      <div id="addEventFormBack">
        <div id="addEventForm">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="theEvent" className="col-sm-2">Name of Event: </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="event" placeholder="" value={newSchedule.eventAttending} onChange={this.eventAttendingChange} />
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <label htmlFor="theAddress" className="col-sm-2">Address: </label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" id="address" placeholder="" value={newSchedule.address} onChange={this.addressChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="theCity" className="col-sm-2">City: </label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" id="city" placeholder="" value={newSchedule.city} onChange={this.cityChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="theState" className="col-sm-2">State: </label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" id="state" placeholder="" value={newSchedule.state} onChange={this.stateChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="theZip" className="col-sm-2">Zip Code: </label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" id="zip" placeholder="" value={newSchedule.zip} onChange={this.zipCodeChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="theImage" className="col-sm-2">ImageUrl: </label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" id="imageUrl" placeholder="" value={newSchedule.imageUrl} onChange={this.imageUrlChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="theArrival" className="col-sm-2">From: </label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" id="arrival" placeholder="" value={newSchedule.arrival} onChange={this.arrivalTime} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="theDeparture" className="col-sm-2">To: </label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" id="departure" placeholder="" value={newSchedule.departureTime} onChange={this.departureTime} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="saveEventBtn" onClick={this.saveNewScheduleEvent}>Save Event</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddEvent;
