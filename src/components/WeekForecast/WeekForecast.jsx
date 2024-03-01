import { WeekWeatherList } from './WeekWeatherList/WeekWeatherList';

export const WeekForecast = ({ tripDataForecast }) => {
  return (
    <div className="wrapper">
      <h3>Week</h3>
      <WeekWeatherList tripDataForecast={tripDataForecast} />
    </div>
  );
};
