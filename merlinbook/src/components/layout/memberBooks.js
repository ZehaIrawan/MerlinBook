import React from 'react';
import BookList from '../BookList';
import Navbar from '../Navbar';

const memberBooks = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <BookList />
      </div>
    </div>
  );
};

export default memberBooks;
