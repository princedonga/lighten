import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    // const [showModal, setShowModal] = useState(false);
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
            image: e.target.files[0]
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
                    'Content-Type': 'multipart/form-data'
                }
            });
            // setShowModal(false);
            fetchProducts();
        } catch (error) {
            console.error('Error uploading product:', error);
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

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <input type="text" name="title" placeholder="Title" className="form-control mb-2" onChange={handleInputChange} />
                                        <input type="text" name="price" placeholder="Price" className="form-control mb-2" onChange={handleInputChange} />
                                        <textarea name="description" placeholder="Description" className="form-control mb-2" onChange={handleInputChange}></textarea>
                                        <input type="file" name="image" className="form-control mb-2" onChange={handleImageChange} />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" onClick={handleUpload}>Upload</button>
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
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product._id}>
                                    <td><img src={product.imageUrl} alt={product.title} width="40" /></td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
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
