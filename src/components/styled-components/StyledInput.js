import styled from 'styled-components';
import Input from '../common/Input';
import { darken } from 'polished';

const StyledInput = styled(Input)`
  background: ${(props) => props.theme.background};
  font-size: ${(props) => props.theme.baseSize};

  &:hover {
    background: ${(props) => props.theme.backgroundHover};
  }
`;

StyledInput.defaultProps = {
  theme: {
    background: '#ecf0f1',
    backgroundHover: darken(0.1, '#ecf0f1'),
    baseSize: 14,
  },
};

export default StyledInput;
