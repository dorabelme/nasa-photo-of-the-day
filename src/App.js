import React, {useState, useEffect} from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";


function App() {

  return (
    <div className="App">
      <Header mainHeader="NASA Photo of the Day 🚀" />
      <Card description="Description" />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
    </div>
  );
};

export default App;
