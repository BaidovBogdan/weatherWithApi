import React, { useState } from "react";
import BishkekImg from "../images/bishkek.jpg";
import CurrentWeather from "./currentWeather";
import "../components/style.css";
import WindSpeed from "./currentGMT";
import CurrentTime from "./currentTime";
import { Link } from "react-router-dom";

export default function Bishkek() {
  const [showWeather, setShowWeather] = useState(false);

  return (
    <section>
      <div className="mainBorder">
        <header>
          <span>
            <p>Bishkek &nbsp; &nbsp; &nbsp;</p>
            <Link to="/moscow">
              toMoscow &nbsp; &nbsp; <b>&#10150;</b>
            </Link>
          </span>
        </header>
        <main>
          Текущий город : &nbsp; BISHKEK
          <br />
          <img onClick={() => setShowWeather(!showWeather)} src={BishkekImg} />
          <br />
          {showWeather && (
            <div className={`slide-in ${showWeather ? "show" : ""}`}>
              <div className="cards">
                <CurrentWeather />
              </div>
              <div className="cards">
                <WindSpeed />
              </div>
              <div className="cards">
                <CurrentTime />
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
