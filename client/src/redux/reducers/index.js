import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
import alert from './alert'
import auth from './auth'

export default combineReducers({
  books,
  filter,
  alert,
  auth
});
