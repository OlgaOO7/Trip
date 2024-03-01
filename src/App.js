import { useState, useEffect, useRef } from 'react';

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
  const [visibleTrips, setVisibleTrips] = useState(trips);
  const [selectedTrip, setSelectedTrip] = useState(tripByDefault);
  const [tripDayForecast, setTripDayForecast] = useState({});
  const [tripDataForecast, setTripDataForecast] = useState({});
  const [search, setSearch] = useState('');

  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const addNewTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
  }

  const handleScroll = direction => {
    const container = scrollContainerRef.current;
    const scrollStep = 450;

    if (container) {
      if (direction === 'next') {
        container.scrollLeft += scrollStep;
      } else if (direction === 'prev') {
        container.scrollLeft -= scrollStep;
      }
      setScrollPosition(container.scrollLeft);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleScrollUpdate = () => {
      if (container) {
        setScrollPosition(container.scrollLeft);
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScrollUpdate);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScrollUpdate);
      }
    };
  }, [scrollContainerRef]);

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

  useEffect(() => {
    if (search) {
      const filteredTrips = trips.filter(trip => trip.name.toLowerCase().includes(search.trim().toLowerCase()));
      setVisibleTrips(filteredTrips);
    } else {
      setVisibleTrips(trips);
    }
  }, [search, trips]);

  const handleSelectedTrip = (trip) => {
    setSelectedTrip(trip);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <Container>
      <div className={css.wrapper}>
        <h2 className={css.title}>
          Weather <span className={css.highlighTitle}>Forecast</span>
        </h2>
        <div className={css.tripWrapper}>

          <TripSearch search={search} onSearch={handleSearch} />
          <div className={css.tripListWrapper}>
            <TripList onSelectedTrip={handleSelectedTrip} trips={visibleTrips} handleScroll={handleScroll} scrollPosition={scrollPosition} scrollContainerRef={scrollContainerRef} />
            <AddTripBtn addNewTrip={addNewTrip} trips={visibleTrips} />
          </div>

        </div>
        {/* <WeekForecast tripDataForecast={tripDataForecast.days} /> */}
      </div>
      <TripDayForecast tripDayForecast={tripDayForecast} selectedTrip={selectedTrip} />
    </Container>
  )
};

export default App;
