const uuidv1 = require('uuid/v1');

export const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

export const initialState = [
  {
    id: uuidv1(),
    title: 'The Great Gatsby',
    category: 'Action',
    author: 'F. Scott Fitzgerald',
    percentage: '70',
  },
  {
    id: uuidv1(),
    title: 'The Grapes of Wrath',
    category: 'Action',
    author: 'John Steinbeck',
    percentage: '100',
  },
  {
    id: uuidv1(),
    title: 'Nineteen Eighty-Four',
    category: 'Sci-Fi',
    author: 'George Orwell',
    percentage: '45',
  },
];
