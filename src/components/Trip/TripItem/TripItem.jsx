import css from './TripItem.module.css';
import { formatDate } from '../../../services/formatDate';

export const TripItem = ({ city }) => {
  return (
    <div className={css.wrapper}>
      <img src={city.imageUrl} alt={city.name} className={css.photo} />
      <div className={css.labelWrapper}>
        <p className={css.cityName}>{city.name}</p>
        <p className={css.date}>
          {formatDate(city.start)} - {formatDate(city.end)}
        </p>
      </div>
    </div>
  );
};
