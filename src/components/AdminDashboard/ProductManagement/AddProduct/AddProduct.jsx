
import React, { useState } from 'react';
import './AddProduct.css';
import BASE_URL from '../../../../config';
import axios from 'axios';

const AddProduct = () => {

    const [productData, setProductData] = useState({
        title: '',
        description: '',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: '',
        category: '',
        thumbnail: '',
        images: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'images') {
            const imagesArray = value.split(',');
            setProductData({
                ...productData,
                [name]: imagesArray,
            });
        } else {
            setProductData({
                ...productData,
                [name]: value,
            });
        }
    };

    const url = `${BASE_URL}/api/admin/createnew`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, productData);
            console.log('Server response:', response.data);
            alert('Product added successfully!');
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            <h1 className='add_product_heading'>Add a New Product</h1>

            <form className="form" onSubmit={handleSubmit}>
                <label className="label">Title:</label>
                <input type="text" name="title" value={productData.title} onChange={handleInputChange} className="input" required />

                <label className="label">Description:</label>
                <textarea name="description" value={productData.description} onChange={handleInputChange} className="input" required />

                <label className="label">Price:</label>
                <input type="number" name="price" value={productData.price} onChange={handleInputChange} className="input" required />

                <label className="label">Discount Percentage:</label>
                <input type="number" name="discountPercentage" value={productData.discountPercentage} onChange={handleInputChange} className="input" required />

                <label className="label">Rating:</label>
                <input type="number" name="rating" value={productData.rating} onChange={handleInputChange} className="input" required />

                <label className="label">Stock:</label>
                <input type="number" name="stock" value={productData.stock} onChange={handleInputChange} className="input" required />

                <label className="label">Brand:</label>
                <input type="text" name="brand" value={productData.brand} onChange={handleInputChange} className="input" required />

                <label className="label">Category:</label>
                <input type="text" name="category" value={productData.category} onChange={handleInputChange} className="input" required />

                <label className="label">Thumbnail URL:</label>
                <input type="text" name="thumbnail" value={productData.thumbnail} onChange={handleInputChange} className="input" required />

                <label className="label">Images (comma-separated URLs):</label>
                <input type="text" name="images" value={productData.images.join(',')} onChange={handleInputChange} className="input" required />

                <button type="submit" className="button">Add Product</button>
            </form>

        </div>
    )
}

export default AddProduct;