import css from "./TripItem.module.css";

export const TripItem = ({ city }) => {
  return (
    <div>
      <img src={city.imageUrl} alt={city.name} className={css.photo} />
      <div>
        <p className={css.cityName}>{city.name}</p>
        <p className={css.date}> 14.07.2023 - 21.07.2023 </p>
      </div>
    </div>
  );
};
