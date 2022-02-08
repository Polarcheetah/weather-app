import { useDispatch } from 'react-redux';

const CurrentWeather = () => {
  const dispatch = useDispatch();

  const getData = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getCurrentWeather(lat, lon);
  };

  navigator.geolocation.getCurrentPosition(getData);

  const getCurrentWeather = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=132ee331b923fd839e47669db3f85709`;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
        dispatch({
          type: 'ADD_CURRENT_DATA',
          payload: parsedResponse,
        });
      });
  };

  return (
    <div>
      <h3>Current Weather</h3>
    </div>
  );
};

export default CurrentWeather;
