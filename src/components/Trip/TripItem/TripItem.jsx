import css from './TripItem.module.css';
import { formatDate } from '../../../services/formatDate';

export const TripItem = ({ city }) => {
  return (
    <div>
      <img src={city.imageUrl} alt={city.name} className={css.photo} />
      <div>
        <p className={css.cityName}>{city.name}</p>
        <p className={css.date}>
          {formatDate(city.start)} - {formatDate(city.end)}
        </p>
      </div>
    </div>
  );
};
