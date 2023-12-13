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
            <div>
                <h5 onClick={() => handleHeaderClick('AddProduct')} >Add New Product</h5>
                {selectedComponent === 'AddProduct' && <AddProduct />}
            </div>
            <div>
                <h5 onClick={() => handleHeaderClick('ViewProduct')} >View</h5>
                {selectedComponent === 'ViewProduct' && <ViewProduct />}
            </div>
        </div>
    );
};

export default ProductManagement;