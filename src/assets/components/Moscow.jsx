import React, { useState, useEffect } from "react";
import MoscowImg from "../images/Moscow.jpg";
import CurrentWeather from "./forMoscow/currentWeather"
import "../components/style.css";
import WindSpeed from "./forMoscow/currentGMT";
import CurrentTime from "./forMoscow/currentTime";

export default function Moscow({ onChangeTab }) {

  const [showWeather, setShowWeather] = useState(false);

  return (
    <section>
      <div className="mainBorder">
        <header>
          <span>
            <p>Moscow &nbsp; &nbsp; &nbsp;</p>
            <button onClick={() => onChangeTab("bp")}>
              toBishkek &nbsp; &nbsp; <b>&#10150;</b>
            </button>
          </span>
        </header>
        <main>
          Текущий город : &nbsp; MOSCOW
          <br />
          <img onClick={() => setShowWeather(!showWeather)} src={MoscowImg} />
          <br />
          {showWeather && (
            <div className={`slide-in ${showWeather ? "show" : ""}`}>
            
              <div className="cards">
              <CurrentWeather/> 
              </div>
              <div className="cards"><WindSpeed/></div>
              <div className="cards"><CurrentTime/></div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
