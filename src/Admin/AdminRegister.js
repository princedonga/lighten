import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/admin/register', { name, email, password, mobile, gender });
            navigate('/a-login');
        } catch (error) {
            setError('Error registering user');
        }
    };

    return (
        <div>
            <h2 className='text-center mb-4'>Register</h2>
            <form onSubmit={handleRegister}>
                <div>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        required
                        className='form-control w-25 d-block mx-auto mb-4'
                    />
                </div>
                <div>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        required
                        className='form-control w-25 d-block mx-auto mb-4'
                    />
                </div>
                <div>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                        className='form-control w-25 d-block mx-auto mb-4'
                    />
                </div>
                <div>

                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder='Mobile'
                        className='form-control w-25 d-block mx-auto mb-4'
                    />
                </div>
                <div >
                    <label className='justify-content-center d-flex'>Gender:</label>
                    <select className='d-block mx-auto' value={gender} onChange={(e) => setGender(e.target.value)} >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                {error && <p>{error}</p>}
                <button type="submit" className='btn btn-warning px-5 mt-5 d-block mx-auto mb-5'>Register</button>
            </form>
        </div>
    );
}

export default AdminRegister;
