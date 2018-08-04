import React from 'react';
import eventRequests from '../../firebaseRequests/events';

import './EditEvent.css';

const defaultEditEvent = {
  address: '',
  city: '',
  state: '',
  zip: '',
  arrival: '',
  departure: '',
  eventAttending: '',
  imageUrl: '',
  uid: '',
};

class EditEvent extends React.Component {

  state = {
    event: defaultEditEvent,
  }

  componentDidMount = () => {
    const fbId = this.props.match.params.id;
    eventRequests
      .getJustTheOneEvent(fbId)
      .then((event) => {
        this.setState({event});
      })
      .catch((err) => {
        console.error('error with the get request inside edit event', err);
      });
  };

  saveThisNewEditEvent = (e) => {
    const fbId = this.props.match.params.id;
    e.preventDefault();
    eventRequests
      .editEventRequest(fbId, this.state.event)
      .then(() => {
        this.props.history.push('/eventslist');
      })
      .catch((err) => {
        console.error('something went wrong in the put request for an edited event', err);
      });

  }

  submitEventEdit = (info, e) => {
    const tempEdit = {...this.state.event};
    tempEdit[info] = e.target.value;
    this.setState({ event: tempEdit});
  }

  eventAttendingChange = (e) => {
    this.submitEventEdit('eventAttending', e);
  }

  addressChange = (e) => {
    this.submitEventEdit('address', e);
  }

  cityChange = (e) => {
    this.submitEventEdit('city', e);
  }

  stateChange = (e) => {
    this.submitEventEdit('state', e);
  }

  zipChange = (e) => {
    this.submitEventEdit('zip', e);
  }

  imageUrlChange = (e) => {
    this.submitEventEdit('imageUrl', e);
  }

  startTimeChange = (e) => {
    this.submitEventEdit('arrival', e);
  }

  endTimeChange = (e) => {
    this.submitEventEdit('departure', e);
  }

  render () {
    const { event } = this.state;

    return (
      <div>
        <h1>Edit Event</h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="theEvent" className="col-sm-2">Name of Event: </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="eventAttending" placeholder="" value={event.eventAttending} onChange={this.eventAttendingChange}/>
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="theAddress" className="col-sm-2">Address: </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="address" placeholder="" value={event.address} onChange={this.addressChange}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="theCity" className="col-sm-2">City: </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="city" placeholder="" value={event.city} onChange={this.cityChange}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="theState" className="col-sm-2">State: </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="state" placeholder="" value={event.state} onChange={this.stateChange}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="theZip" className="col-sm-2">Zip Code: </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="zip" placeholder="" value={event.zip} onChange={this.zipChange}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="theImage" className="col-sm-2">Image Url: </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="imageUrl" placeholder="" value={event.imageUrl} onChange={this.imageUrlChange}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="theArrival" className="col-sm-2">From: </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="arrival" placeholder="" value={event.arrival} onChange={this.startTimeChange}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="theDeparture" className="col-sm-2">To: </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="departure" placeholder="" value={event.departure} onChange={this.endTimeChange}/>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default" onClick={this.saveThisNewEditEvent}>Save This Edit</button>
            </div>
          </div>
        </form>
      </div>
    );
  };
};

export default EditEvent;
