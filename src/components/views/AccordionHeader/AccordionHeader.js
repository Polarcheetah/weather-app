import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getDayById } from '../../../redux/dailyForecastRedux';
import fromUnixToDate from '../../../utils/fromUnixToDate';
import showDate from '../../../utils/showDate';
import styles from './AccordionHeader.module.scss';

const AccordionHeader = ({ dayId }) => {
  const dayParams = useSelector((state) => getDayById(state, dayId));
  //console.log(dayParams);
  const unix_timestamp = dayParams.dt;

  return (
    <Container>
      <Row className={styles.row}>
        <Col>
          <p className={styles.date}>
            {showDate(fromUnixToDate(unix_timestamp))}
          </p>
        </Col>
        <Col className={styles.imageWrapper}>
          <img
            className={styles.image}
            alt='weather icon'
            src={`${process.env.PUBLIC_URL}/images/icons/${dayParams.weather[0].icon}.png`}
          />
        </Col>
        <Col className={styles.tempWrapper}>
          <p className={styles.temp}>
            {dayParams.temp.day}°C <span>{dayParams.temp.night}°C</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AccordionHeader;
