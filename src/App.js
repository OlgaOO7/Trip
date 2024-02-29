import { useState, useEffect } from 'react';

import { Container } from './components/Container/Container';
import { Trip } from './components/Trip/Trip';
import { TripDayForecast } from './components/TripDayForecast/TripDayForecast';
import { AddTripBtn } from './components/AddTripBtn/AddTripBtn';
import { WeekForecast } from './components/WeekForecast/WeekForecast';
import { tripByDefault } from './data/tripByDefault';
import { fetchForecastByDay } from './api/api';

import css from './App.module.css';

function App() {
  // const [trips, setTrips] = useState(() => [tripByDefault]);

  const [trips, setTrips] = useState(() => {
    const storedTrips = localStorage.getItem('trips');
    return storedTrips ? JSON.parse(storedTrips) : [tripByDefault];
  });

  useEffect(() => {
    localStorage.setItem('trips', JSON.stringify(trips));
  }, [trips]);

  console.log('trip app', trips);

  const addNewTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
  }

  return (
    <Container>
      <div className={css.wrapper}>
        <h2 className={css.title}>
          Weather <span className={css.highlighTitle}>Forecast</span>
        </h2>
        <div className={css.tripWrapper}>
          <Trip />
          <AddTripBtn addNewTrip={addNewTrip} />
        </div>
        <WeekForecast />
      </div>
      <TripDayForecast />
    </Container>
  )
};

export default App;
