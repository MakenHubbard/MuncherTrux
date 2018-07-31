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
    this.refreshPage();
  }

  refreshPage = () => {
    eventRequests.getRequest(authRequest.getUid())
      .then((events) => {
        this.setState({ events });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render () {
    const { events } = this.state;
    if (events !== null) {
      const eventComponents = events.map((event) => {
        return (
          <Event
            event={event}
            key={event.id}
            onClick={this.deleteEvent}
            refreshPage={this.refreshPage }
            history={this.props.history}
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
