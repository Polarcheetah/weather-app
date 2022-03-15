import { Col, Row } from 'react-bootstrap';
import LocationBox from '../../common/LocationBox/LocationBox';
import SearchForm from '../../common/SearchForm/SearchForm';
import styles from './Location.module.scss';

const Location = () => {
  return (
    <Row className={styles.row}>
      <Col>
        <LocationBox />
      </Col>
      <Col>
        <SearchForm />
      </Col>
    </Row>
  );
};

export default Location;
