import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getWeatherData } from '../../../redux/currentWeatherRedux';
import styles from './MainWeatherInfo.module.scss';

const MainWeatherInfo = () => {
  const weatherData = useSelector(getWeatherData);

  const [weatherIconId, setWeatherIconId] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');
  const [actualTemp, setActualTemp] = useState('');
  const [feelsLikeTemp, setFeelsLikeTemp] = useState('');

  useEffect(() => {
    if (weatherData.weather && weatherData.main) {
      setWeatherIconId(weatherData.weather[0].icon);
      setWeatherDescription(weatherData.weather[0].description);
      setActualTemp(weatherData.main.temp);
      setFeelsLikeTemp(weatherData.main.feels_like);
    }
  }, [weatherData]);

  return (
    <Row className={styles.main}>
      <Col className={styles.imageWrapper}>
        <img
          className={styles.image}
          alt='weather icon'
          src={`${process.env.PUBLIC_URL}/images/icons/${weatherIconId}.png`}
        />
        <p className={styles.description}>{weatherDescription}</p>
      </Col>
      <Col>
        <p className={styles.temperature}>{Math.round(actualTemp)}°C</p>
        <p className={styles.feelsLike}>
          Feels like: {Math.round(feelsLikeTemp)}°C
        </p>
      </Col>
    </Row>
  );
};
export default MainWeatherInfo;
