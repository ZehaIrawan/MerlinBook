import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav>
      <Link to="/books">
        <h2>Books</h2>
      </Link>

      <Link to="/login">
        <h2 onClick={logout}>Logout</h2>
      </Link>

      <Link to="/categories">
        <h2>Categories</h2>
      </Link>
      <div>
        <i className="profile-icon fas fa-user" />
      </div>
    </nav>
  );

  const guestLinks = (
    <nav>
      <Link to="/register">
        <h2 className="title-nav">Register</h2>
      </Link>
      <Link className="title-nav" to="/login">
        <h2>Login</h2>
      </Link>
      <div>
        <i className="profile-icon fas fa-user" />
      </div>
    </nav>
  );

  return (
    <nav>
      <h1>
        <Link to="/">
          <h1>Bookstore CMS</h1>
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logout },
)(Navbar);
