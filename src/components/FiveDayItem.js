import React, { Component } from "react";

export default class FiveDayItem extends Component {
  render() {
    return this.props.forecastList.map(listItem => (
      <div key={listItem.dt}>
        <div className="dayView">
          <div style={dateStyle}>
            <h3>{new Date(listItem.dt_txt).toLocaleString()}</h3>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${listItem.weather[0].icon}@2x.png`}
            width="50"
            height="50"
            style={iconStyle}
            alt="weather_icon"
          />
          <table width="50%" style={extendedTableStyle}>
            <tbody>
              <tr>
                <td>
                  <strong>{listItem.main.temp}&deg; F</strong>
                </td>
                <td>{listItem.weather[0].main}</td>
              </tr>
              <tr>
                <td>Humidty: {listItem.main.humidity}</td>
                <td>Wind: {listItem.wind.speed} mph</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
      </div>
    ));
  }
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
