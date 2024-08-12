import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/admin'); // Redirect to admin page after login
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className=''>
            <h2 className='text-center mb-5'>Admin-Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    {/* <label>Email:</label> */}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='E-mail'
                        required
                        className='form-control w-25 mb-4 d-block mx-auto'
                    />
                </div>
                <div>
                    {/* <label>Password:</label> */}
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                         className='form-control w-25 d-block mx-auto'
                    />
                </div>
                {error && <p>{error}</p>}
                <button type="submit" className='btn btn-warning mt-4 px-5 d-block mx-auto'>Login</button>
            </form>
            <p className='mt-4 text-center'>Don't have an account? <Link to="/a-register">Register here</Link></p>
        </div>
    );
}

export default AdminLogin;
