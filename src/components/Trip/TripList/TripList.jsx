import { useState } from 'react';

import { TripItem } from '../TripItem/TripItem';

import css from './TripList.module.css';

export const TripList = ({ onSelectedTrip, trips }) => {
  // const tripList = JSON.parse(localStorage.getItem('trips')) || [];

  return (
    <div className={css.tripWrapper}>
      <ul className={css.tripList}>
        {trips.map(city => (
          <li
            key={city._id}
            onClick={() => {
              onSelectedTrip(city);
            }}
          >
            <TripItem city={city} />
          </li>
        ))}
      </ul>
    </div>
  );
};
