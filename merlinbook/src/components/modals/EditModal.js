import React from 'react';
import ReactDOM from 'react-dom';
import { categories } from '../../data';

const EditModal = ({ isEditing, hideEdit }) =>
  // const [title, setTitle] = useState('');
  // const [category, setCategory] = useState('Action');

  // const handleInputChange = e => setTitle(e.target.value);
  // const handleSelectChange = e => setCategory(e.target.value);

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   addBook(title, category);
  //   setTitle('');
  //   setCategory('Action');

  isEditing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hideEdit}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
                <label htmlFor="title" id="titleLabel">
                  Title:
                  <input
                    type="text"
                    name="title"
                    id="title"
                    // onChange={handleInputChange}
                    // value={title}
                    required
                  />
                </label>
                <label htmlFor="categories" id="categoriesLabel">
                  Category:
                  <select id="categories">
                    {categories.map(c => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <label htmlFor="author" id="authorLabel">
                  Author:
                  <input
                    type="text"
                    name="author"
                    id="author"
                    // onChange={handleInputChange}
                    // value={title}
                    required
                  />
                </label>
                <label htmlFor="totalChapter" id="totalChapterLabel">
                  Total Chapter:
                  <input
                    type="text"
                    name="totalChapter"
                    id="totalChapter"
                    // onChange={handleInputChange}
                    // value={title}
                    required
                  />
                </label>
                <label htmlFor="currentChapter" id="currentChapterLabel">
                  Current Chapter:
                  <input
                    type="text"
                    name="currentChapter"
                    id="currentChapter"
                    // onChange={handleInputChange}
                    // value={title}
                    required
                  />
                </label>
                <button className="blue-button form-button bold" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </React.Fragment>,
        document.body,
      )
    : null;

export default EditModal;
