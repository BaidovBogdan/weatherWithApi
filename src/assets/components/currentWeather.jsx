import hot from "../images/hot.png";
import middle from "../images/middle.png";
import cold from "../images/cold.png";
import { useState , useEffect } from "react";
import "./style.css";

export default function CurrentWeather() {
    const [currentTemp , setCurrentTemp] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=42.87&longitude=74.59&current=temperature_2m");
                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }
                const data = await response.json();
                setCurrentTemp(data.current.temperature_2m);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    let weatherImage;
    if (currentTemp > 10) {
        weatherImage = hot;
    } else if (currentTemp < -5) {
        weatherImage = cold;
    } else {
        weatherImage = middle;
    }

    return (
        <>
            <h5>Current Weather</h5>
            <hr className="vertical" />
            <img className="img" src={weatherImage} alt="Weather Icon" />
            <hr className="vertical" />
            <p>Temperature: {Math.ceil(currentTemp)}°C</p>
        </>
    );
}
