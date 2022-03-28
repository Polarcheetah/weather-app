import { Accordion } from 'react-bootstrap';
import StyledAccordionBody from '../../styled-components/StyledAccordionBody';
import StyledAccordionHeader from '../../styled-components/StyledAccordionHeader';

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
