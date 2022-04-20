import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";



function App() {
  const [nasaData, setNasaData] = useState();
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setNasaData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
        {nasaData && <Header data={nasaData} />}
        {nasaData && <Main data={nasaData} />}
        {nasaData && <Footer data={nasaData} />}
    </div>
  );
}

export default App;


// &date=2012-03-14
