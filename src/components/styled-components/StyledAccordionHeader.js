import { lighten } from 'polished';
import styled from 'styled-components';
import AccordionHeader from '../views/AccordionHeader/AccordionHeader';

const StyledAccordionHeader = styled(AccordionHeader)`
  .row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0;

    .date {
      font-size: ${(props) => props.theme.baseSize * 2}px;
      margin: 0;
    }

    .tempWrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      .tempDay {
        font-size: ${(props) => props.theme.baseSize * 2}px;
        margin: 0;
      }

      .tempNight {
        font-size: ${(props) => props.theme.baseSize * 2}px;
        color: ${(props) => props.theme.colorLight};
        margin: 0;
        margin-left: ${(props) => props.theme.baseSize * 2}px;
      }
    }

    .imageWrapper {
      display: flex;
      justify-content: flex-end;

      .image {
        margin: 0;
        width: ${(props) => props.theme.imageSize}px;
        height: ${(props) => props.theme.imageSize}px;
        text-align: right;
      }
    }
  }
`;

StyledAccordionHeader.defaultProps = {
  theme: {
    baseSize: 12,
    imageSize: 64,
    colorLight: lighten(0.7, '#000'),
  },
};

export default StyledAccordionHeader;
