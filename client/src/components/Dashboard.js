import React from 'react'
import BookList from './BookList';
import BookForm from './BookForm';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <BookList />
        <BookForm />
      </div>
    </div>
  )
}

export default Dashboard
