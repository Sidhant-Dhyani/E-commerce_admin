
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SalesManagement.css";
import SalesData from './SalesData.jsx';
import { useSelector } from 'react-redux';

const SalesManagement = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const token = useSelector((state) => state.loginreducer.value.token);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);
    return (
        <div className='sales'>
            <h2 className='sales_management_heading'>Sales Management</h2>
            <div className='sales_container'>
                <div className="all sales_type" onClick={() => setSelectedComponent('all')}>All Data</div>
                <div className="yesterdaySales sales_type" onClick={() => setSelectedComponent('yesterday')}>Yesterday Sales</div>
                <div className="lastWeekSales sales_type" onClick={() => setSelectedComponent('lastWeek')}>LastWeek Sales</div>
                <div className="lastMonthSales sales_type" onClick={() => setSelectedComponent('lastMonth')}>LastMonth Sales</div>
            </div>
            {selectedComponent === 'all' && <SalesData str="all" />}
            {selectedComponent === 'yesterday' && <SalesData str="yesterday" />}
            {selectedComponent === 'lastWeek' && <SalesData str="lastWeek" />}
            {selectedComponent === 'lastMonth' && <SalesData str="lastMonth" />}
        </div>
    );
};

export default SalesManagement;