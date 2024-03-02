import { getDayofWeek } from '../../../services/getDayOfWeek';

import css from './WeekWeatherItem.module.css';

export const WeekWeatherItem = ({ day }) => {
  return (
    <div className={css.itemWrapper}>
      <p className={css.day}>{getDayofWeek(day.datetime)}</p>
      <img
        src={require(`../../../images/weather/${day.icon}.svg`)}
        alt={day.icon}
        className={css.weatherIcon}
      />
      <p className={css.temperature}>
        {Math.floor(day.tempmax)}
        <sup>°</sup>/{Math.floor(day.tempmin)}
        <sup>°</sup>
      </p>
    </div>
  );
};
