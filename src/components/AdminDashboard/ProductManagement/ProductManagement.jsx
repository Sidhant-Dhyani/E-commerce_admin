
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductManagement.css';
import AddProduct from './AddProduct/AddProduct';
import ViewProduct from './ViewProducts/ViewProducts.jsx';
import { useSelector } from 'react-redux';

const ProductManagement = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const navigate = useNavigate();
    const token = useSelector((state) => state.loginreducer.value.token);
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);
    const handleHeaderClick = (component) => {
        setSelectedComponent(component);
    };
    return (
        <div className='product_management'>
            <div className='product_management_container'>
                <div>
                    <h3 onClick={() => handleHeaderClick('AddProduct')} >Add New Product</h3>
                </div>
                <div>
                    <h3 onClick={() => handleHeaderClick('ViewProduct')} >View</h3>
                </div>
            </div>

            {selectedComponent === 'AddProduct' && <AddProduct />}
            {selectedComponent === 'ViewProduct' && <ViewProduct />}
        </div>
    );
};

export default ProductManagement;