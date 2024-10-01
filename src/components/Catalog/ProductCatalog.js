import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CatalogSidebar from './CatalogSidebar';
import CatalogHeader from './CatalogHeader';
import CatalogGrid from './CatalogGrid';
import './ProductCatalog.css';

const ProductCatalog = () => {
    const location = useLocation();
    const { selectedCategory } = location.state || {}; // Get the selected category from state

    const [view, setView] = useState('grid');
    const [showFilter, setShowFilter] = useState(false);

    const handleViewChange = (viewType) => {
        setView(viewType);
    };

    const showFilterOnMobile = () => {
        console.log("executed");
        setShowFilter(!showFilter);
    };

    const toggleFilter = (value) => {
        console.log(value);
        setShowFilter(value);
    };

    return (
        <div className="product-catalog-container">
            {/* Sidebar */}
            <div className="sidebar-section">
                <CatalogSidebar showFilter={showFilter} toggleFilter={toggleFilter} />
            </div>

            {/* Main Catalog */}
            <div className="main-catalog-section">
                <CatalogHeader onViewChange={handleViewChange} showFilterOnMobile={showFilterOnMobile} />
                
                {/* Display selected category if available */}
                {selectedCategory && (
                    <h2>{selectedCategory.name}</h2>
                )}

                <CatalogGrid view={view} />
            </div>
        </div>
    );
};

export default ProductCatalog;
