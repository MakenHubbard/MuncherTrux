import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar

            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
