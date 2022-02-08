import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import './styles/custom.scss';

function App() {
  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <CurrentWeather />
        </Row>
      </Container>
    </div>
  );
}

export default App;
