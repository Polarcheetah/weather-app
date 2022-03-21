import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getWeatherData } from '../../../redux/currentWeatherRedux';
import styles from './MainWeatherInfo.module.scss';

const MainWeatherInfo = () => {
  const weatherData = useSelector(getWeatherData);

  // const [weatherIconId, setWeatherIconId] = useState('');
  // const [weatherDescription, setWeatherDescription] = useState('');
  // const [actualTemp, setActualTemp] = useState('');
  // const [feelsLikeTemp, setFeelsLikeTemp] = useState('');

  // useEffect(() => {
  //   if (weatherData.weather && weatherData.main) {
  //     setWeatherIconId(weatherData.weather[0].icon);
  //     setWeatherDescription(weatherData.weather[0].description);
  //     setActualTemp(weatherData.main.temp);
  //     setFeelsLikeTemp(weatherData.main.feels_like);
  //   }
  // }, [weatherData]);

  return (
    <Row className={styles.main}>
      <Col className={styles.imageWrapper}>
        <img
          className={styles.image}
          alt='weather icon'
          src={`${process.env.PUBLIC_URL}/images/icons/${weatherData.weather[0].icon}.png`}
        />
        <p className={styles.description}>
          {weatherData.weather[0].description}
        </p>
      </Col>
      <Col>
        <p className={styles.temperature}>
          {Math.round(weatherData.main.temp)}°C
        </p>
        <p className={styles.feelsLike}>
          Feels like: {Math.round(weatherData.main.feels_like)}°C
        </p>
      </Col>
    </Row>
  );
};
export default MainWeatherInfo;
