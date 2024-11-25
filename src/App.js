// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryCards from './components/Categories/Categories';
import ProductCatalog from './components/Catalog/ProductCatalog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ManageProduct from './components/Admin/ManageProduct'; // Adjust the import path as necessary
import AdminRoute from './components/Admin/AdminRoute'; // Adjust the import path as necessary
import { UserProvider } from './components/Contexts/UserContext';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<CategoryCards />} />
                    <Route path="/product-catalog" element={<ProductCatalog />} />
                    <Route path="/admin/manageProduct" element={<AdminRoute element={<ManageProduct />} />} />
                </Routes>
                <Footer />
            </Router>
        </UserProvider>
    );
};

export default App;
