import { useState } from 'react';

import { TripItem } from '../TripItem/TripItem';

import css from './TripList.module.css';

export const TripList = () => {
  // const [trips, setTrips] = useState([tripByDefault]);
  // console.log(trips);

  const tripList = JSON.parse(localStorage.getItem('trips')) || [];

  return (
    <ul className={css.tripWrapper}>
      {tripList.map(city => (
        <li key={city._id}>
          <TripItem city={city} />
        </li>
      ))}
    </ul>
  );
};
