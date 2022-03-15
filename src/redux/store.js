import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import currentWeatherReducer from './currentWeatherRedux';
import currentPollutionReducer from './currentPollutionRedux';
import geolocationReducer from './geolocationRedux';
import dailyForecastReducer from './dailyForecastRedux';

const subreducers = {
  currentWeather: currentWeatherReducer,
  currentPollution: currentPollutionReducer,
  geolocation: geolocationReducer,
  dailyForecast: dailyForecastReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
