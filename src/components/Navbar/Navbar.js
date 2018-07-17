import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends React.Component {
  render () {
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
                // authed ? (
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <p> Login In </p>
                    {/* <Link to="/inventory">Inventory</Link> */}
                  </li>
                  <li>
                    {/* <Link to="/orders">Orders</Link> */}
                  </li>
                  <li className="navbar-form">
                    {/* <button onClick={logoutClickEvent} className="btn btn-danger">
                        Logout
                      </button> */}
                  </li>
                </ul>
                // ) : (
                // <ul className="nav navbar-nav navbar-right">
                //   <li>
                //     {/* <Link to="/inventory">Login</Link> */}
                //   </li>
                // </ul>
                // )
              }

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
