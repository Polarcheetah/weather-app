import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getDayById } from '../../../redux/dailyForecastRedux';

const AccordionBody = (props) => {
  const dayParams = useSelector((state) => getDayById(state, props.dayId));
  return (
    <Container className={props.className}>
      <Row>
        <Col className='params'>
          <h3 className='header'>main weather info</h3>
          <div className='main'>
            <p>humidity:</p>
            <p>{dayParams.humidity}%</p>
          </div>
          <div className='main'>
            <p>pressure:</p>
            <p>{dayParams.pressure}hPa</p>
          </div>
          <div className='main'>
            <p>clouds:</p>
            <p>{dayParams.clouds}%</p>
          </div>
          <div className='main'>
            <p>wind:</p>
            <p>{dayParams.wind_speed}km/h</p>
          </div>
        </Col>
        <Col className='params'>
          <h3 className='header'>temperature</h3>
          <div className='temp'>
            <p>Morning:</p>
            <p>{dayParams.temp.morn}°C</p>
            <p>{dayParams.feels_like.morn}°C</p>
          </div>
          <div className='temp'>
            <p>Day:</p>
            <p>{dayParams.temp.day}°C</p>
            <p>{dayParams.feels_like.day}°C</p>
          </div>
          <div className='temp'>
            <p>Evening:</p>
            <p>{dayParams.temp.eve}°C</p>
            <p>{dayParams.feels_like.eve}°C</p>
          </div>
          <div className='temp'>
            <p>Night:</p>
            <p>{dayParams.temp.night}°C</p>
            <p>{dayParams.feels_like.night}°C</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AccordionBody;
