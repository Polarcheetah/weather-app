import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getDayById } from '../../../redux/dailyForecastRedux';
import styles from './AccordionBody.module.scss';

const AccordionBody = ({ dayId }) => {
  const dayParams = useSelector((state) => getDayById(state, dayId));
  console.log(dayParams);
  return (
    <Container className={styles.body}>
      <Row>
        <Col>
          <h3 className={styles.header}>main weather info</h3>
          <Row className={styles.mainInfoWrapper}>
            <Col className={styles.paramName}>
              <p>humidity:</p>
              <p>pressure:</p>
              <p>clouds:</p>
              <p>wind:</p>
            </Col>
            <Col className={styles.param}>
              <p>{dayParams.humidity}%</p>
              <p>{dayParams.pressure}hPa</p>
              <p>{dayParams.clouds}%</p>
              <p>{dayParams.wind_speed}km/h</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className={styles.tempWrapper}>
            <h3 className={styles.header}>temperature</h3>
            <Col className={styles.paramName}>
              <p>Morning:</p>
              <p>Day:</p>
              <p>Evening:</p>
              <p>Night:</p>
            </Col>
            <Col className={styles.param}>
              <p>{dayParams.temp.morn}°C</p>
              <p>{dayParams.temp.day}°C</p>
              <p>{dayParams.temp.eve}°C</p>
              <p>{dayParams.temp.night}°C</p>
            </Col>
            <Col className={styles.param_feelsLike}>
              <p>{dayParams.feels_like.morn}°C</p>
              <p>{dayParams.feels_like.day}°C</p>
              <p>{dayParams.feels_like.eve}°C</p>
              <p>{dayParams.feels_like.night}°C</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AccordionBody;
