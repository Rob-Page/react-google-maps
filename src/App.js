import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map></Map>
      </div>
    );
  }
}

export default App;
