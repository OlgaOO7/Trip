import { WeekWeatherList } from './WeekWeatherList/WeekWeatherList';

import css from './WeekForecast.module.css';

export const WeekForecast = ({ tripDataForecast }) => {
  if (!tripDataForecast) {
    return null;
  }
  const days = tripDataForecast.length || [];
  const pluralSuffix = days === 1 ? 'day' : 'days';

  return (
    <div className={css.weekWrapper}>
      <h3 className={css.subTitle}>
        {days} {pluralSuffix}
      </h3>
      <WeekWeatherList tripDataForecast={tripDataForecast} />
    </div>
  );
};
