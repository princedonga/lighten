import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null); // State for profile photo
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data to handle text and file inputs
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    if (photo) formData.append('photo', photo); // Append photo if available

    try {
      await axios.post('http://localhost:5000/api/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Swal.fire({
        title: "Thank You",
        text: "Registration successful",
        icon: "success",
      }).then(() => {
        navigate('/login');
      });
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.response?.data?.msg || "Something went wrong!",
        icon: "error",
      });
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          className='form-control my-4' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          className='form-control my-4' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className='form-control my-4' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <input 
          type="file" 
          className='form-control my-4' 
          onChange={(e) => setPhoto(e.target.files[0])} // Handle file selection
        />
        <button type="submit" className='login-btn'>Register</button>
      </form>
    </div>
  );
};

export default Register;
