import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../firebaseRequests/auth';

import './Login.css';

class Login extends React.Component {
  state = {
    user: {
      email: '',
      password: '',
    },
    trucks: {
      isRegistered: true,
    },
  };

  loginClickEvent = (e) => {
    const { user } = this.state;
    e.preventDefault();
    authRequests
      .loginUser(user)
      .then(() => {
        if (this.state.trucks.isRegistered === true) {
          this.props.history.push('/usershome');
        };
      })
      .catch(error => {
        console.error('there was an error in registering', error);
      });
  };

  emailChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.email = e.target.value;
    this.setState({ user: tempUser });
  };

  passwordChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.password = e.target.value;
    this.setState({ user: tempUser });
  };

  render () {
    const { user } = this.state;
    return (
      <div className="login-container">
        <div className="Login">
          <div id="login-form">
            <h1 className="text-center login-h1 ">Login</h1>
            <form className="form-horizontal col-sm-6 col-sm-offset-3 login-form">
              <div className="form-group">
                <label htmlFor="inputEmail" className="col-sm-4 control-label">
                  Email:
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-control login-input"
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
                    className="form-control login-input"
                    id="inputPassword"
                    placeholder="Password"
                    value={user.password}
                    onChange={this.passwordChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <div className="col-sm-5 col-sm-offset-1 text-center" id="register-Link">
                    <button className="btn btn-default"><Link to="/register">Need to Register?</Link></button>
                  </div>
                  <div className="col-sm-5 col-sm-offset-1">
                    <button
                      type="submit"
                      className="btn btn-default col-sm-7"
                      onClick={this.loginClickEvent}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
