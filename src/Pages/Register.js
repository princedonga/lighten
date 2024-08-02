import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      Swal.fire({
        title: "Thank You",
        text: "Registration successful",
        icon: "success"
      }).then(() => {
        navigate('/login');
      });
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.response.data.msg,
        icon: "error"
      });
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className='form-control my-4' value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" className='form-control my-4' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className='form-control my-4' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className='login-btn'>Register</button>
      </form>
    </div>
  );
};

export default Register;
