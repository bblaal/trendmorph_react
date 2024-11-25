import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Dropdown = ({ title, isOpen, toggleDropdown, children }) => (
  <div className="menu-item">
    <span onClick={toggleDropdown}>
      {title} {isOpen ? <FiChevronUp /> : <FiChevronDown />}
    </span>
    {isOpen && <div className="dropdown mobile open">{children}</div>}
  </div>
);

export default Dropdown;
