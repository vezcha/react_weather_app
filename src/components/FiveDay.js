import React, { Component } from "react";

//import fiveDayItem component
import FiveDayItem from "./FiveDayItem";

export default class FiveDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: {
        city: {
          name: ""
        },
        list: []
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.forecast !== prevProps.forecast) {
      this.setState({
        forecast: this.props.forecast
      });
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <h2>5 Day / 3 hour forecast for {this.state.forecast.city.name}</h2>
        <hr />
        <div style={fItemsStyle}>
          <FiveDayItem forecastList={this.state.forecast.list} />
        </div>
      </div>
    );
  }

  getStyle = () => {
    return {
      float: "left",
      backgroundColor: "#CCC",
      marginLeft: "200px",
      marginTop: "50px",
      marginRight: "auto",
      width: "300px",
      textAlign: "center",
      fontSize: 12
    };
  };
}

const fItemsStyle = {
  overflowY: "scroll",
  height: "600px"
};
