import styles from './WeatherDetails.module.scss';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getWeatherData } from '../../../redux/currentWeatherRedux';
import { useEffect, useState } from 'react';

const WeatherDetails = () => {
  const weatherData = useSelector(getWeatherData);

  const [humidity, setHumidity] = useState('');
  const [pressure, setPressure] = useState('');
  const [wind, setWind] = useState('');
  const [clouds, setClouds] = useState('');

  useEffect(() => {
    if (weatherData.main && weatherData.wind && weatherData.clouds) {
      setHumidity(weatherData.main.humidity);
      setPressure(weatherData.main.pressure);
      setWind(weatherData.wind.speed);
      setClouds(weatherData.clouds.all);
    }
  }, [weatherData]);

  return (
    <div className={styles.details}>
      <Row>
        <Col>
          <p>
            Humidity: <span>{humidity}%</span>
          </p>
          <p>
            Pressure: <span>{pressure}hPa</span>
          </p>
        </Col>
        <Col>
          <p>
            Wind: <span>{wind}km/h</span>
          </p>
          <p>
            Clouds: <span>{clouds}%</span>
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default WeatherDetails;
