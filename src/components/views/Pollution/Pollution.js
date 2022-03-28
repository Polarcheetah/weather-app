import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getPollutionData } from '../../../redux/currentPollutionRedux';
import StyledRow from '../../styled-components/StyledRow';

const Pollution = (props) => {
  const pollution = useSelector(getPollutionData);

  const nameAirQuality = (aqi) => {
    switch (aqi) {
      case 1:
        return 'Good';
      case 2:
        return 'Fair';
      case 3:
        return 'Moderate';
      case 4:
        return 'Poor';
      case 5:
        return 'Very Poor';
      default:
        return 'No info';
    }
  };
  return (
    <Row as={StyledRow} className={props.className}>
      <h3 className='title'>Air pollution</h3>
      <h4 className='subtitle'>{nameAirQuality(pollution.list[0].main.aqi)}</h4>
      <img
        className='image'
        alt='pollution img'
        src={`${process.env.PUBLIC_URL}/images/pollution/icon-${pollution.list[0].main.aqi}.png`}
      />
    </Row>
  );
};

export default Pollution;
