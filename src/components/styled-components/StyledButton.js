import styled from 'styled-components';
import Button from '../common/Button';
import { darken } from 'polished';

const StyledButton = styled(Button)`
  background: ${(props) => props.theme.colorSuccess};
  border: none;
  border-radius: ${(props) => props.theme.radius};
  width: 50px;
  color: white;

  i {
    font-size: ${(props) => props.theme.baseSize}px;
  }

  &:hover {
    background: ${(props) => props.theme.colorSuccessHover};
  }
`;

StyledButton.defaultProps = {
  theme: {
    colorSuccess: '#b8e994',
    colorSuccessHover: darken(0.1, '#b8e994'),
    radius: '5px',
    baseSize: 14,
  },
};

export default StyledButton;
