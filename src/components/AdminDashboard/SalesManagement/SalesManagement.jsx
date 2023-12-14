
import React, { useState } from 'react';
import "./SalesManagement.css";
import SalesData from './SalesData.jsx';


const SalesManagement = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);
    return (
        <div className='sales'>
            <h2>Sales Management</h2>
            <div className='sales_container'>
                <div className="all" onClick={() => setSelectedComponent('all')}>All Data</div>
                <div className="yesterdaySales" onClick={() => setSelectedComponent('yesterday')}>YesterdaySales</div>
                <div className="lastWeekSales" onClick={() => setSelectedComponent('lastWeek')}>LastWeekSales</div>
                <div className="lastMonthSales" onClick={() => setSelectedComponent('lastMonth')}>LastMonthSales</div>
            </div>
            {selectedComponent === 'all' && <SalesData str="all"/>}
            {selectedComponent === 'yesterday' && <SalesData str="yesterday"/>}
            {selectedComponent === 'lastWeek' && <SalesData str="lastWeek"/>}
            {selectedComponent === 'lastMonth' && <SalesData str="lastMonth"/>}
        </div>
    );
};

export default SalesManagement;