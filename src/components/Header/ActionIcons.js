import React, { useState, useContext } from "react";
import { CiUser, CiHeart, CiShoppingCart, CiSearch } from "react-icons/ci";
import CartTooltip from './CartTooltip';
import { UserContext } from "../Contexts/UserContext";

const ActionIcons = ({ toggleSearch }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const { currentUser } = useContext(UserContext);
  console.log('action: ', currentUser)


  // Dummy cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'T-Shirt',
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

  const handleAddItem = (item) => {
    const updatedCart = cartItems.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.map(cartItem =>
      cartItem.id === item.id && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedCart);
  };

  const handleDeleteItem = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="action-icons">
      {/* Search */}
      <div className="search-bar">
        <input type="text" placeholder="Search Products..." />
        <CiSearch className="icon" />
      </div>

      <div className="search-bar-mobile">
        <CiSearch className="icon" onClick={toggleSearch} />
      </div>

      {/* Icons */}
      {currentUser?.email && <CiUser className="icon" title="Account" />}
      {currentUser?.email  && <CiHeart className="icon" title="Wishlist" />}
      
      {/* Cart */}
      <div className="cart-icon-container">
        <CiShoppingCart className="icon" title="Cart" onClick={() => setCartOpen(!cartOpen)} />
        {totalCartItems > 0 && <span className="cart-badge">{totalCartItems}</span>}
      </div>
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
  );
};

export default ActionIcons;
