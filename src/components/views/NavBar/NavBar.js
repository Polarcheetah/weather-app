import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <Navbar bg='light' expand='lg' className={props.className}>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='nav'>
          <Nav.Link as={NavLink} to='/'>
            Current Weather
          </Nav.Link>
          <Nav.Link as={NavLink} to='/daily'>
            Daily Forecast
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
