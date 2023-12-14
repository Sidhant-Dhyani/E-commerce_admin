import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/loginSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/adminAuth/login', formData);
            if (response.status === 200) {
                const { token } = response.data;
                localStorage.setItem("admintoken", token);
                dispatch(login(token));
                navigate('/');
                console.log("Login Successful!!");
            }
        } catch (error) {
            console.log(error.message);
        }

    }
    return (
        <div>
            <form action="submit" onSubmit={handleSubmit}>
                <input type="email" name='email' value={formData.email} placeholder='Enter Email' onChange={handleChange} />
                <input type="password" name='password' value={formData.password} placeholder='Enter Password' onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;