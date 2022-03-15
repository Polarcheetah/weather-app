//selectors
//actions
const createActionName = (actionName) => `app/currentPollution/${actionName}`;
const FETCH_START = createActionName('FETCH_START');
const GET_DATA = createActionName('GET_CURRENT_POLLUTION');
const FETCH_ERROR = createActionName('FETCH_ERROR');

//action creators
export const fetchStart = (payload) => ({ type: FETCH_START, payload });
export const getDailyForecast = (payload) => ({
  type: GET_DATA,
  payload,
});
export const fetchError = (payload) => ({ type: FETCH_ERROR, payload });

//fetching data
export const fetchDailyForecast = ({ lat, lon }) => {
  const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=132ee331b923fd839e47669db3f85709`;

  return (dispatch) => {
    dispatch(fetchStart());
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getDailyForecast(data)))
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

const dailyForecastReducer = (statePart = initialCurrentData, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...statePart,
        status: { error: false, loading: true },
      };
    case GET_DATA:
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

export default dailyForecastReducer;
