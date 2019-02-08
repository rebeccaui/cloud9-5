import React, { Component } from 'react';
import NavBar from './components/NavBar'
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
    // axios.get('/api/weather')
    // .then(res => {
    //   for(let i = 0; i < res.length; i++) {
    //     this.state.weatherArray.push({

    //     })
    //   }
    // })
  }

  //Load the weather object into the page's state
  loadWeather(weatherObject) {
    this.setState(weatherObject)

  }

  render() {
    return (
      <div className="cloud95">
        <NavBar />
      
        <header className="cloud95-home" id="home">
          <img src={logo} className="cloud95-logo" alt="logo" />
          <h1>Cloud 9-5</h1>
          <p><strong>Weather, you like it or not?!</strong></p>
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
