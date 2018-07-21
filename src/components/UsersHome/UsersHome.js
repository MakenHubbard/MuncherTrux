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
          <div key={truck.id}>
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
      }
      this.setState(usersTruck);
    });
    console.log('what are you ?', usersTruck);

    return (
      <div className="container">
        <div>
          <h1>Users Home</h1>
        </div>
        {usersTruck}
      </div>

    );
  };
};

export default UsersHome;
