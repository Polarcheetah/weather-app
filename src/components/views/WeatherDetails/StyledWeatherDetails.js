import styled from 'styled-components';
import WeatherDetails from './WeatherDetails';

const StyledWeatherDetails = styled(WeatherDetails)`
  p {
    font-size: ${(props) => props.theme.baseSize * 1.2}px;
    text-align: center;
    margin: 20px;
  }
  p span {
    font-weight: 600;
  }
`;

StyledWeatherDetails.defaultProps = {
  theme: {
    baseSize: 14,
  },
};
export default StyledWeatherDetails;
