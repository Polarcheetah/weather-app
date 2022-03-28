import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getDayById } from '../../../redux/dailyForecastRedux';
import fromUnixToDate from '../../../utils/fromUnixToDate';
import showDate from '../../../utils/showDate';

const AccordionHeader = (props) => {
  const dayParams = useSelector((state) => getDayById(state, props.dayId));
  const unix_timestamp = dayParams.dt;

  return (
    <Container className={props.className}>
      <Row className='row'>
        <Col>
          <p className='date'>{showDate(fromUnixToDate(unix_timestamp))}</p>
        </Col>
        <Col className='imageWrapper'>
          <img
            className='image'
            alt='weather icon'
            src={`${process.env.PUBLIC_URL}/images/icons/${dayParams.weather[0].icon}.png`}
          />
        </Col>
        <Col className='tempWrapper'>
          <p className='tempDay'>{dayParams.temp.day}°C</p>
          <p className='tempNight'>{dayParams.temp.night}°C</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AccordionHeader;
