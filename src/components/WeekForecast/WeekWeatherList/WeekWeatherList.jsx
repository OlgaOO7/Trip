import { WeekWeatherItem } from '../WeekWeatherItem/WeekWeatherItem';

import css from './WeekWeatherList.module.css';

export const WeekWeatherList = ({ tripDataForecast }) => {
  // const days = tripDataForecast ? tripDataForecast : [];
  const days =
    tripDataForecast && tripDataForecast.days ? tripDataForecast.days : [];

  return (
    <ul className={css.weatherList}>
      {days.map(day => (
        <li key={day.datetimeEpoch}>
          <WeekWeatherItem day={day} />
        </li>
      ))}
    </ul>
  );
};
