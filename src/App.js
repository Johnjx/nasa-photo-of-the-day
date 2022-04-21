import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { API_KEY } from "./constants";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Apod from "./components/Apod";


function App() {
  const [nasaData, setNasaData] = useState(null);
  const [menuOn, setMenuOn] = useState(true);
  const [date, setDate] = useState(null)
  
  const openApod = arr => {
    setDate(arr)
  }

  const toggleMenu = () => {
    setMenuOn(!menuOn);
}
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        setNasaData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  return (
    <div className="App">
        {nasaData && <Header data={nasaData} toggleMenu={toggleMenu} />}
        {menuOn &&  <Menu data={nasaData} open={openApod} />}
        {nasaData && <Main data={nasaData} />}
        {nasaData && <Footer data={nasaData} />}
        {date && <Apod  date={date} />}
    </div>
  );
}

export default App;

