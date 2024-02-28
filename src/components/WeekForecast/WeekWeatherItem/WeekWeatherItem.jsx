import { getDayofWeek } from '../../../services/getDayOfWeek';

export const WeekWeatherItem = () => {
  return (
    <div>
      <p>Day of week</p>
      <img src="" alt="" />
      <p>
        {}
        <sup>°C</sup>/{}
        <sup>°C</sup>
      </p>
    </div>
  );
};
