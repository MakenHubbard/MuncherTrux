import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../firebaseRequests/auth';

import './Register.css';

class Register extends React.Component {

  state = {
    user: {
      email: '',
      password: '',
    },
  };

  registerClickEvent = (e) => {
    const { user } = this.state;
    e.preventDefault();
    authRequests
      .registerUser(user)
      .then(() => {
        this.props.history.push('/newtruck');
      })
      .catch((err) => {
        console.error('inside the register', err);
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

  render () {
    const { user } = this.state;
    return (
      <div className="Register">
        <div id="login-form">
          <h1 className="text-center register-h1">Register</h1>
          <form className="form-horizontal col-sm-6 col-sm-offset-3 register-form">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-4 control-label">
                Email:
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control register-input"
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
                  className="form-control register-input"
                  id="inputPassword"
                  placeholder="Password"
                  value={user.password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <div className="col-sm-5 col-sm-offset-1 text-center" id="login-Link">
                  <button className="btn btn-default"><Link to="/login">Need to Login?</Link></button>
                </div>
                <div className="col-sm-5 col-sm-offset-1">
                  <button
                    type="submit"
                    className="btn btn-default col-sm-7"
                    onClick={this.registerClickEvent}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default Register;
