import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './cloud9-5-logo.png';
import './App.css';

// import API from "../../utils/API";
// import axios from 'axios';

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
      todayCurrentTemp: '',
      todayHigh: '',
      todayLow: '',

    }

    
    // this.getUser =
    //   this.getUser.bind(this);

    this.componentDidMount =
      this.componentDidMount.bind(this);

    this.getWeather =
      this.getWeather.bind(this);

  }
  // App Functions 
  //================================================

  //Once the page loads, call function getWeather
  componentDidMount() {
    //this.getUser()
    this.getWeather()
  } 

  //An axios call to retrieve weather information from the OpenWeather API
  getWeather() {
    axios.get('api.openweathermap.org/data/2.5/weather?zip=' + zipcode)
    .then(res => {
      for(let i = 0; i < res.data.length; i++) {
        this.state.weatherArray.push({
          weatherArray: [],
          zipcode: '',
          todayCurrentTemp: '',// res.data[i].location.coordinates[0],
          todayHigh: '',
          todayLow: '',
        })
      }
    })
  }

  //Load the weather object into the page's state
  loadWeather(weatherObject) {
    this.setState(weatherObject)

  }

  render() {
    return (
      <div className="cloud95">
        <header className="cloud95-home">
          <img src={logo} className="cloud95-logo" alt="logo" />
          <h1>Cloud 9-5</h1>
          <p><strong>Weather, you like it or not?!</strong></p>
          <div className="blueBorder"></div>
        </header>
        <div className="cloud95-today">
          hi
        </div>
      </div>
    );
  }
}

export default App;
