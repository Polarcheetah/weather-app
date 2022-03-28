import styled from 'styled-components';
import MainInfo from '../views/MainInfo/MainInfo';

const StyledMainInfo = styled(MainInfo)`
  .imageWrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-top: ${(props) => props.theme.baseSize * 1.5}px;

    .image {
      margin: 0;
      width: 128px;
      height: 128px;
    }

    .description {
      font-size: ${(props) => props.theme.baseSize * 1.5}px;
      text-align: center;
    }
  }

  .temperature {
    font-size: ${(props) => props.theme.baseSize * 6}px;
    margin-top: ${(props) => props.theme.baseSize * 4}px;
    margin-bottom: 0;
    text-align: center;
  }

  .feelsLike {
    font-size: ${(props) => props.theme.baseSize * 1.5}px;
    text-align: center;
  }
`;

StyledMainInfo.defaultProps = {
  theme: {
    baseSize: 12,
  },
};

export default StyledMainInfo;
