
import React, { useState, useEffect } from 'react'
import axios from 'axios';
const SalesData = ({ str }) => {
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSalesData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/sales/${str}`);
                setSalesData(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching sales data');
                setLoading(false);
            }
        };

        fetchSalesData();
    }, []);

    return (
        <div>
            <h2>Sales Data </h2>

            {loading && <p>Loading...</p>}

            {error && <p className="error-message">{error}</p>}

            {salesData && (
                <div>
                    {salesData.map((order, index) => (
                        <div key={index}>
                            <h3>Order Details:</h3>
                            <p>Name: {order.name}</p>
                            <p>Address: {order.address}</p>
                            <p>City: {order.city}</p>
                            <p>State: {order.state}</p>
                            <p>Postal Code: {order.postal_code}</p>
                            <p>Contact Phone: {order.contact_phone}</p>

                            <h4>Products:</h4>
                            <ul>
                                {order.products.map((product, productIndex) => (
                                    <li key={productIndex}>
                                        {product.name} - Quantity: {product.qty}
                                    </li>
                                ))}
                            </ul>
                            <p>Total Amount: {order.totalPrice}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SalesData;