import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CurrentCard from './components/CurrentCard';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './cloud9-5-logo.png';
import './App.css';
import axios from 'axios';
require('dotenv').config();

// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

// import API from "../../utils/API";


//Route Dependencies
//==========================================
// import Home from "./pages/Home";
// import Today from "./pages/Today";
// import FiveDay from "./pages/FiveDay";
// import Radar from "./pages/Radar"
// import Pun from "./pages/Pun";

let weatherIcon = '';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherArray: [],
      zipcode: '',
      coordinates: {},
      todayCurrentTemp: '',
      todayHigh: '',
      todayLow: '',
      todayPressure: '',
      todayHumidity: '',
      todaySummary: [],
      todayIcon: '',
    }

    this.handleChange = 
      this.handleChange.bind(this);

    this.handleSubmit = 
      this.handleSubmit.bind(this);

    this.getWeather =
      this.getWeather.bind(this);
  }

  // App Functions 
  //================================================

  // Zipcode form change/submit
  handleChange(event) {
    this.setState({zipcode: event.target.value.toString()});
  }

  handleSubmit(event) {
    console.log('A zipcode was submitted: ' + this.state.zipcode);
    event.preventDefault();
    this.getWeather(this.state.zipcode);
  }

  //An axios call to retrieve weather information from the OpenWeather API
  getWeather(zipcode) {
    const key = process.env.REACT_APP_OPEN_WEATHER_API;
    console.log(key);
    axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=' + key)
    .then(res => {
      for(let i = 0; i < res.data.length; i++) {
        this.setState.weatherArray.push({
          coordinates: res.data[i].coord,
          todayCurrentTemp: res.data[i].main.temp,
          todayHigh: res.data[i].main.temp_max,
          todayLow: res.data[i].main.temp_min,
          todayPressure: res.data[i].main.pressure,
          todayHumidity: res.data[i].main.humidity,
          todaySummary: res.data[i].main.weather,
          todayIcon: res.data.weather[0].icon,
        })
      }
      console.log('weather results bullshit');
      console.log(res);
      // console.log(res.data.weather[0].icon); // grabs result icon #
      console.log(this.state.weatherArray);
    })
  }

  render() {
    return (
      <div className="cloud95">
        <NavBar />
        <div className="topNavBorder bottomBorder"></div>
        <header className="cloud95-home" id="home">
          <img src={logo} className="cloud95-logo" alt="logo" />
          <h1>Cloud 9-5</h1>
          <p><strong>Weather, you like it or not?!</strong></p>
          <br />
          <form className="zipForm" onSubmit={this.handleSubmit}>
              <label>
                Zip Code: 
              </label>
              <input id="field" type="text" value={this.state.zipcode} onChange={this.handleChange} />
              <input id="submit" type="submit" value="Submit" />
            </form>

          <div className="topBorder"></div>
        </header>


        <div className="cloud95-today" id="today">
          <CurrentCard />
          {/* weatherIcon = 'http://openweathermap.org/img/w/' + res.data.weather[0].icon + '.png'; */}
          this.state
          <img src={weatherIcon} alt="fuck off" />
          <div className="bottomBorder"></div>
        </div>

        <div className="cloud95-forecast" id="forecast">
          forecast

          <div className="topBorder"></div>
        </div>


        <div className="cloud95-radar" id="radar">
          radar
          <div className="bottomBorder"></div>
        </div>


        <div className="cloud95-puns" id="puns">
          puns
          <div className="topBorder"></div>
        </div>
      </div>
    );
  }
}

export default App;
