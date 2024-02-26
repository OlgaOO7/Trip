import { useState } from 'react';

import citiesData from '../../../data/mockData.json';
import { TripItem } from '../TripItem/TripItem';

import { tripByDefault } from '../../../data/tripByDefault';

export const TripList = () => {
  const [trips, setTrips] = useState([tripByDefault]);
  console.log(trips);

  const cities = citiesData || [];
  console.log('cities:', cities);
  return (
    <ul>
      {trips.map(city => (
        <li key={city._id}>
          <TripItem city={city} />
        </li>
      ))}
    </ul>
  );
};
