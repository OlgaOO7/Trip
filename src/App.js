// import { Routes, Route } from 'react-router-dom';
// import { HomePage } from './pages/HomePage/HomePage';
// import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

import { Container } from './components/Container/Container';
import { Trip } from './components/Trip/Trip';

import css from './App.module.css';

function App() {
  return (
    <Container>
      <div className={css.wrapper}>
        <h1>
          Weather <span>Forecast</span>
        </h1>
        <Trip />
      </div >
    </Container>
  )
};

export default App;
