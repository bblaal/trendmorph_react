import React from 'react';
import { FaTh, FaList, FaFilter } from 'react-icons/fa';
import './CatalogHeader.css';

const CatalogHeader = ({ onViewChange, showFilterOnMobile }) => {
    
    return (
        <div className="catalog-header">
            {/* Sort Dropdown */}
            <div className="filter-toggle" onClick={showFilterOnMobile}>
                <p>Show Filter </p><FaFilter className="view-icon"></FaFilter>
            </div>
            <div className="sort-dropdown">
                <select>
                    <option value="default">Sort by Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest Arrivals</option>
                </select>
            </div>

            {/* View Icons */}
            <div className="view-icons">
                <FaTh className="view-icon" onClick={() => onViewChange('grid')} />
                <FaList className="view-icon" onClick={() => onViewChange('list')} />
            </div>
        </div>
    );
};

export default CatalogHeader;
