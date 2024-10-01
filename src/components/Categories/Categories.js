import React from 'react';
import './Categories.css';

// Importing images for categories
// import mensTshirtImg from '../../assets/images/mens-tshirt.jpg';
// import mensHoodieImg from '../../assets/images/mens-hoodie.jpg';
// import womensTshirtImg from '../../assets/images/womens-tshirt.jpg';
// import womensHoodieImg from '../../assets/images/womens-hoodie.jpg';
// import toteBagImg from '../../assets/images/tote-bag.jpg';
// import tumblerBottleImg from '../../assets/images/tumbler-bottle.jpg';
// import coffeeMugImg from '../../assets/images/coffee-mug.jpg';
// import notebookImg from '../../assets/images/notebook.jpg';

// Data for categories
const categories = [
    { name: "Men's Tshirt", image: '', link: "#mens-tshirt" },
    { name: "Men's Hoodie", image: 'mensHoodieImg', link: "#mens-hoodie" },
    { name: "Women's Tshirt", image: 'womensTshirtImg', link: "#womens-tshirt" },
    { name: "Women's Hoodie", image: 'womensHoodieImg', link: "#womens-hoodie" },
    { name: "Tote Bag", image: 'toteBagImg', link: "#tote-bag" },
    { name: "Tumbler Bottle", image: 'tumblerBottleImg', link: "#tumbler-bottle" },
    { name: "Coffee Mug", image: 'coffeeMugImg', link: "#coffee-mug" },
    { name: "Notebook", image: 'notebookImg', link: "#notebook" }
];

const CategoryCards = () => {
    return (
        <div className="category-cards-container">
            {categories.map((category, index) => (
                <div 
                    key={index} 
                    className="category-card" 
                    onClick={() => window.location.href = category.link} // Click action
                >
                    <img src={category.image} alt={category.name} />
                </div>
            ))}
        </div>
    );
};

export default CategoryCards;
