import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import ProductManagement from '../ProductManagement/ProductManagement';
import DiscountManagement from '../DiscountManagement/DiscountManagement';
import InventoryManagement from '../InventoryManagement/InventoryManagement';
import SalesManagement from '../SalesManagement/SalesManagement';
import Notifications from '../Notifications/Notifications';

const Dashboard = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const handleHeaderClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div className='dashboard'>
            <div className='dashboard__container_navbar'>
                <div>
                    <h2 onClick={() => handleHeaderClick('ProductManagement')} >Product Management</h2>
                </div>

                <div>
                    <h2 onClick={() => handleHeaderClick('DiscountManagement')} >Discount Management</h2>
                </div>

                <div>
                    <h2 onClick={() => handleHeaderClick('SalesManagement')} >Sales Management</h2>
                </div>

                <div>
                    <h2 onClick={() => handleHeaderClick('InventoryManagement')} >Inventory Management</h2>
                </div>

                <div>
                    <h2 onClick={() => handleHeaderClick('Notifications')} >Notifications</h2>
                </div>
            </div>
            {selectedComponent === 'Notifications' && <Notifications />}
            {selectedComponent === 'InventoryManagement' && <InventoryManagement />}
            {selectedComponent === 'SalesManagement' && <SalesManagement />}
            {selectedComponent === 'DiscountManagement' && <DiscountManagement />}
            {selectedComponent === 'ProductManagement' && <ProductManagement />}

            <div className='dashboard__container_right'>

            </div>
        </div>
    );
};

export default Dashboard;