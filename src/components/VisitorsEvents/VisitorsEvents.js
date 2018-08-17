import React from 'react';
import eventsRequest from '../../firebaseRequests/events';
import { Link } from 'react-router-dom';

import './VisitorsEvents.css';

class VisitorsEvents extends React.Component {
  state = {
    events: [],
  }

  componentDidMount = () => {
    const truckId = this.props.match.params.id;
    eventsRequest
      .getAllEventsForTruck(truckId)
      .then((events) => {
        this.setState({ events });
      })
      .catch((err) => {
        console.error('error in the visitorsEvents component', err);
      });

  }

  render () {
    const allEvents = this.state.events.map((event) => {
      return (
        <div key={event.id} className="visitorsEventsMainDiv">
          <div>
            <h1 className="visitorsEventTitle">{event.eventAttending}</h1>
          </div>
          <div >
            <img id="visitorsEventsImg" src={event.imageUrl} alt={event.imageUrl} />
          </div>
          <div className="row">
            <div className="col-xs-3">
              <span><u><b>Address:</b></u>   {event.address}</span>
            </div>
            <div className="col-xs-3">
              <span><u><b>City:</b></u>   {event.city}</span>
            </div>
            <div className="col-xs-3">
              <span><u><b>State:</b></u>   {event.state}</span>
            </div>
            <div className="col-xs-3">
              <span><u><b>Zip:</b></u>   {event.zip}</span>
            </div>
          </div>
          <div className="row" id="visitorsEventsWhen">
            <div className="col-xs-4 col-xs-offset-2">
              <span><u><b>From:</b></u>   {event.arrival}</span>
            </div>
            <div className="col-xs-4">
              <span><u><b>To:</b></u>    {event.departure}</span>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h1 className="visitorsHomeEventMainHead">Events</h1>
        {allEvents}
        <div>
          <button id="visitorsEventsBtn">
            <Link to="/visitorshome" id="visitorsEventsLink"> Go Back </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default VisitorsEvents;
