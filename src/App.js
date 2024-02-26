import { Container } from './components/Container/Container';
import { Trip } from './components/Trip/Trip';
import { TripDayForecast } from './components/TripDayForecast/TripDayForecast';

import css from './App.module.css';

function App() {
  return (
    <Container>
      <div className={css.wrapper}>
        <h1>
          Weather <span>Forecast</span>
        </h1>
        <Trip />
      </div>
      <TripDayForecast />
    </Container>
  )
};

export default App;
