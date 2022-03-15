import { useSelector } from 'react-redux';
import styles from './LocationBox.module.scss';

const LocationBox = () => {
  const weatherName = useSelector((state) => state.currentWeather.data.name);

  const showDate = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Sathurday',
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];

    return `${day}, ${date} ${month}`;
  };

  return (
    <div>
      <h3 className={styles.locationName}>{weatherName}</h3>
      <h4 className={styles.actualDate}>{showDate(new Date())}</h4>
    </div>
  );
};
export default LocationBox;
