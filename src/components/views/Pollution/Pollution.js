import { useSelector } from 'react-redux';
import { getPollutionData } from '../../../redux/currentPollutionRedux';
import styles from './Pollution.module.scss';

const Pollution = () => {
  const pollution = useSelector(getPollutionData);
  // const [iconCode, setIconCode] = useState('');

  // useEffect(() => {
  //   if (pollution.list) {
  //     setIconCode(pollution.list[0].main.aqi);
  //   }
  // }, [pollution]);

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
    <div className={styles.airPollution}>
      <h3 className={styles.header}>Air pollution</h3>
      <h4>{nameAirQuality(pollution.list[0].main.aqi)}</h4>
      <img
        className={styles.image}
        alt='pollution img'
        src={`${process.env.PUBLIC_URL}/images/pollution/icon-${pollution.list[0].main.aqi}.png`}
      />
    </div>
  );
};

export default Pollution;
