import { useSelector } from 'react-redux';
import showDate from '../../../utils/showDate';
import styles from './LocationBox.module.scss';

const LocationBox = () => {
  const weatherName = useSelector((state) => state.currentWeather.data.name);

  return (
    <div>
      <h3 className={styles.locationName}>{weatherName}</h3>
      <h4 className={styles.actualDate}>{showDate(new Date())}</h4>
    </div>
  );
};
export default LocationBox;
