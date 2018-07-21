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

  render() {
    const currentUserUid = authRequests.getUid();
    const usersTruck = this.state.trucks.map((truck) => {
      if (truck.uid === currentUserUid) {
        return (
            <div className="container">
            <div>
              <h1>UsersHome</h1>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <p>{truck.name}</p>
              </div>
              <div className="col-xs-6">
                <p>{truck.imageUrl}</p>
              </div>
            </div>
            <div className="col-xs-12">
              <p>{truck.bio}</p>
            </div>
          </div>
        );
      }
    });

    return (
      <div className="usersHome col-xs-12" >
        {usersTruck}
      </div>
    );
  };
};

export default UsersHome;
