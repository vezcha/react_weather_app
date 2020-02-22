import React from "react";
import "./App.css";

//import components
import Banner from "./components/Banner";
import Search from "./components/Search";
import CurrentView from "./components/CurrentView";
import FiveDay from "./components/FiveDay";
import Compass from "./components/Compass";

//import axios for fetching request/response
import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY; //secret key

class App extends React.Component {
  state = {
    currentWeather: {
      wind: {}
    },
    fiveDayWeather: {}
  };

  //search arrow function by zipCode
  zipSearch = zipCode => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          currentWeather: res.data
        });
      });

    //get 5day forecast
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${apiKey}&units=imperial`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          fiveDayWeather: res.data
        });
      });
  };

  //search arrow function by cityName
  citySearch = cityName => {
    //get current weather
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          currentWeather: res.data
        });
      });

    //get five day forecast
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          fiveDayWeather: res.data
        });
      });
  };

  componentDidMount() {
    //get current weather
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=55987,us&appid=${apiKey}&units=imperial`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          currentWeather: res.data
        });
      });

    //get five day forecast
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?zip=55987,us&appid=${apiKey}&units=imperial`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          fiveDayWeather: res.data
        });
      });
  }

  render() {
    return (
      <div>
        <Banner />
        <Search zipSearch={this.zipSearch} citySearch={this.citySearch} />
        <CurrentView weather={this.state.currentWeather} />
        <FiveDay forecast={this.state.fiveDayWeather} />
        <Compass wind={this.state.currentWeather.wind} />
      </div>
    );
  }
}

export default App;
