// import React from 'react';
// import './CatalogSidebar.css';

// const CatalogSidebar = ({ showFilter }) => {
//     console.log(showFilter)

//     return (
//         <div className={`catalog-sidebar ${showFilter ? 'active' : ''}`}>
//             {/* Search Box */}
//             <div className="search-box card">
//                 <input type="text" placeholder="Search Products..." />
//             </div>

//             {/* Category Filter */}
//             <div className="category-filter card">
//                 <h3>Filter by Category</h3>
//                 <select>
//                     <option value="all">All Categories</option>
//                     <option value="mens-tshirt">Mens T-shirt</option>
//                     <option value="mens-hoodie">Mens Hoodie</option>
//                     <option value="womens-tshirt">Womens T-shirt</option>
//                     <option value="womens-hoodie">Womens Hoodie</option>
//                     <option value="tote-bag">Tote Bag</option>
//                     <option value="tumbler-bottle">Tumbler Bottle</option>
//                     <option value="coffee-mug">Coffee Mug</option>
//                     <option value="notebook">Notebook</option>
//                 </select>
//             </div>

//             {/* Price Filter */}
//             <div className="price-filter card">
//                 <h3>Filter by Price</h3>
//                 <input type="range" min="0" max="500" step="10" />
//                 <div className="price-range">
//                     <span>$0</span>
//                     <span>$500</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CatalogSidebar;




import React, { useEffect } from 'react';
import './CatalogSidebar.css';
import { CiSearch } from 'react-icons/ci';

const CatalogSidebar = ({ showFilter, toggleFilter }) => {
    // Close sidebar on clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (showFilter && !event.target.closest('.catalog-sidebar')) {
                toggleFilter(false); // Close sidebar when clicked outside
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [showFilter, toggleFilter]);

    return (
        <>
            {/* Overlay for faded background */}
            {showFilter && <div className="sidebar-overlay" onClick={() => toggleFilter(false)}></div>}

            <div className={`catalog-sidebar ${showFilter ? 'active' : ''}`}>
                {/* Search Box */}
                <div className="search-box card">
                    <input type="text" placeholder="Search Products..." />
                    <CiSearch className="icon" />
                </div>

                {/* Category Filter */}
                <div className="category-filter card">
                    <h3>Filter by Category</h3>
                    <select>
                        <option value="all">All Categories</option>
                        <option value="mens-tshirt">Mens T-shirt</option>
                        <option value="mens-hoodie">Mens Hoodie</option>
                        <option value="womens-tshirt">Womens T-shirt</option>
                        <option value="womens-hoodie">Womens Hoodie</option>
                        <option value="tote-bag">Tote Bag</option>
                        <option value="tumbler-bottle">Tumbler Bottle</option>
                        <option value="coffee-mug">Coffee Mug</option>
                        <option value="notebook">Notebook</option>
                    </select>
                </div>

                {/* Price Filter */}
                <div className="price-filter card">
                    <h3>Filter by Price</h3>
                    <input type="range" min="0" max="500" step="10" />
                    <div className="price-range">
                        <span>$0</span>
                        <span>$500</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CatalogSidebar;
