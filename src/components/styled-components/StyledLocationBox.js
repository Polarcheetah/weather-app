import styled from 'styled-components';
import LocationBox from '../common/LocationBox';

const StyledLocationBox = styled(LocationBox)`
  margin: 10px;
  padding: 0;

  h3 {
    font-size: ${(props) => props.theme.fontSize * 3}px;
  }

  h4 {
    font-size: ${(props) => props.theme.fontSize * 2}px;
  }
`;

StyledLocationBox.defaultProps = {
  theme: {
    fontSize: 12,
  },
};

export default StyledLocationBox;
