import styled from 'styled-components';
import Pollution from '../views/Pollution/Pollution';

const styledPollution = styled(Pollution)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: ${(props) => props.theme.baseSize * 3}px;
    text-align: center;
    margin: 20px 0;
  }

  .subtitle {
    font-size: ${(props) => props.theme.baseSize * 2}px;
    text-align: center;
  }

  .image {
    padding: 0;
    width: 64px;
    height: 64px;
    margin: ${(props) => props.theme.baseSize * 2}px 0;
  }
`;

styledPollution.defaultProps = {
  theme: {
    baseSize: 12,
  },
};

export default styledPollution;
