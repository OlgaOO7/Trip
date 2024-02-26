import { Container } from './components/Container/Container';
import { Trip } from './components/Trip/Trip';
import { TripDayForecast } from './components/TripDayForecast/TripDayForecast';
import { AddTripBtn } from './components/AddTripBtn/AddTripBtn';

import css from './App.module.css';

function App() {
  return (
    <Container>
      <div className={css.wrapper}>
        <h2 className={css.title}>
          Weather <span className={css.highlighTitle}>Forecast</span>
        </h2>
        <div className={css.tripWrapper}>
          <Trip />
          <AddTripBtn />
        </div>
      </div>
      <TripDayForecast />
    </Container>
  )
};

export default App;
