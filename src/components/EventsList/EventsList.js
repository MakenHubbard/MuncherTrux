import React from 'react';
import { Link } from 'react-router-dom';

import './EventsList.css';

class EventsList extends React.Component {
  state = {

  }

  render () {

    return (
      <div className="container">
        <h1>Events</h1>
        <div className="jumbotron">
          <div className="media">
            <div className="media-left">
              <a href="https://www.liveonthegreen.com/schedule/#/">
                <img className="media-object" src="..." alt="..." />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">Media heading</h4>
            </div>
          </div>
        </div>
        <button>
          <Link to='/addevent'>Add Event</Link>
        </button>
      </div>
    );
  };
};

export default EventsList;
