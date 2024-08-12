import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:5000/api/auth/user`, {
          headers: { 'x-auth-token': token }
        });
        console.log(res.data); 
        setUser(res.data);
        console.log(setUser);
        
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchUser();

  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    Swal.fire({
      title: "Logged Out",
      text: "You have been logged out successfully",
      icon: "success"
    }).then(() => {
      navigate('/login');
    });
  };

  const handleDeleteAccount = async (id) => {
  try {
    const token = localStorage.getItem('token');
    // console.log(`Deleting user with ID: ${user.id}`); // Ensure this is a valid ObjectId
    await axios.delete(`http://localhost:5000/api/auth/user/${id}`, {
      headers: { 'x-auth-token': token }
    });
    Swal.fire({
      title: "Account Deleted",
      text: "Your account has been deleted successfully",
      icon: "success"
    }).then(() => {
      localStorage.removeItem('token');
      navigate('/register');
    });
  } catch (err) {
    console.log(err.response.data);
  }
};


  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={handleLogout} className='login-btn'>Logout</button>
      <button onClick={ () => handleDeleteAccount(user.id)} className='login-btn mt-2'>Delete Account</button>
    </div>
  );
};

export default Profile;
