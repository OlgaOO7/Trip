import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchForecastByTripDate = async ({ city, date1, date2 }) => {
  try {
    return await axios.get(`${BASE_URL}${city}/${date1}/${date2}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`)
  } catch (e) {
    console.error('Error fetching weather data by trip date:', e);
  }
};

export const fetchForecastByDay = async (city) => {
  try {
    return await axios.get(`${BASE_URL}${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`)
  } catch (e) {
    console.error('Error fetching weather in trip city today:', e);
  }
};