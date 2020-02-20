import React from "react";
import "./App.css";

//import components
import Banner from "./components/Banner";
import Search from "./components/Search";
import CurrentView from "./components/CurrentView";
import FiveDay from "./components/FiveDay";

function App() {
  return (
    <div>
      <Banner />
      <Search />
      <CurrentView />
      <FiveDay />
    </div>
  );
}

export default App;
