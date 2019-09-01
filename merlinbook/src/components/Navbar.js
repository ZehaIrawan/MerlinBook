import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h1 className="nav-h1">Bookstore CMS</h1>
      </Link>
      <Link to="/books">
        <h2>Books</h2>
      </Link>
      <Link to="/register">
        <h2>Register</h2>
      </Link>
      <Link to="/login">
        <h2>Login</h2>
      </Link>
      <Link to="/categories">
        <h2>Categories</h2>
      </Link>
      <div>
        <i className="profile-icon fas fa-user" />
      </div>
    </nav>
  );
};

export default Navbar;
