
import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/AdminDashboard/Dashboard/Dashboard';
import SingleProduct from './components/AdminDashboard/ProductManagement/SingleProduct/SingleProduct';
import EditProduct from './components/AdminDashboard/ProductManagement/EditProduct/EditProduct';

function App() {
  return (
    <div className="App">
      <h1>Welcome, to Admin Dashboard!!</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/singleProduct/:productId" element={<SingleProduct />} />
        <Route path="/editproduct/:productId" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;