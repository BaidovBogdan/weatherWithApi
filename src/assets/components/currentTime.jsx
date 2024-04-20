import { useState , useEffect } from "react";
import "./style.css";

export default function CurrentTime() {
    const [getDate , setGetDate] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=42.87&longitude=74.59&&current=temperature_2m,wind_speed_10m");
                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }
                const data = await response.json();
                setGetDate(data.current.time);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <p>{getDate}</p>
        </>
    );
}
