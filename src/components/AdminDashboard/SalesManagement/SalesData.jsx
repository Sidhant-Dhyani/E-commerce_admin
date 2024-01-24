
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SalesData.css';
import BASE_URL from '../../../config';

const SalesData = ({ str }) => {
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSalesData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/sales/${str}`);
                setSalesData(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching sales data');
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [str]);

    return (
        <div className="sales-data-container">
            <h2>Sales Data</h2>

            {loading && <p className="loading-message">Loading...</p>}

            {error && <p className="error-message">{error}</p>}

            {salesData && (
                <div>
                    {salesData.map((order, index) => (
                        <div key={index} className="order-details">
                            <h3>Order Details:</h3>
                            <p>Name: {order.name}</p>
                            <p>Address: {order.address}</p>
                            <p>City: {order.city}</p>
                            <p>State: {order.state}</p>
                            <p>Postal Code: {order.postal_code}</p>
                            <p>Contact Phone: {order.contact_phone}</p>

                            <h4>Products:</h4>
                            <ul className="products-list">
                                {order.products.map((product, productIndex) => (
                                    <li key={productIndex}>
                                        {product.name} - Quantity: {product.qty}
                                    </li>
                                ))}
                            </ul>
                            <p className="total-amount">Total Amount: {order.totalPrice}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SalesData;