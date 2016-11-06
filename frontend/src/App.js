import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './libs/api';
import WeatherTable from './components/WeatherTable';
import WeatherForm from './components/WeatherForm';
import WeatherChart from './components/WeatherChart';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      weatherData: [],
    };
  }

  componentWillMount() {
    API.fetch(
      'http://138.68.156.60/api/location/',
      weatherData => this.setState
    );
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Weather API</h2>
        </div>
        <WeatherForm />
        <WeatherChart />
        <WeatherTable />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
