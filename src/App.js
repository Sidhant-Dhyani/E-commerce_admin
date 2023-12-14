import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Dashboard from './components/AdminDashboard/Dashboard/Dashboard';
import SingleProduct from './components/AdminDashboard/ProductManagement/SingleProduct/SingleProduct';
import EditProduct from './components/AdminDashboard/ProductManagement/EditProduct/EditProduct';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('admintoken');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the Admin Dashboard!!</h1>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/singleProduct/:productId" element={<SingleProduct />} />
            <Route path="/editproduct/:productId" element={<EditProduct />} />
          </>
        ) : (
          // Display the login form when not logged in
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;