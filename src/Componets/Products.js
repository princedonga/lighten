import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        title: '',
        price: '',
        desc: '',
        image01: null
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleInputChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        setNewProduct({
            ...newProduct,
            image01: e.target.files[0]
        });
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('title', newProduct.title);
        formData.append('price', newProduct.price);
        formData.append('desc', newProduct.desc);
        formData.append('image01', newProduct.image01);

        try {
            await axios.post('http://localhost:5000/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    
                }
            });
            fetchProducts(); // Refresh the products list after upload
        } catch (error) {
            console.error('Error uploading product:', error);
        }
    };
    const handleDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${productId}`);
            setProducts(products.filter(product => product._id !== productId)); // Update the state
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <>
            <div className="d-flex py-5">
                <nav className="sidebar bg-light flex-shrink-0 p-3">
                    <Link to="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span><img src="Assets/img/logo.jpg" className='w-100' alt='logo' /></span>
                    </Link>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">
                                <i className="bi bi-people"></i> Users
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/products" className="nav-link active">
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
                        <h1>Products</h1>
                        <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Product</button>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Product</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <input type="text" name="title" placeholder="Title" className="form-control mb-2" onChange={handleInputChange} />
                                        <input type="text" name="price" placeholder="Price" className="form-control mb-2" onChange={handleInputChange} />
                                        <textarea name="desc" placeholder="Description" className="form-control mb-2" onChange={handleInputChange}></textarea>
                                        <input type="file" name="image01" className="form-control mb-2" onChange={handleImageChange} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={handleUpload}>Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product._id}>
                                    <td><img src={`${product.image01}`} alt={product.title} width="80" /></td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <i className="fa-solid fa-trash" onClick={handleDelete} ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Products;
