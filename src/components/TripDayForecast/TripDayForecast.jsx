import { CountDownTimer } from '../CountDownTimer/CountDownTimer';
import { getDayofWeek } from '../../services/getDayOfWeek';

import css from './TripDayForecast.module.css';

export const TripDayForecast = ({ tripDayForecast, selectedTrip }) => {
  return (
    <div className={css.container}>
      {tripDayForecast.days && tripDayForecast.days.length > 0 && (
        <div className={css.dayWrapper}>
          <h3 className={css.day}>
            {getDayofWeek(tripDayForecast.days[0].datetimeEpoch)}
          </h3>
          <div className={css.weatherWrapper}>
            <img
              src={require(`../../images/weather/${tripDayForecast.days[0].icon}.svg`)}
              alt={tripDayForecast.days[0].icon}
              className={css.weatherIcon}
            />
            <p className={css.temp}>
              {Math.round(tripDayForecast.days[0].temp)}
              <sup>°C</sup>
            </p>
          </div>
          <p className={css.cityName}>{tripDayForecast.address}</p>
        </div>
      )}
      <CountDownTimer selectedTrip={selectedTrip} />
    </div>
  );
};
