import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/modals/Modal';
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

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <button className="blue-button form-button bold" onClick={toggle}>
        Add Book
      </button>
      <Modal isShowing={isShowing} hide={toggle} />
      <table className="books-table">
        <tbody>
          {books.books.map(book => (
            <Book
              key={book._id}
              id={book._id}
              title={book.title}
              author={book.author}
              category={book.category}
              percentage={(book.currentChapter / book.totalChapter) * 100}
              deleteBook={deleteBook}
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
