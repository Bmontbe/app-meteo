import React, { Component } from 'react';
import Geolocation from './Component/Geolocation'

import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Geolocation/>
        </header>
      </div>
    );
  }
}

export default App;
