import {
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  GET_BOOKS,
  UPDATE_BOOK,
} from '../actions/types';

const initialState = {
  books: [],
  book: [],
  loading: true,
  error: {},
};

const books = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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
    case EDIT_BOOK:
      return {
        ...state,
        book: [payload],
        loading: false,
      };
    case GET_BOOKS:
      return { ...state, books: payload, loading: false };
    case UPDATE_BOOK:
      return { ...state, books: [...state.books, payload], loading: false };
    // return {
    //   ...state,
    //   books: [
    //     state.books.map((item, index) => {
    //       // Find the item with the matching id
    //       if (item.id === payload.id) {
    //         // Return a new object
    //         return {
    //           ...item, // copy the existing item
    //           title: payload.title, // replace the email addr
    //         };
    //       }

    //       // Leave every other item unchanged
    //       return item;
    //     }),
    //   ],
    //   loading: false,
    // };

    default:
      return state;
  }
};

export default books;
