import React, { useState } from "react";
import { CiUser, CiHeart, CiShoppingCart, CiSearch } from "react-icons/ci";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import CartTooltip from './CartTooltip';
import logo from '../../logo.svg';
import './Header.css';

const Dropdown = ({ title, isOpen, toggleDropdown, children }) => (
  <div className="menu-item">
    <span onClick={toggleDropdown}>
      {title} {isOpen ? <FiChevronUp /> : <FiChevronDown />}
    </span>
    {isOpen && <div className="dropdown mobile open">{children}</div>}
  </div>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [trendmorphDropdownOpen, setTrendmorphDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // For cart tooltip
  const [loggedIn] = useState(true); // Assuming the user is logged in by default

  // Dummy cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'T-Shirt dafeaf fawf gqaf fqwf f  qwf fqwf',
      price: 25,
      quantity: 1,
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Sneakers',
      price: 75,
      quantity: 1,
      image: 'https://via.placeholder.com/50',
    },
  ]);

  const toggleSearch = () => setSearchOpen(!searchOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCart = () => setCartOpen(!cartOpen); // Toggle cart tooltip

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
    setTrendmorphDropdownOpen(false); // Close Trendmorph when Shop is opened
  };

  const toggleTrendmorphDropdown = () => {
    setTrendmorphDropdownOpen(!trendmorphDropdownOpen);
    setShopDropdownOpen(false); // Close Shop when Trendmorph is opened
  };

  // Cart item handlers
  const handleAddItem = (item) => {
    const updatedCart = cartItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.map(cartItem =>
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedCart);
  };

  const handleDeleteItem = (item) => {
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  return (
    <header className="header-container">
      {/* Hamburger Menu Icon for Mobile */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Navigation Menu */}
      <nav className={`nav ₹{menuOpen ? "open" : ""}`}>
        <Dropdown
          title="SHOP"
          isOpen={shopDropdownOpen}
          toggleDropdown={toggleShopDropdown}
        >
          <div className="column">
            <h4>Apparels</h4>
            <ul>
              <li>Men's Collection</li>
              <li>Women's Collection</li>
              <li>Shop fullwidth</li>
              <li>Shop top banner</li>
              <li>Shop image categories</li>
              <li>Shop listview</li>
            </ul>
          </div>
          <div className="column">
            <h4>Accessories</h4>
            <ul>
              <li>Product Vertical</li>
              <li>Product Horizontal</li>
              <li>Product Grid</li>
              <li>Product Sticky Info</li>
            </ul>
          </div>
          <div className="column">
            <h4>Decoration Items</h4>
            <ul>
              <li>Simple Product</li>
              <li>Variable Product</li>
              <li>Grouped Product</li>
              <li>Sale Product</li>
              <li>Product Countdown</li>
            </ul>
          </div>
        </Dropdown>

        <Dropdown
          title="TRENDMORPH"
          isOpen={trendmorphDropdownOpen}
          toggleDropdown={toggleTrendmorphDropdown}
        >
          <ul>
            <li>FAQ</li>
            <li>Get in Touch</li>
            <li>About Us</li>
          </ul>
        </Dropdown>

        <div className="menu-item">PRINT YOUR DESIGN</div>
        <div className="menu-item">LOG IN</div>
      </nav>

      {/* Logo and Icons */}
      {!searchOpen && (
        <>
          <img src={logo} alt="logo" className="logo" />

          <div className="action-icons">
            <div className="search-bar">
              <input type="text" placeholder="Search Products..." />
              <CiSearch className="icon" />
            </div>

            <div className="search-bar-mobile">
              <CiSearch className="icon" onClick={toggleSearch} />
            </div>

            {loggedIn && <CiUser className="icon" title="Account" />}
            {loggedIn && <CiHeart className="icon" title="Wishlist" />}
            <CiShoppingCart className="icon" title="Cart" onClick={() => setCartOpen(!cartOpen)} />
            {cartOpen && (
              <CartTooltip
                cartItems={cartItems}
                onAdd={handleAddItem}
                onRemove={handleRemoveItem}
                onDelete={handleDeleteItem}
                onClose={() => setCartOpen(false)}
              />
            )}
          </div>
        </>
      )}

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
