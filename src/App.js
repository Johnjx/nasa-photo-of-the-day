import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const dummyData = {
  copyright: "Stan Honda",
  date: "2022-04-20",
  explanation: "There's an interesting sky to see if you wake up before the Sun. Lined up on toward the eastern horizon are four planets in a row. The planets are so bright they can even be seen from the bright sky inside a city. In fact, the featured image was taken from New York City, USA, with the foreground highlighted by the RFK (Triborough) Bridge. Pictured, the planets are, left to right, Jupiter, Venus, Mars, and Saturn.  The planets all appear in a row because they all orbit the Sun in the same plane. This plane, called the ecliptic plane, was created in the early days of our Solar System and includes all planets, including Earth.  The morning planet parade will continue throughout April and May, and will even be joined by Mercury in June.   APOD volunteer programming opportunity: Discord",
  hdurl: "https://apod.nasa.gov/apod/image/2204/PlanetBridge_Honda_3000.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Planet Line over New York Bridge",
  url: "https://apod.nasa.gov/apod/image/2204/PlanetBridge_Honda_960.jpg"
  }

function App() {
  const [nasaData, setNasaData] = useState(dummyData);
  
  // useEffect(() => {
  //   axios.get()
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, [])

  return (
    <div className="App">
        {nasaData && <Header data={nasaData} />}
        {nasaData && <Main data={nasaData} />}
        {nasaData && <Footer data={nasaData} />}
    </div>
  );
}

export default App;

// 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

// GET https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// &date=2012-03-14

// Display a loading message while the data is fetching
// if (!props.photoOfTheDay) return <h3>Loading...</h3>;

// Display your component as normal after the data has been fetched
// return (
//   {/* your normal JSX here */}
// );