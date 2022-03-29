import styled from 'styled-components';
import MainInfo from './MainInfo';

const StyledMainInfo = styled(MainInfo)`
  .imageWrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-top: ${(props) => props.theme.baseSize}px;

    .image {
      margin: 0;
      width: 128px;
      height: 128px;
    }

    .description {
      font-size: ${(props) => props.theme.baseSize * 1.2}px;
      text-align: center;
    }
  }

  .tempWrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    .temperature {
      font-size: ${(props) => props.theme.baseSize * 4}px;
      margin: ${(props) => props.theme.baseSize}px auto;
      text-align: center;
    }

    .feelsLike {
      font-size: ${(props) => props.theme.baseSize * 1.2}px;
      text-align: center;
    }
  }
`;

StyledMainInfo.defaultProps = {
  theme: {
    baseSize: 14,
  },
};

export default StyledMainInfo;
