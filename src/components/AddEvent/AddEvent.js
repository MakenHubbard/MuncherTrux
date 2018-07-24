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
    eventRequests
      .postRequest(newSchedule)
      .then(() => {
        this.props.history.push('/eventslist');
      })
      .catch((err) => {
        console.error('inside the addEvents postRequest', err);
      });
  }

  render () {
    return (
      <div>
        <form class="form-horizontal">
          <div className="form-group">
            <label htmlFor="event" className="col-sm-2 control-label">Name of Event: </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="event" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="address" className="col-sm-2 control-label">Address: </label>
              <div className="col-sm-3">
                <input type="text" class="form-control" id="address" placeholder="1234 main St." />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="city" className="col-sm-2 control-label">City: </label>
              <div className="col-sm-3">
                <input type="text" class="form-control" id="city" placeholder="" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="state" className="col-sm-2 control-label">State: </label>
              <div className="col-sm-3">
                <input type="text" class="form-control" id="state" placeholder="" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="zip" className="col-sm-2 control-label">Zip Code: </label>
              <div className="col-sm-3">
                <input type="text" class="form-control" id="zip" placeholder="" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="arrival" className="col-sm-2 control-label">From: </label>
              <div className="col-sm-3">
                <input type="text" class="form-control" id="arrival" placeholder="" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="departure" className="col-sm-2 control-label">To: </label>
              <div className="col-sm-3">
                <input type="text" class="form-control" id="departure" placeholder="" />
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
