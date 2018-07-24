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

  render () {
    const usersTruck = this.state.trucks.map((truck, index) => {
      return (
        <div key={truck.id} index={index}>
          <div className="row">
            <div className="col-xs-6">
              {truck.imageUrl}
            </div>
            <div className="col-xs-6">
              {truck.name}
            </div>
          </div>
          <br />
          <div className="col-xs-12">
            {truck.bio}
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div>
          <h1>Users Home</h1>
        </div>
        {usersTruck ? usersTruck : null}
        <button>
          <Link to='/eventslist'> Events </Link>
        </button>
      </div>

    );
  };
};

export default UsersHome;
