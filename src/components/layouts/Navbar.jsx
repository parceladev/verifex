// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between text-white w-full px-10 py-6 bg-[#1b1b1b]">
      <div className="logo ">
        <a href="">Verifex</a>
      </div>
      <div className="flex gap-36">
        <div className="flex gap-8 navLink">
          <li>
            <a href="/user/home">Home</a>
          </li>
          <li>
            <a href="/user/legit-check">Legit Check</a>
          </li>
          <li>
            <a href="/user/about">About</a>
          </li>
        </div>
        <div className="flex gap-8 auth">
          <li>
            <a href="/auth/sign-up">Sign Up</a>
          </li>
          <li>
            <a href="/auth/sign-in">Sign In</a>
          </li>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Navbar.displayName = './Navbar.jsx';

export default Navbar;
