import { useState, useEffect } from 'react';

import { Container } from './components/Container/Container';
import { TripList } from './components/Trip/TripList/TripList';
import { TripSearch } from './components/Trip/TripSearch/TripSearch';
import { TripDayForecast } from './components/TripDayForecast/TripDayForecast';
import { AddTripBtn } from './components/AddTripBtn/AddTripBtn';
import { WeekForecast } from './components/WeekForecast/WeekForecast';
import { tripByDefault } from './data/tripByDefault';
import { fetchDayForecast, fetchTripDateForecast } from './api/api';

import css from './App.module.css';

function App() {
  const [trips, setTrips] = useState(() => {
    const storedTrips = localStorage.getItem('trips');
    return storedTrips ? JSON.parse(storedTrips) : [tripByDefault];
  });
  const [selectedTrip, setSelectedTrip] = useState(tripByDefault);
  const [tripDayForecast, setTripDayForecast] = useState({});
  const [tripDataForecast, setTripDataForecast] = useState({});

  console.log('tripDataForecast', tripDataForecast);

  console.log('selectedTrip', selectedTrip);

  const addNewTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
  }

  useEffect(() => {
    localStorage.setItem('trips', JSON.stringify(trips));
  }, [trips]);

  useEffect(() => {
    if (!selectedTrip) {
      setSelectedTrip(tripByDefault);
    }
    const getForecast = async (selectedTrip) => {
      try {
        if (!selectedTrip) return;
        const weatherDayData = await fetchDayForecast(selectedTrip);
        const weatherData = await fetchTripDateForecast(selectedTrip);
        setTripDayForecast(weatherDayData);
        setTripDataForecast(weatherData);
      } catch (e) {
        console.error('Error in fetching day forecast', e);
      }
    };
    getForecast(selectedTrip);
  }, [selectedTrip]);

  const handleSelectedTrip = (trip) => {
    setSelectedTrip(trip);
  }

  return (
    <Container>
      <div className={css.wrapper}>
        <h2 className={css.title}>
          Weather <span className={css.highlighTitle}>Forecast</span>
        </h2>
        <div className={css.tripWrapper}>
          <TripSearch />
          <div className={css.tripListWrapper}>
            <TripList onSelectedTrip={handleSelectedTrip} trips={trips} />
            <AddTripBtn addNewTrip={addNewTrip} trips={trips} />
          </div>

        </div>
        <WeekForecast tripDataForecast={tripDataForecast.days} />
      </div>
      <TripDayForecast tripDayForecast={tripDayForecast} selectedTrip={selectedTrip} />
    </Container>
  )
};

export default App;
