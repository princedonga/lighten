
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../Fack-data/Product';
import { useDispatch } from 'react-redux';
import { cartactions } from '../Store/Slice/CartSlice';
import axios from 'axios';


function ProductDetails(props) {
    const { id } = useParams();
    const Products = products.find(item => item.id === id);
    const { title, price, desc, image01 } = Products;

    const dispatch = useDispatch();

    const addtoCart = async () => {
        const newItem = { id, title, image01, price };

        try {
            const response = await axios.post('http://localhost:5000/api/cart/add', newItem);
            if (response.status === 201) {
                dispatch(cartactions.addItem(response.data));
            }
        } catch (error) {
            console.error('Error adding item to cart:', error.message);
        }
    };

    return (
        <div>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-12'>
                            <div className='zooom-conatainer'>
                                <img src={image01} alt='' className='w-100 zoom-img'></img>
                            </div>
                        </div>
                        <div className='col-lg-9 col-md-10 col-sm-12'>
                            <div className='mt-5 ms-4'>
                                <h2>{title}</h2>
                                <h4 className='mt-4'>Price:${price}</h4>
                                <button className='btn btn-warning mt-3' onClick={addtoCart}>Add to Cart</button>
                                <button className='btn btn-warning ms-3 mt-3 px-4' onClick={addtoCart}><Link to="/checkout" className=' text-decoration-none text-dark'>Buy Now</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div>
                                <h4>Description</h4>
                            </div>
                            <div className='mb-5'>
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetails;
