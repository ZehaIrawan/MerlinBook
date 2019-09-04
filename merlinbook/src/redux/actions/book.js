import axios from 'axios';
import { setAlert } from './alert';
import {
  ADD_BOOK,
  BOOK_ERROR,
  DELETE_BOOK,
  GET_BOOKS,
  UPDATE_BOOK,
} from './types';

// Get books
export const getBooks = () => async dispatch => {
  try {
    const res = await axios.get('/api/books');

    dispatch({
      type: GET_BOOKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete book
export const deleteBook = id => async dispatch => {
  try {
    await axios.delete(`/api/books/${id}`);

    dispatch({
      type: DELETE_BOOK,
      payload: id,
    });

    dispatch(setAlert('Book Removed', 'success'));
  } catch (err) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Book
export const addBook = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/books', formData, config);

    dispatch({
      type: ADD_BOOK,
      payload: res.data,
    });

    dispatch(setAlert('Book Created', 'success'));
  } catch (err) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update Book
export const updateBook = formData => async dispatch => {
  try {
    dispatch({
      type: UPDATE_BOOK,
      payload: formData,
    });
  } catch (err) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
