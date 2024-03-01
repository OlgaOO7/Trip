import axios from "axios";

import { formatDate } from '../services/formatDate';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const fetchTripDateForecast = async (selectedTrip) => {
  const { name, start, end } = selectedTrip;

  try {
    const res = await axios.get(`${name}/${formatDate(start, 'api')}/${formatDate(end, 'api')}?unitGroup=metric&include=days&iconSet=icons2&key=${API_KEY}&contentType=json`);
    return res.data;
  } catch (e) {
    console.error('Error fetching weather data by trip date:', e);
  }
};

export const fetchDayForecast = async (selectedTrip) => {
  const { name } = selectedTrip;
  try {
    const res = await axios.get(`${name}/today?unitGroup=metric&include=days&iconSet=icons2&key=${API_KEY}&contentType=json`);
    return res.data;
  } catch (e) {
    console.error('Error fetching day weather:', e);
  }
};