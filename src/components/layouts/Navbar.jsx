// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '/src/assets/user/navbar/verifex 1.png'
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { BiGlobe } from 'react-icons/bi'; //BiGlobe for the globe icon
import { IoMdMoon, IoMdSunny } from 'react-icons/io'; // IoMdMoon and IoMdSunny for dark/light icons
import './Navbar.css'; // Import CSS file for custom styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Default language
  const [selectedTheme, setSelectedTheme] = useState('light'); // Default theme

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Logic to change language
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    // Logic to change theme
  };

  const routes = [
    { path: '/', name: 'Home' },
    { path: '/legit-check', name: 'Legit Check' },
    { path: '/about', name: 'About' },
    { path: '/auth/sign-up', name: 'Sign Up' },
  ];

  return (
    <div className="relative">
      <div className="fixed z-[100] flex items-center flex-row-reverse lg:flex-row border-b top-0 left-0 border-slate-200 justify-between w-full px-10 py-2 bg-primary">
        <div className="logo">
          <a href="#">
            <img className="w-32 h-10 " src={logo} alt="Verifex" />
          </a>
        </div>
        <div className="hiden lg:flex items-center space-x-32">
          {routes.map((route) => (
            <Link key={route.path} to={route.path}>
              {route.name}
            </Link>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className={`menu-icon text-4xl lg:hidden ${isMenuOpen ? 'open' : ''}`}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <div
          className={`absolute top-14 bg-primary w-full left-0 px-5 ${
            isMenuOpen ? 'flex flex-wrap' : 'hidden'
          } lg:hidden`}
        >
          {routes.map((route) => (
            <Link
              className="block w-full py-5"
              key={route.path}
              to={route.path}
              onClick={toggleMenu}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="fixed w-full z-0 hidden pt-16 shadow-md lg:flex items-center justify-end bg-primary space-x-4">
        <div className="dropdown flex p-4">
          <BiGlobe className="text-xl cursor-pointer" />
          {/* Language Dropdown */}
          <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
            <option value="EN">EN</option>
            <option value="ID">ID</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        <div className="dropdown flex pr-5">
          <IoMdSunny className="text-xl cursor-pointer" />
          {/* Theme Dropdown */}
          <select value={selectedTheme} onChange={(e) => handleThemeChange(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;
