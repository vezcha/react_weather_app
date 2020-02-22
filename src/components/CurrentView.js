import React, { Component } from "react";

export default class CurrentView extends Component {
  state = {
    temp: "",
    minTemp: "",
    maxTemp: "",
    pressure: "",
    humidity: "",
    main: "",
    desc: "",
    windspeed: "",
    visibility: "",
    name: "",
    icon: ""
  };

  componentDidUpdate(prevProps) {
    if (this.props.weather !== prevProps.weather) {
      this.setState({
        temp: this.props.weather.main.temp,
        minTemp: this.props.weather.main.temp_min,
        maxTemp: this.props.weather.main.temp_max,
        pressure: this.props.weather.main.pressure,
        humidity: this.props.weather.main.humidity,
        main: this.props.weather.weather[0].main,
        desc: this.props.weather.weather[0].description,
        windspeed: this.props.weather.wind.speed,
        visibility: this.props.weather.visibility,
        name: this.props.weather.name,
        icon: this.props.weather.weather[0].icon
      });
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <h2>Current Weather in {this.state.name}</h2>
        <hr />
        <div id="weather_main" style={WeatherStyle}>
          <img
            src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
            alt="weather_icon"
            width="100"
            height="100"
            style={iconStyle}
          />
          <strong style={{ fontSize: "20px" }}>{this.state.temp}&deg; F</strong>
          <p>
            Low: {this.state.minTemp} High: {this.state.maxTemp}
          </p>
          <p>Pressure: {this.state.pressure}</p>
          <p>Humidity: {this.state.humidity}</p>
        </div>
        <hr />

        <div id="weather_extended" style={extendedStyle}>
          <table width="100%">
            <tbody>
              <tr>
                <td>{this.state.main}</td>
                <td>{this.state.desc}</td>
              </tr>
              <tr>
                <td>Wind: {this.state.windspeed} mph</td>
                <td>Visibility: {this.state.visibility}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  getStyle = () => {
    return {
      float: "left",
      backgroundColor: "#CCC",
      marginTop: "100px",
      marginLeft: "500px",
      marginRight: "auto",
      width: "300px",
      textAlign: "center",
      fontSize: 12
    };
  };
}

const iconStyle = {
  float: "left",
  marginLeft: "30px"
};

const WeatherStyle = {};

const extendedStyle = {
  textAlign: "center"
};
