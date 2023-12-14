import React, { useState, useEffect } from 'react';
import './ViewProducts.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/admin');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching product data');
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleClick = (product) => {
        navigate(`/singleProduct/${product._id}`);
    };

    return (
        <div className="view-product-container">
            <h2>View Products</h2>

            {loading && <p>Loading...</p>}

            {error && <p className="error-message">{error}</p>}

            {products && (
                <div>
                    {products.map((product) => (
                        <div key={product._id} className="product_details" onClick={() => handleClick(product)}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ViewProduct;