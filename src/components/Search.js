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
    if (this.state.zipCode.length === 5) {
      this.props.zipSearch(this.state.zipCode);
      this.setState({
        zipCode: ""
      });
    } else if (this.state.cityName.length >= 3) {
      this.props.citySearch(this.state.cityName);
      this.setState({
        cityName: ""
      });
    } else {
      alert("Please check your search parameters");
    }
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
      backgroundColor: "",
      textAlign: "center"
    };
  };
}

const searchStyle = {
  padding: "10px",
  width: "100px",
  backgroundColor: "#6CF",
  borderStyle: "solid",
  borderColor: "black",
  borderWidth: "3px",
  fontFamily: `Arial, Helvetica, sans-serif`,
  fontSize: "20px"
};
