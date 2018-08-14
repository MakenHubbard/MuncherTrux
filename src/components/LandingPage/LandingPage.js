import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';

class LandingPage extends React.Component {

  // routeForMunchers = (e) => {

  // }

  // routeForTrux = (e) => {

  // }

  render () {
    return (
      <div className="row">
        <Link to='/visitorshome'>
          <div className="customer col-xs-4 col-xs-offset-2">
            <h1 className="landingHead">Muncher</h1>
            <p>Are you one to delight your taste buds?</p>
          </div>
        </Link>
        <Link to='/login'>
          <div className="owner col-xs-4">
            <h1 className="landingHead">Trux</h1>
            <p>Are you one who likes to delight the taste buds?</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default LandingPage;
