import { useState , useEffect } from "react";
import "../style.css";

export default function WindSpeed() {
    const [windSpeed , setWindSpeed] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.7522200&longitude=37.6155600&&current=temperature_2m,wind_speed_10m");
                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }
                const data = await response.json();
                setWindSpeed(data.current.wind_speed_10m);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <p>Wind:{windSpeed}</p>
        </>
    );
}
