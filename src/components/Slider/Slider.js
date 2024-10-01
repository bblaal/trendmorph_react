import React, { useState, useEffect } from 'react';
import './Slider.css';
import Image_One from '../../assets/images/Picture 2.png'
import Image_Two from '../../assets/images/Picture 3.png'
import Image_Three from '../../assets/images/Picture 1.png'

// Dummy Slider Data
const sliderData = [
    {
        image: Image_One,
        title: "The leader in quality custom T-Shirts",
        description: "Discover the latest trends in fashion and lifestyle.",
        buttonLabel: "Shop Now",
        buttonLink: "#shop"
    },
    {
        image: Image_Two,
        title: "Design images are just got easy",
        description: "Check out our new collections and styles for this season.",
        buttonLabel: "Explore",
        buttonLink: "#new-arrivals"
    },
    {
        image: Image_Three,
        title: "Create custom products that reflects you",
        description: "Limited time offers on selected fashion products.",
        buttonLabel: "Get Offer",
        buttonLink: "#offers"
    }
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
        }, 5000); // 5 seconds per slide

        return () => clearInterval(timer);
    }, []);
    
    return (
        <div className="slider-container">
            {sliderData.map((slide, index) => (
                <div 
                    className={`slider-slide ${index === currentIndex ? "active" : ""}`} 
                    key={index} 
                >
                    {/* Text content on the left */}
                    <div className="slider-content">
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                        <a href={slide.buttonLink} className="slider-button">{slide.buttonLabel}</a>
                    </div>

                    {/* Image on the right */}
                    <div className="slider-image-container">
                        <img src={slide.image} alt={`Slide ${index + 1}`} />
                    </div>

                    {/* Geometrical shapes */}
                    <div className="floating-shapes">
                        <div className="shape shape-circle"></div>
                        <div className="shape shape-circle-2"></div>
                        <div className="shape shape-triangle"></div>
                        <div className="shape shape-triangle-2"></div>
                        <div className="shape shape-zoom-in-out-circle-1"></div>
                        <div className="shape shape-zoom-in-out-circle-2"></div>
                        <div className="shape shape-zoom-in-out-circle-3"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider;
