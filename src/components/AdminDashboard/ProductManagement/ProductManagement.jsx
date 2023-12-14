// Add, view=> Products list, every product will have an edit option and delete button.

import React, { useState, useEffect } from 'react';
import './ProductManagement.css';
import AddProduct from './AddProduct/AddProduct';
import ViewProduct from './ViewProducts/ViewProducts.jsx';

const ProductManagement = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const handleHeaderClick = (component) => {
        setSelectedComponent(component);
    };
    return (
        <div className='product_management'>
            <div className='product_management_container'>
                <div>
                    <h5 onClick={() => handleHeaderClick('AddProduct')} >Add New Product</h5>
                </div>
                <div>
                    <h5 onClick={() => handleHeaderClick('ViewProduct')} >View</h5>
                </div>
            </div>

            {selectedComponent === 'AddProduct' && <AddProduct />}
            {selectedComponent === 'ViewProduct' && <ViewProduct />}
        </div>
    );
};

export default ProductManagement;