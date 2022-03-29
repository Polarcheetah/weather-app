import styled from 'styled-components';
import Pollution from './Pollution';

const StyledPollution = styled(Pollution)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: ${(props) => props.theme.baseSize * 2}px;
    text-align: center;
    margin: 20px 0;
  }

  .subtitle {
    font-size: ${(props) => props.theme.baseSize * 1.5}px;
    text-align: center;
  }

  .image {
    padding: 0;
    width: 64px;
    height: 64px;
    margin: ${(props) => props.theme.baseSize}px 0;
  }
`;

StyledPollution.defaultProps = {
  theme: {
    baseSize: 14,
  },
};

export default StyledPollution;
