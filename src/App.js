import React from "react";
import "./App.css";

//import components
import Banner from "./components/Banner";
import Search from "./components/Search";
import CurrentView from "./components/CurrentView";
import FiveDay from "./components/FiveDay";

//import axios for fetching request/response
import axios from "axios";

const apiKey = "test";

class App extends React.Component {
  //search arrow function
  zipSearch = zipCode => {
    //axios queries openweather API
    console.log("searching for " + zipCode);
    axios.get();
  };

  render() {
    return (
      <div>
        <Banner />
        <Search zipSearch={this.zipSearch} />
        <CurrentView />
        <FiveDay />
      </div>
    );
  }
}

export default App;
