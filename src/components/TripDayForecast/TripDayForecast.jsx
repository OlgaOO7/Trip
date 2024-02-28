import { useState, useEffect } from 'react';
import { fetchDayForecast } from '../../api/api';
import { getDayofWeek } from '../../services/getDayOfWeek';

import css from './TripDayForecast.module.css';

export const TripDayForecast = () => {
  const [city, setCity] = useState('Kyiv');
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    const getForecast = async city => {
      try {
        const weatherDayData = await fetchDayForecast(city);
        setCityData(weatherDayData);
      } catch (e) {
        console.error('Error in fetching day forecast', e);
      }
    };
    getForecast(city);
  }, [city]);

  return (
    <div className={css.container}>
      {cityData.days && cityData.days.length > 0 && (
        <div className={css.dayWrapper}>
          <h3 className={css.day}>
            {getDayofWeek(cityData.days[0].datetimeEpoch)}
          </h3>
          <div className={css.weatherWrapper}>
            <img
              src={require(`../../images/weather/${cityData.days[0].icon}.svg`)}
              alt={cityData.days[0].icon}
            />
            <p className={css.temp}>
              {Math.round(cityData.days[0].temp)}
              <sup>°C</sup>
            </p>
          </div>
          <p className={css.cityName}>{cityData.address}</p>
        </div>
      )}
    </div>
  );
};
