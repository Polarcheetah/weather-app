import { lighten } from 'polished';
import styled from 'styled-components';

const StyledRow = styled.div`
  padding: 20px;
  background: ${(props) =>
    props.bg === 0
      ? (props) => props.theme.backgroundOne
      : (props) => props.theme.backgroundTwo};
`;

StyledRow.defaultProps = {
  theme: {
    backgroundOne: '#fff',
    backgroundTwo: lighten(0.75, '#0a3d62'),
  },
};

export default StyledRow;
