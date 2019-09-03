import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import EditModal from '../components/modals/EditModal';
import Modal from '../components/modals/Modal';
import useEditModal from '../components/modals/useEditModal';
import useModal from '../components/modals/useModal';
import { deleteBook, getBooks } from '../redux/actions/book';
import Book from './Book';

const mapStateToProps = state => ({
  books: state.books,
  loading: state.loading,
});

const BookList = ({ getBooks, books, loading, deleteBook }) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  // console.log(books);
  const { isShowing, toggle } = useModal();
  const { isEditing, toggleEdit } = useEditModal();

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <button className="blue-button form-button bold" onClick={toggle}>
        Add Book
      </button>
      <button className="blue-button form-button bold" onClick={toggleEdit}>
        Edit Book
      </button>
      <Modal isShowing={isShowing} hide={toggle} />
      <EditModal isEditing={isEditing} hideEdit={toggleEdit} />
      <table className="books-table">
        <tbody>
          {books.books.map(book => (
            <Book
              key={book._id}
              id={book._id}
              title={book.title}
              author={book.author}
              category={book.category}
              percentage={(book.currentChapter / book.totalChapter).toFixed(1)* 100}
              deleteBook={deleteBook}
              // editBook={edit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// BookList.propTypes = {
//   books: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default connect(
  mapStateToProps,
  {
    getBooks,
    deleteBook,
  },
)(BookList);
