import { initialState } from '../../data';

const uuidv1 = require('uuid/v1');

const books = (state = initialState, action) => {
  switch (action.type) {
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
    case 'REMOVE_BOOK': {
      return state.filter(({ id }) => action.id !== id);
    }
    default:
      return state;
  }
};

export default books;
