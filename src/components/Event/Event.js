import React from 'react';
// import PropTypes from 'prop-types';

// import { eventShape } from '../../proopz/eventProps';
import eventRequests from '../../firebaseRequests/events';

import './Event.css';

const defaultEvent = {
  address: '',
  city: '',
  state: '',
  zip: '',
  arrival: '',
  departure: '',
  eventAttending: '',
  uid: '',
};

class Event extends React.Component {
  state = {
    newEvent: defaultEvent,
  }

  deleteEvent = () => {
    const fbId = this.props.event.id;
    eventRequests
      .deleteEventRequest(fbId)
      .then(() => {
        this.props.refreshPage();
      })
      .catch((err) => {
        console.error('error in the delete event', err);
      });
  }

  routeToEditPage = (e) => {
    e.preventDefault();
    this.props.history.push(`/editevent/${this.props.event.id}`);

  }

  render () {
    const { event } = this.props;
    return (
      <div className="jumbotron">
        <div className="media">
          <div className="media-left">
            <img className="media-object" src="... " alt="..." />
          </div>
          <div className="media-body">
            <h4 className="media-heading">{event.eventAttending}</h4>
            <ul>
              <li className="eventtext-center" >
                <span className="col-xs-4">{event.address} <br /> {event.city}, {event.state} {event.zip}</span>
                <span className="col-xs-3">From: {event.arrival}</span>
                <span className="col-xs-3">To: {event.departure}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row eventsPageButtons" >
          <button className="editEvent col-xs-2" onClick={this.routeToEditPage}>
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          </button>
          <button className="deleteEvent  col-xs-2" onClick={this.deleteEvent}>
            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    );
  };
};

export default Event;
