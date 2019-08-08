import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
import alert from './alert'

export default combineReducers({
  books,
  filter,
  alert,
});
