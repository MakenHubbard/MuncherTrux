import React from 'react';
// need to get the values of the input field working
import authRequest from '../../firebaseRequests/auth';
import eventRequests from '../../firebaseRequests/events';

import './AddEvent.css';

const defaultSchedule = {
  address: '',
  city: '',
  state: '',
  zip: '',
  arrival: '',
  departure: '',
  eventAttending: '',
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
    eventRequests.postRequest(newSchedule)
      .then(() => {
        this.props.history.push('/eventslist');
      })
      .catch((err) => {
        console.error('inside the addEvents postRequest', err);
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

  arrivalTime = (e) => {
    this.submitScheduleEvent('arrival', e);
  }

  departureTime = (e) => {
    this.submitScheduleEvent('departure', e);
  }

  render () {
    const { newSchedule } = this.state;
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="theEvent" className="col-sm-2">Name of Event: </label>
            <div className="col-sm-10">
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
              <label htmlFor="theArrival" className="col-sm-2">From: </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="arrival" placeholder="" value={newSchedule.arrival} onChange={this.arrivalTime} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="theDeparture" className="col-sm-2">To: </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="departure" placeholder="" value={newSchedule.departureTime} onChange={this.departure} />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default" onClick={this.saveNewScheduleEvent}>Save Event</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEvent;
