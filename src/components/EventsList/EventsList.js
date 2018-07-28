import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { eventShape } from '../../proopz/eventProps';
import Event from '../Event/Event';
import eventRequests from '../../firebaseRequests/events';
import authRequest from '../../firebaseRequests/auth';

import './EventsList.css';

class EventsList extends React.Component {
  static propTypes = {
    events: PropTypes.arrayOf(eventShape),
  };

  state = {
    events: [],
  }

  componentDidMount () {
    eventRequests.getRequest(authRequest.getUid())
      .then((events) => {
        console.log(events);
        this.setState({ events });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render () {
    const { events } = this.state;
    if (events !== null) {
      console.log(events);
      const eventComponents = events.map((event) => {
        return (
          <Event
            event={event}
            key={event.id}
          />
        );
      });
      return (
        <div className="container">
          <h1>Events</h1>
          <div>
            {eventComponents}
          </div>
          <button>
            <Link to='/addevent'>Add Event</Link>
          </button>
        </div>
      );
    };
  };
}

export default EventsList;
