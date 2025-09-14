import React, { Component } from 'react'

//import components
import Banner from "./Banner";
import Search from "./Search";
import CurrentView from "./CurrentView";
import FiveDay from "./FiveDay";
import Compass from "./Compass";

export class WeatherApp extends Component {
    state = {
        currentWeather: {
            wind: {}
        },
        fiveDayWeather: {}
    };

    //search arrow function by zipCode
    zipSearch = zipCode => {

        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${this.props.apiKey}&units=imperial`).then(res => {
            console.log(res.data);
            this.setState({
                currentWeather: res.data
            });
        })

        //get 5day forecast
        fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${this.props.apiKey}&units=imperial`).then(res => {
            console.log(res.data);
            this.setState({
                fiveDayWeather: res.data
            });
        });

    };

    //search arrow function by cityName
    citySearch = cityName => {
        //get current weather
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.props.apiKey}&units=imperial`).then(res => {
            console.log(res.data);
            this.setState({
                currentWeather: res.data
            });
        });

        //get five day forecast
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${this.props.apiKey}&units=imperial`).then(res => {
            console.log(res.data);
            this.setState({
                fiveDayWeather: res.data
            });
        });

    };

    componentDidMount() {
        //get current weather
        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=55987,us&appid=${this.props.apiKey}&units=imperial`).then(res => {
            console.log(res.data);
            this.setState({
                currentWeather: res.data
            });
        });

        //get five day forecast
        fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=55987,us&appid=${this.props.apiKey}&units=imperial`).then(res => {
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
        )
    }
}

export default WeatherApp