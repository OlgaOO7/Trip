import css from './TripDayForecast.module.css';

export const TripDayForecast = () => {
  return (
    <div className={css.container}>
      <h3>day of the week</h3>
      <p>temperature</p>
      <p>city name</p>
    </div>
  );
};
