import { lighten } from 'polished';
import styled from 'styled-components';
import AccordionBody from '../views/AccordionBody/AccordionBody';

const StyledAccordionBody = styled(AccordionBody)`
  .header {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 50px;
  }

  .params {
    font-size: ${(props) => props.theme.baseSize * 1.5}px;
  }

  .main {
    display: grid;
    justify-content: center;
    grid-template-columns: 120px 90px;
    grid-template-rows: auto;
    padding: 0;
  }

  .main p:first-of-type {
    font-weight: bold;
  }

  .temp {
    display: grid;
    justify-content: center;
    grid-template-columns: 120px 90px 90px;
    grid-template-rows: auto;
    padding: 0;
  }

  .temp p:first-of-type {
    font-weight: bold;
  }

  .temp p:last-of-type {
    color: ${(props) => props.theme.colorLight};
  }
`;

StyledAccordionBody.defaultProps = {
  theme: {
    baseSize: 12,
    colorLight: lighten(0.6, '#000'),
  },
};
export default StyledAccordionBody;
