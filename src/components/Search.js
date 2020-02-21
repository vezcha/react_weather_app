import React, { Component } from "react";

export default class Search extends Component {
  state = {
    zipCode: "",
    cityName: "",
    citySelection: ""
  };

  //onChange arrow function to update state variables
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    //assume zip code
    this.props.zipSearch(this.state.zipCode);
    this.setState({
      zipCode: ""
    });
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <form onSubmit={this.onSubmit}>
          ZIP Code:{" "}
          <input
            type="text"
            name="zipCode"
            value={this.state.zipCode}
            onChange={this.onChange}
          />
          City Name:{" "}
          <input
            type="text"
            name="cityName"
            value={this.state.cityName}
            onChange={this.onChange}
          />
          City Select:{" "}
          <select id="city" name="citySelection" style={selectStyle}></select>
          <input
            id="searchSubmit"
            type="submit"
            value="Search"
            style={searchStyle}
          />
        </form>
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

const searchStyle = {
  padding: "10px",
  width: "100px",
  backgroundColor: "lime",
  borderStyle: "solid",
  borderColor: "black",
  borderWidth: "3px",
  fontFamily: `Arial, Helvetica, sans-serif`,
  fontSize: "20px"
};
