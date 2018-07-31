import React from 'react';
import { Link } from 'react-router-dom';
import authRequests from '../../firebaseRequests/auth';

import './Navbar.css';

class Navbar extends React.Component {
  render () {
    const { authed, runAway } = this.props;

    const logoutClickEvent = () => {
      authRequests.logoutUser();
      runAway();
    };

    return (
      <div className="Navbar">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">Muncher Trux</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              {
                authed ? (
                  <ul className="nav navbar-nav navbar-right">
                    <li className="navbar-form">
                      <button className="btn btn-default"><Link to="/usershome" id="homeLink">Home</Link></button>
                    </li>
                    <li className="navbar-form">
                      <button onClick={logoutClickEvent} className="btn btn-default">
                        Logout
                      </button>
                    </li>
                  </ul>
                ) : (
                  <li className="nav navbar-form navbar-right">
                    <button className="btn btn-default">Login In</button>
                  </li>
                )
              }

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
