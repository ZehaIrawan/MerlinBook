import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { categories } from '../data';
import { addBook } from '../redux/actions/book';

const BookForm = ({ addBook }) => {
  // const [title, setTitle] = useState('');
  // const [category, setCategory] = useState('Action');

  const [formData, setFormData] = useState({
    title: '',
    category: 'Action',
    author: '',
    totalChapter: '',
    currentChapter: '',
  });

  const { title, category, author, totalChapter, currentChapter } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleInputChange = e => setTitle(e.target.value);
  // const handleSelectChange = e => setCategory(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    console.log(title, category, author, totalChapter, currentChapter);
    addBook(formData);
    // setTitle('');
    // setCategory('Action');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title" id="titleLabel">
        Title:
        <input
          type="text"
          name="title"
          id="title"
          onChange={e => onChange(e)}
          value={title}
          required
        />
      </label>
      <label htmlFor="categories" id="categoriesLabel">
        Category:
        <select id="categories" onChange={e => onChange(e)}>
          {categories.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="title" id="titleLabel">
        Author:
        <input
          type="text"
          name="author"
          onChange={e => onChange(e)}
          value={author}
          required
        />
      </label>

      <label htmlFor="title" id="titleLabel">
        Total Chapter:
        <input
          type="text"
          name="totalChapter"
          onChange={e => onChange(e)}
          value={totalChapter}
          required
        />
      </label>

      <label htmlFor="title" id="titleLabel">
        Current Chapter:
        <input
          type="text"
          name="currentChapter"
          onChange={e => onChange(e)}
          value={currentChapter}
          required
        />
      </label>

      <button className="blue-button form-button bold" type="submit">
        Add Book
      </button>
    </form>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addBook },
)(BookForm);
