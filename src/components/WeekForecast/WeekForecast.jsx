import { WeekWeatherList } from './WeekWeatherList/WeekWeatherList';

export const WeekForecast = ({ tripDataForecast }) => {
  if (!tripDataForecast) {
    return null;
  }
  const days = tripDataForecast.length || [];
  const pluralSuffix = days === 1 ? 'day' : 'days';

  return (
    <div className="wrapper">
      <h3>
        {days} {pluralSuffix}
      </h3>
      <WeekWeatherList tripDataForecast={tripDataForecast} />
    </div>
  );
};
