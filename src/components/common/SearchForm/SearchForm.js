import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchGeolocation } from '../../../redux/geolocationRedux';
import Button from '../Button/Button';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchGeolocation(cityName));
  };

  return (
    <div className={styles.searchForm}>
      <Form.Control
        as='input'
        size='lg'
        type='text'
        bg='dark'
        placeholder='Write city name'
        className={styles.textInput}
        onChange={(e) => setCityName(e.target.value)}
      />

      <Button onClick={handleSearch}>
        <i className='fa fa-search'></i>
      </Button>
    </div>
  );
};
export default SearchForm;
