import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getWeatherData } from '../../../redux/currentWeatherRedux';
import StyledRow from '../../styled-components/StyledRow';

const MainInfo = (props) => {
  const weatherData = useSelector(getWeatherData);

  return (
    <Row as={StyledRow} bg={1} className={props.className}>
      <Col className='imageWrapper'>
        <img
          className='image'
          alt='weather icon'
          src={`${process.env.PUBLIC_URL}/images/icons/${weatherData.weather[0].icon}.png`}
        />
        <p className='description'>{weatherData.weather[0].description}</p>
      </Col>
      <Col className='tempWrapper'>
        <p className='temperature'>{Math.round(weatherData.main.temp)}°C</p>
        <p className='feelsLike'>
          Feels like: {Math.round(weatherData.main.feels_like)}°C
        </p>
      </Col>
    </Row>
  );
};
export default MainInfo;
