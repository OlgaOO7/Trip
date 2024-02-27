import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const fetchForecastByTripDate = async ({ city, date1, date2 }) => {
  try {
    return await axios.get(`${city}/${date1}/${date2}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`)
  } catch (e) {
    console.error('Error fetching weather data by trip date:', e);
  }
};

export const fetchDayForecast = async (city) => {
  try {
    const res = await axios.get(`${city}/today?unitGroup=metric&include=days&iconSet=icons2&key=${API_KEY}&contentType=json`);
    return res.data;
  } catch (e) {
    console.error('Error fetching day weather:', e);
  }
};


console.log(await fetchDayForecast('London'));