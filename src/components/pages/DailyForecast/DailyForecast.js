import { useEffect, useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDailyForecast } from '../../../redux/dailyForecastRedux';
import DayForecast from '../../views/DayForecast/DayForecast';
import styles from './DailyForecast.module.scss';

const DailyForecast = () => {
  const dispatch = useDispatch();
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const daily = useSelector((state) => state.dailyForecast);
  const geo = useSelector((state) => state.geolocation);

  const { error, loading } = useSelector(
    ({ currentWeather }) => currentWeather.status
  );

  const week = [0, 1, 2, 3, 4, 5, 6, 7];

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
    dispatch(fetchDailyForecast({ lat, lon }));
  }, [dispatch, lat, lon]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !error && daily.data?.daily && (
        <Container>
          <Accordion className={styles.accordion} defaultActiveKey='0'>
            {week.map((day) => (
              <DayForecast key={day} dayId={day} />
            ))}
          </Accordion>
        </Container>
      )}
    </div>
  );
};

export default DailyForecast;
