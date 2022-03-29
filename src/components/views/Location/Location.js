import { Col, Row } from 'react-bootstrap';
import StyledLocationBox from '../LocationBox/StyledLocationBox';
import StyledRow from '../../styled-components/StyledRow';
import StyledSearchForm from '../../styled-components/StyledSearchForm';

const Location = () => {
  return (
    <Row as={StyledRow} bg={0} first={true}>
      <Col>
        <StyledLocationBox />
      </Col>
      <Col>
        <StyledSearchForm />
      </Col>
    </Row>
  );
};

export default Location;
