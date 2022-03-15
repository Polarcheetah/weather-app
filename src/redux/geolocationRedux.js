//selectors
//actions
const createActionName = (actionName) => `app/geolocation/${actionName}`;
const FETCH_START = createActionName('FETCH_START');
const GET_DATA = createActionName('GET_DATA');
const FETCH_ERROR = createActionName('FETCH_ERROR');

//action creators
export const fetchStart = (payload) => ({ type: FETCH_START, payload });
export const getGeolocation = (payload) => ({
  type: GET_DATA,
  payload,
});
export const fetchError = (payload) => ({ type: FETCH_ERROR, payload });

//fetching data
export const fetchGeolocation = (cityName) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=132ee331b923fd839e47669db3f85709`;

  return (dispatch) => {
    dispatch(fetchStart());
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getGeolocation(data)))
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

const geolocationReducer = (statePart = initialCurrentData, action) => {
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

export default geolocationReducer;
