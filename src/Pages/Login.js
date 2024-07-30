import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      Swal.fire({
        title: "Welcome Back",
        text: "Login successful",
        icon: "success"
      }).then(() => {
        navigate('/');
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
    <div className="">
      {/* <h2>Login</h2> */}
     
        {/* <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button> */}
        <div className="container1 mt-5 mb-5">
          <div className="screen">
            <div className="screen__content">
              <form className="login" onSubmit={handleSubmit}>
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input type="text" className="login__input" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="User name / Email" />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input type="password" className="login__input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button className="button login__submit " type='submit'>
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
              <div className="social-login">
                <h3>log in via</h3>
                <div className="social-icons">
                  <Link href="#" className="social-login__icon fab fa-instagram"></Link>
                  <Link href="#" className="social-login__icon fab fa-facebook"></Link>
                  <Link href="#" className="social-login__icon fab fa-twitter"></Link>
                </div>
              </div>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
   
    </div>
  );
};

export default Login;
