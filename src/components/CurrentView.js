import React, { Component } from "react";

export default class CurrentView extends Component {
  render() {
    return (
      <div style={this.getStyle()}>
        <h2>Current Weather in [City]</h2>
        <hr />
        <div id="weather_main" style={WeatherStyle}>
          <img
            src="logo192.png"
            alt="weather_icon"
            width="100"
            height="100"
            style={iconStyle}
          />
          <strong>Temp</strong>
          <p>minTemp - maxTemp</p>
          <p>Pressure</p>
          <p>Humidity</p>
        </div>
        <hr />

        <div id="weather_extended" style={extendedStyle}>
          <table width="100%">
            <tbody>
              <tr>
                <td>Main</td>
                <td>Desc</td>
              </tr>
              <tr>
                <td>WindSpeed</td>
                <td>Visibility</td>
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
      backgroundColor: "pink",
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
