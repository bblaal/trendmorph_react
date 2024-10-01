import React, { useState } from 'react';
import './CatalogGrid.css';
import ProductModal from './ProductModal'; // Import the modal component
import image1 from '../../assets/images/Picture 2.png';
import image2 from '../../assets/images/Picture 3.png';
import image3 from '../../assets/images/Picture 4.png';
import image4 from '../../assets/images/Picture 1.png';

const products = [
    {
        id: 1,
        name: 'Mens T-shirt',
        images: [image1, image2, image3], // Multiple images for slider
    },
    {
        id: 2,
        name: 'Baby T-shirt',
        images: [image3, image2, image1], // Multiple images for slider
    },
    {
        id: 3,
        name: 'Hoodie T-shirt',
        images: [image2, image1, image3], // Multiple images for slider
    },
    {
        id: 4,
        name: 'Womens T-shirt',
        images: [image4, image2, image3], // Multiple images for slider
    }
];

const CatalogGrid = ({ view }) => {
    const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product modal

    const handleProductClick = (product) => {
        setSelectedProduct(product); // Open modal for selected product
    };

    const closeModal = () => {
        setSelectedProduct(null); // Close the modal
    };

    return (
        <>
            <div className={`catalog-grid ${view === 'list' ? 'list-view' : 'grid-view'}`}>
                {products.map((product) => (
                    <div
                        className="product-card"
                        key={product.id}
                        onClick={() => handleProductClick(product)} // Open modal on product click
                    >
                        <h3>{product.name}</h3>
                        {/* Display first image in the product's image array */}
                        <img src={product.images[0]} alt={product.name} />
                        <div className="product-info">
                            <div className="select-btn-container">
                                <button
                                    className="select-btn"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent modal opening when button is clicked
                                        handleProductClick(product); // Trigger modal for this product
                                    }}
                                >
                                    Select Option
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Render the product modal */}
            {selectedProduct && (
                <ProductModal 
                    product={selectedProduct} 
                    onClose={closeModal} 
                />
            )}
        </>
    );
};

export default CatalogGrid;
