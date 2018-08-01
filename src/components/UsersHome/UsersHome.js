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
    this.props.history.push(`/edittruck/${this.props.event.id}`);
  }

  render () {
    const usersTruck = this.state.trucks.map((truck, index) => {
      return (
        <div key={truck.id} index={index}>
          <div className="row">
            <div className="col-xs-4 home-img">
              <img src={truck.imageUrl} alt={truck.imageUrl} />
            </div>
            <div className="col-xs-3 col-xs-offset-2" id="home-h1">
              <h1>{truck.name}</h1>
            </div>
          </div>
          <br />
          <div className="col-xs-12">
            <p id="home-p">{truck.bio}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        {usersTruck ? usersTruck : null}
        <div className="row">
          <button className="col-xs-5">
            <Link to='/eventslist' id="eventsLink"> Events </Link>
          </button>
          <button className="col-xs-5" onClick={this.routeToEditTruck}>
            <Link to='/editTruck' id="editTruck"> Edit </Link>
          </button>
        </div>
      </div>

    );
  };
};

export default UsersHome;
