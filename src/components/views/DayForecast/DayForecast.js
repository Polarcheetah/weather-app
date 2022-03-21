import { Accordion } from 'react-bootstrap';
import AccordionBody from '../AccordionBody/AccordionBody';
import AccordionHeader from '../AccordionHeader/AccordionHeader';
import styles from './DayForecast.module.scss';

const DayForecast = ({ dayId }) => {
  return (
    <Accordion.Item eventKey={dayId} className={styles.accordionItem}>
      <Accordion.Header>
        <AccordionHeader dayId={dayId} />
      </Accordion.Header>
      <Accordion.Body>
        <AccordionBody dayId={dayId} />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default DayForecast;
