import { initialCurrentData } from './currentWeatherRedux';

const initialState = {
  currentWeather: initialCurrentData,
  currentPollution: initialCurrentData,
  geolocation: initialCurrentData,
  dailyForecast: initialCurrentData,
};

export default initialState;
