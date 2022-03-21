import styles from './WeatherDetails.module.scss';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getWeatherData } from '../../../redux/currentWeatherRedux';

const WeatherDetails = () => {
  const weatherData = useSelector(getWeatherData);

  // const [humidity, setHumidity] = useState('');
  // const [pressure, setPressure] = useState('');
  // const [wind, setWind] = useState('');
  // const [clouds, setClouds] = useState('');

  // useEffect(() => {
  //   if (weatherData.main && weatherData.wind && weatherData.clouds) {
  //     setHumidity(weatherData.main.humidity);
  //     setPressure(weatherData.main.pressure);
  //     setWind(weatherData.wind.speed);
  //     setClouds(weatherData.clouds.all);
  //   }
  // }, [weatherData]);

  return (
    <div className={styles.details}>
      <Row>
        <Col>
          <p>
            Humidity: <span>{weatherData.main.humidity}%</span>
          </p>
          <p>
            Pressure: <span>{weatherData.main.pressure}hPa</span>
          </p>
        </Col>
        <Col>
          <p>
            Wind: <span>{weatherData.wind.speed}km/h</span>
          </p>
          <p>
            Clouds: <span>{weatherData.clouds.all}%</span>
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default WeatherDetails;
