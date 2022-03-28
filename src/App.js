import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import CurrentWeather from './components/pages/CurrentWeather/CurrentWeather';
import DailyForecast from './components/pages/DailyForecast/DailyForecast';
import NotFound from './components/pages/NotFound/NotFound';
import NavBar from './components/views/NavBar/NavBar';
import './styles/custom.scss';
import { GlobalStyles } from './styles/globalStyles';

function App(props) {
  return (
    <div className={props.className}>
      <GlobalStyles />
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<CurrentWeather />} />
          <Route path='/daily' element={<DailyForecast />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
