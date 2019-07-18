import React, {useState, useEffect} from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import NasaDropdown from "./components/NasaDropdown";
import axios from "axios";


function App() {
  const [data, setData] = useState({});
  const items = ["2019-07-17", "2019-07-16", "2019-07-15", "2019-07-14", "2019-07-13", "2019-07-12"];
  const [date, setDate] = useState("2019-07-18");

  useEffect(() => {
    console.log("use effect");

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(res => {
        console.log("response", res);
        setData(res.data);
      })
      .catch(error => {
        console.log("The API is currently down, try again later", error);
      });
  }, [date]);

  const visitItem = item => setDate(item);

  return (
    <div className="App">
      <Header mainHeader="NASA Photo of the Day 🚀" />
      {/* <Dropdown visitItem={visitItem} items={items} /> */}
      <NasaDropdown items={items} visitItem={visitItem} />
      <Card description="Description" data={data} />
    </div>
  );
};

export default App;
