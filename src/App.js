import React, { Component } from 'react';
import NavBar from './components/NavBar'
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './cloud9-5-logo.png';
import './App.css';

// import API from "../../utils/API";
import axios from 'axios';

//Route Dependencies
//==========================================
// import Home from "./pages/Home";
// import Today from "./pages/Today";
// import FiveDay from "./pages/FiveDay";
// import Radar from "./pages/Radar"
// import Pun from "./pages/Pun";


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
      todayHumidity: ''
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
    this.setState({zipcode: event.target.value});
  }

  handleSubmit(event) {
    alert('A zipcode was submitted: ' + this.state.zipcode);
    event.preventDefault();
    this.getWeather();
  }

  //An axios call to retrieve weather information from the OpenWeather API
  getWeather(zipcode) {
    axios.get('api.openweathermap.org/data/2.5/weather?zip=' + zipcode)
    .then(res => {
      for(let i = 0; i < res.data.length; i++) {
        this.state.weatherArray.push({
          coordinates: res.data[i].coord,
          todayCurrentTemp: res.data[i].main.temp,
          todayHigh: res.data[i].main.temp_max,
          todayLow: res.data[i].main.temp_min,
          todayPressure: res.data[i].main.pressure,
          todayHumidity: res.data[i].main.humidity
        })
      }
    })
  }

  render() {
    return (
      <div className="cloud95">
        <NavBar />
      
        <header className="cloud95-home" id="home">
          <img src={logo} className="cloud95-logo" alt="logo" />
          <h1>Cloud 9-5</h1>
          <p><strong>Weather, you like it or not?!</strong></p>
          <br />
          <form onSubmit={this.handleSubmit}>
              <label>
                Zip Code: 
                <input type="text" value={this.state.zipcode} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>

          <div className="topBorder"></div>
        </header>


        <div className="cloud95-today" id="today">
          today
          <div className="bottomBorder"></div>
        </div>


        <div className="cloud95-forecast">
          forecast
          <div className="topBorder"></div>
        </div>


        <div className="cloud95-radar">
          radar
          <div className="bottomBorder"></div>
        </div>


        <div className="cloud95-puns">
          puns
          <div className="topBorder"></div>
        </div>
      </div>
    );
  }
}

export default App;
