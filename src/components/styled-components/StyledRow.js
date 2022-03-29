import { lighten } from 'polished';
import styled from 'styled-components';

const StyledRow = styled.div`
  padding: 20px;
  background: ${(props) =>
    props.bg === 0
      ? (props) => props.theme.backgroundOne
      : (props) => props.theme.backgroundTwo};
  border-top-right-radius: ${(props) =>
    props.first === true ? (props) => props.theme.borderRadius : '0'};
  border-top-left-radius: ${(props) =>
    props.first === true ? (props) => props.theme.borderRadius : '0'};
  border-bottom-right-radius: ${(props) =>
    props.last === true ? (props) => props.theme.borderRadius : '0'};
  border-bottom-left-radius: ${(props) =>
    props.last === true ? (props) => props.theme.borderRadius : '0'};
`;

StyledRow.defaultProps = {
  theme: {
    backgroundOne: '#fff',
    backgroundTwo: lighten(0.75, '#0a3d62'),
    borderRadius: '3px',
  },
};

export default StyledRow;
