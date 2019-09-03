export const createBook = books => ({
  type: 'CREATE_BOOK',
  books,
});

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

export default createBook;
