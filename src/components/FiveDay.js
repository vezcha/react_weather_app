import React, { Component } from "react";

export default class FiveDay extends Component {
  render() {
    return (
      <div style={this.getStyle()}>
        <h2>5 Day forecast for [City]</h2>
        <hr />

        <div class="dayView">
          <div style={dateStyle}>
            <h3>Date</h3>
          </div>
          <img
            src="logo192.png"
            width="50"
            height="50"
            style={iconStyle}
            alt="weather_icon"
          />
          <table width="50%" style={extendedTableStyle}>
            <tbody>
              <tr>
                <td>Temp</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>WindSpeed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />

        <div class="dayView">
          <div style={dateStyle}>
            <h3>Date</h3>
          </div>
          <img
            src="logo192.png"
            width="50"
            height="50"
            style={iconStyle}
            alt="weather_icon"
          />
          <table width="50%" style={extendedTableStyle}>
            <tbody>
              <tr>
                <td>Temp</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>WindSpeed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
      </div>
    );
  }

  getStyle = () => {
    return {
      float: "left",
      backgroundColor: "pink",
      marginLeft: "200px",
      marginTop: "100px",
      marginRight: "auto",
      width: "300px",
      textAlign: "center",
      fontSize: 12
    };
  };
}

const iconStyle = {
  float: "left",
  marginLeft: "30px",
  marginRight: "30px"
};

const dateStyle = {
  width: "100px",
  textAlign: "-webkit-center"
};

const extendedTableStyle = {
  marginBottom: "15px"
};
