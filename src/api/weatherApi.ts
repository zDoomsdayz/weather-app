import axios from "axios";
import type { WeatherData } from "../types/WeatherData";

export const fetchWeather = async (country: string) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    const { data } = await axios.get<WeatherData>("https://api.openweathermap.org/data/2.5/weather", {
        params: { q: country, appid: apiKey, units: "metric" },
    });

    console.log("Weather data fetched:", data);
    return data;
};