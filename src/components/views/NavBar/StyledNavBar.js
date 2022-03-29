import styled from 'styled-components';
import NavBar from './NavBar';

const StyledNavBar = styled(NavBar)`
  .nav {
    font-size: ${(props) => props.theme.baseSize}px;
  }
`;
StyledNavBar.defaultProps = {
  theme: {
    baseSize: 14,
  },
};
export default StyledNavBar;
