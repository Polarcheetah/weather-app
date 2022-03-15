//selectors
export const getWeatherData = (state) => state.currentWeather.data;

//actions
const createActionName = (actionName) => `app/currentWeather/${actionName}`;
const FETCH_START = createActionName('FETCH_START');
const GET_CURRENT_WEATHER = createActionName('GET_CURRENT_WEATHER');
const FETCH_ERROR = createActionName('FETCH_ERROR');

//action creators
export const fetchStart = (payload) => ({ type: FETCH_START, payload });
export const getCurrentWeather = (payload) => ({
  type: GET_CURRENT_WEATHER,
  payload,
});
export const fetchError = (payload) => ({ type: FETCH_ERROR, payload });

//fetching data
export const fetchCurrentWeatherData = ({ lat, lon }) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=132ee331b923fd839e47669db3f85709`;

  return (dispatch) => {
    dispatch(fetchStart());
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getCurrentWeather(data)))
      .catch((error) => {
        dispatch(fetchError(error.message || true));
      });
  };
};

//initial state
export const initialCurrentData = {
  data: {},
  status: {
    error: false,
    loading: false,
  },
};

const currentWeatherReducer = (statePart = initialCurrentData, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...statePart,
        status: { error: false, loading: true },
      };
    case GET_CURRENT_WEATHER:
      return {
        ...statePart,
        status: { error: false, loading: false },
        data: { ...action.payload },
      };
    case FETCH_ERROR:
      return {
        ...statePart,
        status: { error: action.payload, loading: false },
      };
    default:
      return statePart;
  }
};

export default currentWeatherReducer;
