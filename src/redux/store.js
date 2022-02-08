import { createStore } from 'redux';
import initialState from './initialState';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_DATA':
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
