import React, { useEffect, useRef } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import './CartTooltip.css';

const CartTooltip = ({ cartItems, onAdd, onRemove, onDelete, onClose }) => {

    const tooltipRef = useRef();
    // Close tooltip on clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const totalCartValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="cart-tooltip" ref={tooltipRef}>
            <FiX className="close-icon" onClick={onClose} />
            {cartItems.length === 0 ? (
                <div className="empty-cart">Your cart is empty</div>
            ) : (
                cartItems.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-price">₹{item.price}</div>
                        </div>
                        <div className="cart-item-controls">
                            <button onClick={() => onRemove(item)}>
                                <FaMinus />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => onAdd(item)}>
                                <FaPlus />
                            </button>
                        </div>
                        <button className="cart-item-delete" onClick={() => onDelete(item)}>
                            <FaTrash />
                        </button>
                    </div>
                ))
            )}
            {/* Display Total Cart Value */}
          <div className="cart-total">
            <strong>Total:  </strong> ₹ {totalCartValue}
          </div>
                    {/* Checkout Button */}
            {cartItems.length > 0 && <button className="checkout-button">Proceed to Checkout</button>}
        </div>
    );
};

export default CartTooltip;
