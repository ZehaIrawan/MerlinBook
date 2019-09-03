import { ADD_BOOK, DELETE_BOOK } from '../actions/types';

const initialState = {
  books: [],
  loading: true,
  error: {},
};

const uuidv1 = require('uuid/v1');

const books = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CREATE_BOOK': {
      const book = {
        id: uuidv1(),
        title: action.title,
        category: action.category,
        author: 'Unknown',
        percentage: '0',
      };
      return [...state, book];
    }
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book._id !== payload),
        loading: false,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [payload, ...state.books],
        loading: false,
      };
    case 'GET_BOOKS':
      return { ...state, books: payload, loading: false };
    default:
      return state;
  }
};

export default books;
