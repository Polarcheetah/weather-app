import styled from 'styled-components';
import WeatherDetails from '../views/WeatherDetails/WeatherDetails';

const StyledWeatherDetails = styled(WeatherDetails)`
  p {
    font-size: ${(props) => props.theme.baseSize * 2}px;
    text-align: center;
    margin: 20px;
  }
  p span {
    font-weight: 600;
  }
`;

StyledWeatherDetails.defaultProps = {
  theme: {
    baseSize: 12,
  },
};
export default StyledWeatherDetails;
