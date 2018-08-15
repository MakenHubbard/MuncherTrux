import React from 'react';
import eventsRequest from '../../firebaseRequests/events';

import './VisitorsEvents.css';

class VisitorsEvents extends React.Component {
  state = {
    events: [],
  }

  componentDidMount = () => {
    const truckId = this.props.match.params.id;
    console.log('truckId', truckId);
    eventsRequest
      .getAllEventsForTruck(truckId)
      .then((events) => {
        this.setState({events}, console.log(this.state.events));
      })
      .catch((err) => {
        console.error('error in the visitorsEvents component', err);
      });

  }

  render () {
    console.log(this.state.events);
    const allEvents = this.state.events.map((event) => {
      return (
        <div key={event.id}>
          <h1>{event.eventAttending}</h1>
        </div>
      );
    });

    return (
      <div>
        <h1>Events</h1>
        {allEvents}
      </div>
    );
  }
}

export default VisitorsEvents;