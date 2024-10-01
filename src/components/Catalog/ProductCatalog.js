import React, { useState } from 'react';
import CatalogSidebar from './CatalogSidebar';
import CatalogHeader from './CatalogHeader';
import CatalogGrid from './CatalogGrid';
import './ProductCatalog.css';

const ProductCatalog = () => {
    const [view, setView] = useState('grid');
    const [showFilter, setShowFilter] = useState(false)

    const handleViewChange = (viewType) => {
        setView(viewType);
    };

    const showFilterOnMobile = () => {
        console.log("executed")
        setShowFilter(!showFilter)
    }

    const toggleFilter = (value) => {
        console.log(value)
        setShowFilter(value)
    }
    return (
        <div className="product-catalog-container">
            {/* Sidebar */}
            <div className="sidebar-section">
                <CatalogSidebar showFilter={showFilter} toggleFilter={toggleFilter}/>
            </div>

            {/* Main Catalog */}
            <div className="main-catalog-section">
                <CatalogHeader onViewChange={handleViewChange} showFilterOnMobile={showFilterOnMobile}/>
                <CatalogGrid view={view} />
            </div>
        </div>
    );
};

export default ProductCatalog;
