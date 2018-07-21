import React from 'react';
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
        this.setState({ trucks: trucks });
      })
      .catch((err) => {
        console.error('error in the get request in user home', err);
      });
  }

  render () {
    const currentUserUid = authRequests.getUid();
    const usersTruck = this.state.trucks.map((truck, index) => {
      console.log('getting truck back', truck);
      console.log('current user uid', currentUserUid);
      if (truck.uid === currentUserUid) {
        return (
          <UsersHome
            truck={truck}
            index={index}
            key={truck.id}
          />
        );
      }
    });
    console.log('what are you ?', usersTruck);

    return (
      <div className="container">
        <div>
          <h1>UsersHome</h1>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <p>{usersTruck.name}</p>
          </div>
          <div className="col-xs-6">
            <p>{usersTruck.imageUrl}</p>
          </div>
        </div>
        <div className="col-xs-12">
          <p>{usersTruck.bio}</p>
        </div>
      </div>
    );
  };
};

export default UsersHome;
