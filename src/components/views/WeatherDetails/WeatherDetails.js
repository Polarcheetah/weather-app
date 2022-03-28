import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getWeatherData } from '../../../redux/currentWeatherRedux';
import StyledRow from '../../styled-components/StyledRow';

const WeatherDetails = (props) => {
  const weatherData = useSelector(getWeatherData);

  return (
    <div className={props.className}>
      <Row as={StyledRow} bg={0}>
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
