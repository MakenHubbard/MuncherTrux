import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase';

import './App.css';

import Navbar from '../components/Navbar/Navbar';
import UsersHome from '../components/UsersHome/UsersHome';
import NewTruck from '../components/NewTruck/NewTruck';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import EventsList from '../components/EventsList/EventsList';
import AddEvent from '../components/AddEvent/AddEvent';
import EditEvent from '../components/EditEvent/EditEvent';
import fbConnection from '../firebaseRequests/connection';

fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true
          ? (<Component {...props} />)
          : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false
          ? (<Component {...props} />)
          : (<Redirect to={{ pathname: '/usershome', state: { from: props.location } }} />)
      }
    />
  );
};

class App extends Component {
  state = {
    authed: false,
  };

  componentDidMount = () => {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount = () => {
    this.removeListener();
  };

  runAway = () => {
    this.setState({authed: false});
  };

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              authed={this.state.authed}
              runAway={this.runAway}
            />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Login} />
                  <Route path="/register" exact component={Register} />
                  <PrivateRoute
                    path="/usershome"
                    authed={this.state.authed}
                    component={UsersHome}
                  />
                  <PrivateRoute
                    path="/newtruck"
                    authed={this.state.authed}
                    component={NewTruck}
                  />
                  <PublicRoute
                    path='/login'
                    authed={this.state.authed}
                    component={Login}
                  />
                  <PrivateRoute
                    path='/eventslist'
                    authed={this.state.authed}
                    component={EventsList}
                  />
                  <PrivateRoute
                    path='/eventslist/:id'
                    authed={this.state.authed}
                    component={Event}
                  />
                  <PrivateRoute
                    path='/addevent'
                    authed={this.state.authed}
                    component={AddEvent}
                  />
                  <PrivateRoute
                    path='/editevent'
                    authed={this.state.authed}
                    component={EditEvent}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
