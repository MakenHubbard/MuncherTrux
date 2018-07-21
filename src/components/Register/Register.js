import React from 'react';
import { Link } from 'react-router-dom';
import trucksRequests from '../../firebaseRequests/trucks';

import authRequests from '../../firebaseRequests/auth';

const defaultTruck = {
  name: '',
  bio: '',
  imageUrl: '',
  uid: '',
};

class Register extends React.Component {

  state = {
    user: {
      email: 'me@dabomb.com',
      password: 'unleash',
    },
    newTruck: defaultTruck,
  };

  registerClickEvent = (e) => {
    const { user, newTruck } = this.state;
    e.preventDefault();
    authRequests
      .registerUser(user)
      .then((userResponse) => {
        newTruck.uid = userResponse.user.uid;
        trucksRequests.postRequest(newTruck)
          .then(() => {
            this.props.history.push('/usershome');
          });
      });
  }

  emailChange = (e) => {
    const tempUser = { ...this.state.user };
    tempUser.email = e.target.value;
    this.setState({ user: tempUser });
  }

  passwordChange = (e) => {
    const tempUser = { ...this.state.user };
    tempUser.password = e.target.value;
    this.setState({ user: tempUser });
  }

  infoFormField = (information, e) => {
    const tempTruck = { ...this.state.newTruck };
    tempTruck[information] = e.target.value;
    this.setState({ newTruck: tempTruck });
  }

  nameChange = (e) => {
    this.infoFormField('name', e);
  };

  bioChange = (e) => {
    this.infoFormField('bio', e);
  };

  imageUrlChange = (e) => {
    this.infoFormField('imageUrl', e);
  };

  render () {
    const { user } = this.state;
    const { newTruck } = this.state;
    return (
      <div className="Register">
        <div id="login-form">
          <h1 className="text-center">Register</h1>
          <form className="form-horizontal col-sm-6 col-sm-offset-3">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-4 control-label">
                Email:
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={user.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-4 control-label">
                Password:
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={user.password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <Link to="/login">Need to Login?</Link>
              </div>
            </div>
            <div className="form-group">

            </div>
          </form>
        </div>
        <br />
        <div className="container">
          <form>
            <div>
              <div className="form-group">
                <label htmlFor="nameOfCompany">Company Name: </label>
                <input type="text" className="form-control" id="name" placeholder="" value={newTruck.name} onChange={this.nameChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="bioField">About: </label>
              <input type="text" className="form-control" id="bio" placeholder="What would you like us to know about your company?" value={newTruck.bio} onChange={this.bioChange} />
            </div>
            <div className="form-group">
              <label htmlFor="imgUrl">Image Url: </label>
              <input type="text" className="form-control" id="imageUrl" placeholder="" value={newTruck.imageUrl} onChange={this.imageUrlChange} />
            </div>
            <div className="col-sm-6">
              <button
                type="submit"
                className="btn btn-default col-xs-12"
                onClick={this.registerClickEvent}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default Register;
