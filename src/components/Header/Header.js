import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ActionIcons from "./ActionIcons";
import NavigationMenu from "./NavigationMenu";
import logo from '../../logo.svg';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <header className="header-container">
      {/* Hamburger Menu Icon for Mobile */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Navigation Menu */}
      <NavigationMenu menuOpen={menuOpen} />

      {/* Logo and Icons */}
      {!searchOpen && (
        <>
          <img src={logo} alt="logo" className="logo" />
          <ActionIcons toggleSearch={toggleSearch} />
        </>
      )}

      {/* Search Bar for Mobile */}
      {searchOpen && (
        <div className="search-bar-mobile">
          <input type="text" placeholder="Search Products..." />
          <FiX className="icon" onClick={toggleSearch} />
        </div>
      )}
    </header>
  );
};

export default Header;
