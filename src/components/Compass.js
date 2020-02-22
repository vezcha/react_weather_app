import React, { Component } from "react";

export default class Compass extends Component {
  state = {
    wind: {
      deg: 0,
      speed: 0
    }
  };

  componentDidMount() {
    console.log("cdm compass " + this.state.wind.deg);
    this.drawCompass(this.state.windDirection);
  }

  componentDidUpdate(prevProps) {
    if (this.props.wind !== prevProps.wind) {
      this.setState({
        wind: this.props.wind
      });

      this.drawCompass(this.props.wind.deg);
    }
  }

  getStyle = () => {
    return {
      backgroundColor: "#CCC",
      float: "left",
      textAlign: "center",
      marginLeft: "500px",
      position: "relative",
      top: "-350px",
      width: "400px",
      height: "350px"
    };
  };

  drawCompass = windDirection => {
    console.log("drawing " + windDirection + " degrees on compass");
    const c = document.getElementById("compassCanvas");
    const ctx = c.getContext("2d");

    //clear and redraw
    ctx.clearRect(0, 0, 200, 200);

    //draw arrow vertical axis line
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 200);
    ctx.stroke();

    //draw arrow horizontal axis line
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(200, 100);
    ctx.stroke();

    //label axis
    ctx.font = "30px Arial";
    ctx.fillText("N", 100, 30);
    ctx.fillText("S", 100, 190);
    ctx.fillText("W", 10, 100);
    ctx.fillText("E", 170, 100);

    //set canvas origin
    const x = c.width / 2;
    const y = c.height / 2;
    // const width = 200;
    // const height = 200;

    //calculate wind direction in radians
    const angleInRadians = (windDirection * Math.PI) / 180;

    //save the current translation and move to center of canvas
    ctx.save();
    ctx.translate(x, y);

    //rotate to origin then to the right
    const origin = (-90 * Math.PI) / 180;
    ctx.rotate(origin);
    ctx.rotate(angleInRadians);

    //draw pointer
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();

    //translate the canvas back to its original position
    ctx.restore();
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <h1>Wind Compass</h1>
        <canvas id="compassCanvas" width="200" height="200"></canvas>
        <h2>Wind Speed: {this.props.wind.speed} mph</h2>
      </div>
    );
  }
}
