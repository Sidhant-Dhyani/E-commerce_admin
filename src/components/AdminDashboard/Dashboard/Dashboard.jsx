import React, { useState } from 'react';
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
            <h1 className='dashboard_heading'>Welcome to Admin Dashboard!!</h1>
            <div className='dashboard_container_navbar'>
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
            <div>
                {selectedComponent === 'Notifications' && <Notifications />}
                {selectedComponent === 'InventoryManagement' && <InventoryManagement />}
                {selectedComponent === 'SalesManagement' && <SalesManagement />}
                {selectedComponent === 'DiscountManagement' && <DiscountManagement />}
                {selectedComponent === 'ProductManagement' && <ProductManagement />}
            </div>
        </div>
    );
};

export default Dashboard;