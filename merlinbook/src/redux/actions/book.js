import axios from 'axios';
import { setAlert } from './alert';
import {
  ADD_BOOK,
  ADD_COMMENT,
  BOOK_ERROR,
  DELETE_BOOK,
  GET_BOOK,
  GET_BOOKS,
  REMOVE_COMMENT,
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

// Delete post
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

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get post
export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(`/api/books/${id}`);

    dispatch({
      type: GET_BOOK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add comment
export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `/api/books/comment/${postId}`,
      formData,
      config,
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    await axios.delete(`/api/books/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
