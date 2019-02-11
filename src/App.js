import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CurrentCard from './components/CurrentCard';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './cloud9-5-logo.png';
import './App.css';
import axios from 'axios';

//====TESTING====//
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherArray: [],
      zipcode: '',
      coordinates: '',
      city: '',
      todaySummary: [],
      todayCurrentTemp: '',
      todayHigh: '',
      todayLow: '',
      todayPressure: '',
      todayHumidity: '',
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
    axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=' + key).then(res => {
      // for(let i = 0; i < res.data.length; i++) {
        this.setState({
          weatherArray: res.data,
          coordinates: res.data.coord,
          city: res.data.name,
          sunrise: res.data.sys.sunrise,
          sunset: res.data.sys.sunset,
          todaySummary: res.data.weather,
          todayCurrentTemp: res.data.main.temp,
          todayHigh: res.data.main.temp_max,
          todayLow: res.data.main.temp_min,
          todayPressure: res.data.main.pressure,
          todayHumidity: res.data.main.humidity,
          todayIcon: res.data.weather[0].icon
        })
      // }
    // }).then(function(res) {
      console.log('weather results bullshit');
      console.log(res);

      // console.log(res.data.weather[0].icon); // grabs result icon #
      console.log('weatherArray: ');
      console.log(this.state.weatherArray);
      console.log('todaySummary: ');
      console.log(this.state.todaySummary);
      console.log('todayHumidity: ');
      console.log(this.state.todayHumidity);
      console.log('todayIcon: ');
      console.log(this.state.todayIcon);
      console.log('currentTemp: ');
      console.log(this.state.todayCurrentTemp);
      console.log(this.state.city);
    // }).catch(function (error) {
    //   console.log(error);
    });
  }

  render() {
    var todayIconImg = 'http://openweathermap.org/img/w/' + this.state.todayIcon + '.png';
    var city = this.state.city;
    var tempHighF = (this.state.todayHigh - 273.15) * (9/5) + 32;
    var tempLowF = (this.state.todayLow - 273.15) * (9/5) + 32;
    var tempF = (this.state.todayCurrentTemp - 273.15) * (9/5) + 32;
    var tempIntHighF = (parseInt(tempHighF,10));
    var tempIntLowF = (parseInt(tempLowF,10));
    var tempIntF = (parseInt(tempF,10));

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
          {/* <CurrentCard /> */}

          <Card className={'card'}>
            {/* <CardMedia
              className={classes.media}
              image={logo}
              // title="Image"
            /> */}
            <CardContent>
              <div className="todayCardTitle">
                <div id="cityTemp">
                  <span id="city">{city}</span>
                  <span id="high">H: {tempIntHighF}</span> - <span id="low">L: {tempIntLowF}</span>
                </div>
                <span><img src={todayIconImg} className="cloud95-todayIcon" alt="icon" /></span>
                <span id="temp">{tempIntF}&#176;</span>
              </div>
              <Typography gutterBottom variant="h5" component="h2">
                {city} Weather
              </Typography>
              <Typography component="p">
                {/* {this.state.todaySummary.main} */}
              </Typography>

              <Typography component="p">
                They will try to close the door on you, just open it. The key is to drink coconut, fresh coconut, trust me. Wraith talk. Hammock talk come soon. They will try to close the door on you, just open it. Cloth talk. The key to more success is to get a massage once a week, very important, major key, cloth talk. We the best. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat. Lion! Hammock talk come soon.
              </Typography>
            </CardContent>
          </Card>

          {/* weatherIcon = 'http://openweathermap.org/img/w/' + res.data.weather[0].icon + '.png'; */}
          {todayIconImg}
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
