import React from "react";
import "./App.css";

import Entry from "./components/Entry";
import WeatherApp from "./components/WeatherApp";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {


  render() {
    return (
      <div>
        {apiKey ? <WeatherApp apiKey={apiKey} /> : <Entry />}
      </div>
    );
  }
}

export default App;
