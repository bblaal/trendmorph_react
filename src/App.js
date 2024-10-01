import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryCards from './components/Categories/Categories';
import ProductCatalog from './components/Catalog/ProductCatalog'; // Adjust the import path as necessary
import Header from './components/Header/Header'; // Adjust the import path as necessary
import Footer from './components/Footer/Footer'; // Adjust the import path as necessary
import Slider from './components/Slider/Slider'

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<CategoryCards />} />
                <Route path="/product-catalog" element={<ProductCatalog />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
