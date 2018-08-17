import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';

class LandingPage extends React.Component {

  render () {
    return (
      <div className="row">
        <Link to='/visitorshome'>
          <div className="customer col-xs-4 col-xs-offset-2">
            <div className="visitorsLandingWords">
              <h1 className="landingHead">Muncher</h1>
              <p className="visitorsLandingP">Are you one to delight your taste buds?</p>
            </div>
          </div>
        </Link>
        <Link to='/login'>
          <div className="owner col-xs-4">
            <div className="visitorsLandingWords">
              <h1 className="landingHead">Trux</h1>
              <p className="visitorsLandingP">Are you one who likes to delight the taste buds?</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default LandingPage;
