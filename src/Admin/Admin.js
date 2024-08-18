import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Admin() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/a-login');
        } else {
            fetchUsers(token);
        }
    }, [navigate]);

    const fetchUsers = async (token) => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/users', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/auth/user/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setUsers(users.filter(user => user._id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <>
            <div className="d-flex py-5">
                <nav className="sidebar bg-light flex-shrink-0 p-3">
                    <Link to="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span><img src="Assets/img/logo.jpg" className='w-100' alt='logo'></img></span>
                    </Link>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link to="#" className="nav-link active">
                                <i className="bi bi-people"></i> Users
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/products" className="nav-link text-dark">
                                <i className="bi bi-box-seam"></i> Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/administration" className="nav-link text-dark">
                                <i className="bi bi-person"></i> Admin
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="content flex-grow-1 p-3">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <input type="search" className="form-control w-25" placeholder="Search here" />
                        <div className="d-flex align-items-center">
                            <i className="bi bi-bell-fill me-3"></i>
                            <i className="bi bi-envelope-fill me-3"></i>
                            <span className="me-3">Admin User</span>
                            <img src="Assets/img/Ellipse.png" alt="Profile" className="rounded-circle" width="40" />
                        </div>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td><img src={`http://localhost:5000${user.photo}`} alt="User" className="rounded-circle" width="40" /></td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                   
                                    <td>
                                        <i className="bi bi-upload me-2"></i>
                                        <i className="fa-solid fa-trash" onClick={() => deleteUser(user._id)}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled"><Link className="page-link" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">...</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Admin;
