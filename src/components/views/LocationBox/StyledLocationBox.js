import styled from 'styled-components';
import LocationBox from './LocationBox';

const StyledLocationBox = styled(LocationBox)`
  margin: 10px;
  padding: 0;

  h3 {
    font-size: ${(props) => props.theme.baseSize * 2}px;
  }

  h4 {
    font-size: ${(props) => props.theme.baseSize * 1.5}px;
  }
`;

StyledLocationBox.defaultProps = {
  theme: {
    baseSize: 14,
  },
};

export default StyledLocationBox;
