import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Login from './components/Login/Login.jsx';
import Dashboard from './components/AdminDashboard/Dashboard/Dashboard';
import SingleProduct from './components/AdminDashboard/ProductManagement/SingleProduct/SingleProduct';
import EditProduct from './components/AdminDashboard/ProductManagement/EditProduct/EditProduct';
import PrivateRoute from './components/PrivateRoute';
import { login } from './redux/loginSlice.js';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('admintoken');
  if (token) {
    dispatch(login(token));
  }
  const loginToken = useSelector((state) => state.loginreducer.value.token);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loginToken) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/singleProduct/:productId"
        element={
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        }
      />
      <Route
        path="/editProduct/:productId"
        element={
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;