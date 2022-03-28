import { Form } from 'react-bootstrap';

const Input = (props) => {
  return (
    <Form.Control
      as='input'
      size='lg'
      type='text'
      className={props.className}
      placeholder='Write city name'
      onChange={(e) => props.action(e.target.value)}
    />
  );
};

export default Input;
