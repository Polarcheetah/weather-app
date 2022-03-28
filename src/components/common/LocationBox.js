import { useSelector } from 'react-redux';
import showDate from '../../utils/showDate';

const LocationBox = (props) => {
  const weatherName = useSelector((state) => state.currentWeather.data.name);

  return (
    <div className={props.className}>
      <h3>{weatherName}</h3>
      <h4>{showDate(new Date())}</h4>
    </div>
  );
};
export default LocationBox;
