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
      weatherData: {},
    };

    this.fetchWeatherByLocation = this.fetchWeatherByLocation.bind(this);
  }

  componentWillMount() {
    API.fetch(
      'http://138.68.156.60/api/location/',
      weatherData => { this.setState({ weatherData }); }
    );
  }

  fetchWeatherByLocation(location) {
    API.fetch(
      `http://138.68.156.60/api/location/${location}/`,
      weatherData => { this.setState({ weatherData }); }
    );
  }

  render () {
    console.log(this.state.weatherData);
    const dayForecast = this.state.weatherData.forecast ?
      this.state.weatherData.forecast.forecastday[0].hour : [];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Weather API</h2>
        </div>
        <WeatherForm onSubmit={this.fetchWeatherByLocation}/>
        <WeatherChart />
        <WeatherTable data={dayForecast} />
      </div>
    );
  }
}

export default App;
