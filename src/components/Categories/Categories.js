import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';
import Slider from '../Slider/Slider'
import image1 from '../../assets/images/Picture 2.png';
import image2 from '../../assets/images/Picture 3.png';
import image3 from '../../assets/images/Picture 4.png';
import image4 from '../../assets/images/Picture 1.png';


// Data for categories
const categories = [
    { name: "Men's Tshirt", image: image1, link: "/product-catalog", state: { selectedCategory: { name: "Men's Tshirt" } } },
    { name: "Men's Hoodie", image: image2, link: "/product-catalog", state: { selectedCategory: { name: "Men's Hoodie" } } },
    { name: "Women's Tshirt", image: image3, link: "/product-catalog", state: { selectedCategory: { name: "Women's Tshirt" } } },
    { name: "Women's Hoodie", image: image4, link: "/product-catalog", state: { selectedCategory: { name: "Women's Hoodie" } } },
    { name: "Tote Bag", image: image1, link: "/product-catalog", state: { selectedCategory: { name: "Tote Bag" } } },
    { name: "Tumbler Bottle", image: image2, link: "/product-catalog", state: { selectedCategory: { name: "Tumbler Bottle" } } },
    { name: "Coffee Mug", image: image3, link: "/product-catalog", state: { selectedCategory: { name: "Coffee Mug" } } },
    { name: "Notebook", image: image4, link: "/product-catalog", state: { selectedCategory: { name: "Notebook" } } },
];

const CategoryCards = () => {
    const navigate = useNavigate(); // Use useNavigate hook for navigation

    return (
        <>
        <Slider />
        <div className="category-cards-container">
            {categories.map((category, index) => (
                <div 
                    key={index} 
                    className="category-card" 
                    onClick={() => navigate(category.link, { state: category.state })} // Use navigate to go to the product catalog with state
                >
                    <img src={category.image} alt={category.name} />
                    <h3>{category.name}</h3> {/* Added name display for clarity */}
                </div>
            ))}
        </div>
        </>
    );
};

export default CategoryCards;
