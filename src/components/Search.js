import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div style={this.getStyle()}>
        ZIP Code: <input type="text" />
        City Name: <input type="text" />
        City Select: <select id="city" name="city" style={selectStyle}></select>
      </div>
    );
  }

  getStyle = () => {
    return {
      backgroundColor: "red",
      textAlign: "center"
    };
  };
}

//custom styling
const selectStyle = {
  width: "200px"
};
