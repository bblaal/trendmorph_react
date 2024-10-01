import React, { useState } from 'react';
import Slider from "react-slick";
import './ProductModal.css';

// Sample product modal with image slider and product details
const ProductModal = ({ product, onClose }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    const handleColorChange = (e) => setSelectedColor(e.target.value);
    const handleSizeChange = (e) => setSelectedSize(e.target.value);
    const handleQuantityChange = (type) => {
        if (type === 'increment') setQuantity((prev) => prev + 1);
        if (type === 'decrement' && quantity > 1) setQuantity((prev) => prev - 1);
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>✕</button>
                <div className="modal-body">
                    {/* Left Section: Image Slider */}
                    <div className="modal-left">
                        <Slider {...sliderSettings}>
                            {product.images.map((img, index) => (
                                <div key={index}>
                                    <img src={img} alt={`Slide ${index}`} className="slider-image" />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Right Section: Product Details */}
                    <div className="modal-right">
                        <div className="product-details">
                            <h2>{product.name}</h2>
                            <p className="price">$29.99</p>
                            <div className="tags">
                                <p> 220 GSM, 100% Cotton, Super Combed, Pre Shrunk, Bio Washed, Collar and Cuff, Unisex Regular Fit</p>
                            </div>
                            <div className="quality">
                                <p><strong>Quality:</strong> The Custom Polo T-Shirts are double-stitched using state-of-the-art machines in-house using premium quality brushed fleece 220 GSM, Airtex fabrics.</p>
                            </div>

                            {/* Color Selection */}
                            <div className="color-selection">
                                <h4>Color:</h4>
                                <label>
                                    <input type="radio" name="color" value="Red" onChange={handleColorChange} /> Red
                                </label>
                                <label>
                                    <input type="radio" name="color" value="Blue" onChange={handleColorChange} /> Blue
                                </label>
                                <label>
                                    <input type="radio" name="color" value="Black" onChange={handleColorChange} /> Black
                                </label>
                            </div>

                            {/* Size Selection */}
                            <div className="size-selection">
                                <h4>Size:</h4>
                                <label>
                                    <input type="radio" name="size" value="S" onChange={handleSizeChange} /> S
                                </label>
                                <label>
                                    <input type="radio" name="size" value="M" onChange={handleSizeChange} /> M
                                </label>
                                <label>
                                    <input type="radio" name="size" value="L" onChange={handleSizeChange} /> L
                                </label>
                                <label>
                                    <input type="radio" name="size" value="XL" onChange={handleSizeChange} /> XL
                                </label>
                                <label>
                                    <input type="radio" name="size" value="XXL" onChange={handleSizeChange} /> XXL
                                </label>
                            </div>

                            {/* Quantity Selection */}
                            <div className="quantity-selection">
                                <h4>Quantity:</h4>
                                <button onClick={() => handleQuantityChange('decrement')}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => handleQuantityChange('increment')}>+</button>
                            </div>

                            {/* Wishlist & Cart Buttons */}
                            <div className="action-buttons">
                                <button className="wishlist-btn">Add to Wishlist</button>
                                <button className="cart-btn">Add to Cart</button>
                                <button className="buy-btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
