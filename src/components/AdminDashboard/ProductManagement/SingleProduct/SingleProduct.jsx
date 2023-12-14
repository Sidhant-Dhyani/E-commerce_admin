import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SingleProduct.css';

const SingleProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/admin/${productId}`);
                setProduct(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchProductData();
    }, [productId]);

    const handleEditClick = () => {
        navigate(`/editProduct/${productId}`);
    };

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`http://localhost:4000/api/admin/deleteproduct/${productId}`);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="single-product-container">
            <h2>Single Product</h2>

            {loading && <p>Loading...</p>}

            {product && (
                <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>

                    <h4>Product Details:</h4>
                    <ul>
                        <li>Rating: {product.rating}</li>
                        <li>Stock: {product.stock}</li>
                        <li>Brand: {product.brand}</li>
                        <li>Category: {product.category}</li>
                    </ul>

                    <h4>Images:</h4>
                    <ul>
                        {product.images.map((image, index) => (
                            <li key={index}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                    Image {index + 1}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {product.hasOwnProperty('isHidden') && (
                        <h4>Is Hidden: {product.isHidden ? 'Yes' : 'No'}</h4>
                    )}
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={handleDeleteClick}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default SingleProduct;