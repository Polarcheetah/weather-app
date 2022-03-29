import { Accordion } from 'react-bootstrap';
import StyledAccordionBody from '../AccordionBody/StyledAccordionBody';
import StyledAccordionHeader from '../AccordionHeader/StyledAccordionHeader';

const DayForecast = ({ dayId }) => {
  return (
    <Accordion.Item eventKey={dayId}>
      <Accordion.Header>
        <StyledAccordionHeader dayId={dayId} />
      </Accordion.Header>
      <Accordion.Body>
        <StyledAccordionBody dayId={dayId} />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default DayForecast;
