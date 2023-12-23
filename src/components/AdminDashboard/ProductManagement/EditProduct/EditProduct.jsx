import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './EditProduct.css';

const EditProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`https://e-commerce-backend-with-admin.vercel.app/api/admin/${productId}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchProductData();
    }, [productId]);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting edit:', product);
        axios
            .patch(`https://e-commerce-backend-with-admin.vercel.app/api/admin/editproduct/${productId}`, product)
            .then((response) => {
                console.log('Edit successful:', response.data);
                navigate('/');
            })
            .catch((error) => {
                console.error('Edit error:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'isHidden') {
            setProduct({
                ...product,
                [name]: checked,
            });
        }
        else if (name === 'images') {
            const imagesArray = value.split(',');
            setProduct({
                ...product,
                [name]: imagesArray,
            });
        } else {
            setProduct({
                ...product,
                [name]: value,
            });
        }
    };

    return (
        <div className="edit-product-container">
            <h2>Edit Product</h2>

            {loading && <p>Loading...</p>}

            {product && (
                <form onSubmit={handleEditSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" value={product.title} onChange={handleInputChange} />

                    <label>Description:</label>
                    <textarea name="description" value={product.description} onChange={handleInputChange} />

                    <label>Price:</label>
                    <input type="number" name="price" value={product.price} onChange={handleInputChange} />

                    <label>Discount Percentage:</label>
                    <input type="number" name="discountPercentage" value={product.discountPercentage} onChange={handleInputChange} />

                    <label>Rating:</label>
                    <input type="number" name="rating" value={product.rating} onChange={handleInputChange} />

                    <label>Stock:</label>
                    <input type="number" name="stock" value={product.stock} onChange={handleInputChange} />

                    <label>Brand:</label>
                    <input type="text" name="brand" value={product.brand} onChange={handleInputChange} />

                    <label>Category:</label>
                    <input type="text" name="category" value={product.category} onChange={handleInputChange} />

                    <label>Thumbnail URL:</label>
                    <input type="text" name="thumbnail" value={product.thumbnail} onChange={handleInputChange} />

                    <label>Images (comma-separated URLs):</label>
                    <input type="text" name="images" value={product.images.join(',')} onChange={handleInputChange} />

                    <label>Hide this product:</label>
                    <input type="checkbox" name='isHidden' checked={product.isHidden} onChange={handleInputChange} />

                    <button type="submit">Save Changes</button>
                </form>
            )}
        </div>
    );
};

export default EditProduct;
