import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentPollutionData } from '../../../redux/currentPollutionRedux';
import { fetchCurrentWeatherData } from '../../../redux/currentWeatherRedux';
import StyledMainInfo from '../../views/MainInfo/StyledMainInfo';
import StyledWeatherDetails from '../../views/WeatherDetails/StyledWeatherDetails';
import StyledPollution from '../../views/Pollution/StyledPollution';
import Location from '../../views/Location/Location';
import StyledContainer from '../../styled-components/StyledContainer';

const CurrentWeather = () => {
  const dispatch = useDispatch();
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const weather = useSelector((state) => state.currentWeather);
  const pollution = useSelector((state) => state.currentPollution);
  const geo = useSelector((state) => state.geolocation);

  const { error, loading } = useSelector(
    ({ currentWeather }) => currentWeather.status
  );

  const getData = (position) => {
    const lattitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLat(lattitude);
    setLon(longitude);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getData);
  }, []);

  useEffect(() => {
    if (Object.keys(geo.data).length > 0) {
      setLat(geo.data[0].lat);
      setLon(geo.data[0].lon);
    }
  }, [geo.data]);

  useEffect(() => {
    dispatch(fetchCurrentWeatherData({ lat, lon }));
    dispatch(fetchCurrentPollutionData({ lat, lon }));
  }, [dispatch, lat, lon]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !error && weather.data?.coord && pollution.data?.coord && (
        <Container as={StyledContainer}>
          <Location />
          <StyledMainInfo />
          <StyledWeatherDetails />
          <StyledPollution />
        </Container>
      )}
    </div>
  );
};

export default CurrentWeather;
