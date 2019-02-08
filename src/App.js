import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import API from "../../utils/API";
import axios from 'axios';

//Route Dependencies
//==========================================
import Home from "./pages/Home";
import Today from "./pages/Today";
import FiveDay from "./pages/FiveDay";
import Radar from "./pages/Radar"
import Pun from "./pages/Pun";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherArray: [],
    }

    
    this.getUser =
      this.getUser.bind(this);

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
    axios.get('/api/weather')
    .then(res => {
      for(let i = 0; i < res.length; i++) {
        this.state.weatherArray.push({

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
