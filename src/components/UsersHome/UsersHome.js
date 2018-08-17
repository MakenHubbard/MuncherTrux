import React from 'react';
import { Link } from 'react-router-dom';
import trucksRequests from '../../firebaseRequests/trucks';
import authRequests from '../../firebaseRequests/auth';

import './UsersHome.css';

class UsersHome extends React.Component {
  state = {
    trucks: [],
  }

  componentDidMount = () => {
    trucksRequests
      .getRequest(authRequests.getUid())
      .then((trucks) => {
        this.setState({ trucks });
      })
      .catch((err) => {
        console.error('error in the get request in user home', err);
      });
  }

  routeToEditTruck = (e) => {
    e.preventDefault();
    this.props.history.push(`/edittruck/${this.state.trucks[0].id}`);
  }

  render () {
    const usersTruck = this.state.trucks.map((truck, index) => {
      return (
        <div key={truck.id} index={index} className="theInsides">
          <div className="row">
            <div className="col-xs-3 home-img">
              <img src={truck.imageUrl} alt={truck.imageUrl} />
            </div>
            <div className="col-xs-3 col-xs-offset-2" id="home-h1">
              <h1>{truck.name}</h1>
            </div>
            <br />
            <div className="col-xs-6 col-xs-offset-2">
              <p id="home-p">{truck.bio}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container" id="containerUsersHome">
        {usersTruck ? usersTruck : null}
        <div className="row">
          <Link to='/eventslist' id="eventsLink">
            <button className="col-xs-3 col-xs-offset-2" id="eventsUsersHomeBtn">
              Events
            </button>
          </Link>
          <Link to='/editTruck' id="editTruck">
            <button className="col-xs-3 col-xs-offset-2" id="editUsersHomeBtn" onClick={this.routeToEditTruck}>
              Edit Info
            </button>
          </Link>
        </div>
      </div>

    );
  };
};

export default UsersHome;
