import React from 'react';
import PropTypes from 'prop-types';

import { eventShape } from '../../proopz/eventProps';

import './Event.css';

class Event extends React.Component {
  static propTypes = {
    event: eventShape,
    index: PropTypes.number,
  }

  render () {
    const { event } = this.props;
    return (
      <div className="jumbotron">
        <div className="media">
          <div className="media-left">
            <img className="media-object" src="..." alt="..." />
          </div>
          <div className="media-body">
            <h4 className="media-heading">{event.eventAttending}</h4>
            <ul>
              <li className="event text-center">
                <span className="col-xs-4">{event.address} <br /> {event.city}, {event.state} {event.zip}</span>
                <span className="col-xs-3">From: {event.arrival}</span>
                <span className="col-xs-3">To: {event.departure}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row eventsPageButtons">
          <button className="editEvent col-xs-2">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          </button>
          <button className="deleteEvent col-xs-2">
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    );
  };
};

export default Event;
