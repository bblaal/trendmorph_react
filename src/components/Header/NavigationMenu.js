import React, { useState, useContext } from "react";
import Dropdown from "./Dropdown";
import LoginTooltip from "../Login/LoginToolTip";
import { UserContext } from "../Contexts/UserContext";

const NavigationMenu = ({ menuOpen }) => {
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [trendmorphDropdownOpen, setTrendmorphDropdownOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const { handleLogin } = useContext(UserContext); // Access handleLogin from UserContext

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
    setTrendmorphDropdownOpen(false);
  };

  const toggleTrendmorphDropdown = () => {
    setTrendmorphDropdownOpen(!trendmorphDropdownOpen);
    setShopDropdownOpen(false);
  };

  const onLoggedIn = (email) => {
    handleLogin(email); // Call handleLogin from UserContext
    setLoggedIn(true);
  };

  return (
    <nav className={`nav ${menuOpen ? "open" : ""}`}>
      <Dropdown title="SHOP" isOpen={shopDropdownOpen} toggleDropdown={toggleShopDropdown}>
        <div className="column">
          <h4>Apparels</h4>
          <ul>
            <li>Men's Collection</li>
            <li>Women's Collection</li>
          </ul>
        </div>
        <div className="column">
          <h4>Accessories</h4>
          <ul>
            <li>Product Vertical</li>
          </ul>
        </div>
      </Dropdown>

      <Dropdown title="TRENDMORPH" isOpen={trendmorphDropdownOpen} toggleDropdown={toggleTrendmorphDropdown}>
        <ul>
          <li>FAQ</li>
          <li>About Us</li>
        </ul>
      </Dropdown>

      <div className="menu-item">PRINT YOUR DESIGN</div>

      {!loggedIn && <div className="menu-item" onClick={() => setLoginOpen(!loginOpen)}>LOG IN</div>}
      {loginOpen && !loggedIn && (
        <LoginTooltip onClose={() => setLoginOpen(false)} onLoggedIn={onLoggedIn} />
      )}

      {loggedIn && <div className="menu-item" onClick={() => setLoggedIn(false)}>LOG OUT</div>}
    </nav>
  );
};

export default NavigationMenu;
