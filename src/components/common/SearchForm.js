import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchGeolocation } from '../../redux/geolocationRedux';
import StyledButton from '../styled-components/StyledButton';
import StyledInput from '../styled-components/StyledInput';

const SearchForm = (props) => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (cityName !== '') {
      dispatch(fetchGeolocation(cityName));
    }
  };

  return (
    <Form className={props.className}>
      <StyledInput action={setCityName} />
      <StyledButton onClick={handleSearch}>
        <i className='fa fa-search'></i>
      </StyledButton>
    </Form>
  );
};
export default SearchForm;
