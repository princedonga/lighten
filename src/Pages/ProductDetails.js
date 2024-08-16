import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../Fack-data/Product';
import { useDispatch } from 'react-redux';
import { cartactions } from '../Store/Slice/CartSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './Catoegory/ProductCard';
import { Button } from 'reactstrap';

function ProductDetails(props) {
    const { id } = useParams();
    const Products = products.find(item => item.id === id);
    const { title, price, desc, image01 } = Products;
    const [allProducts, setAllProducts] = useState([]);
    

    useEffect(() => {
        axios.get('http://lighten-three.vercel.app/api/products')
            .then(response => {
                setAllProducts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
            });
    }, []);
    
    const dispatch = useDispatch();

    const addtoCart = async () => {
        const newItem = { id, title, image01, price };

        try {
            const response = await axios.post('http://lighten-three.vercel.app/api/cart/add', newItem);
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
                        <div className='col-lg-4 col-md-3 col-sm-12 '>
                            <div className='zooom-conatainer position-sticky '>
                                <img src={image01} alt='' className='w-75 zoom-img'></img>
                                <button className='btn btn-warning mt-3 mb-4' onClick={addtoCart}>Add to Cart</button>
                                <button className='btn btn-warning ms-3 mt-3 px-4 mb-4'><Link to="/checkout" className=' text-decoration-none text-dark'>Buy Now</Link></button>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-10 col-sm-12 '>
                            <div className='mt-5 ms-4'>
                                <h2>{title}</h2>
                                <h6 className=''><span className='bg-success px-3 text-white rounded mx-2'>4.3  <i className="fa-solid fa-star"></i></span>14,348 Ratings & 1,915 Reviews</h6>
                                <h6 className='mt-3'>Special Offer</h6>
                                <h4 className='mt-1'>Price: ${price} <s> $28</s></h4>
                            </div>
                            <div className='ms-3 mt-3'>
                                <h6 className='ms-1 mt-4'>Available offers</h6>
                                <p><span><i className="fa-solid fa-tags text-success mx-2"></i></span>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p>
                                <p><span><i className="fa-solid fa-tags text-success mx-2"></i></span>Bank Offer10% off up to ₹1,500 on AU Credit Cards Transactions.on orders of ₹5,000 and aboveT&C</p>
                                <p><span><i className="fa-solid fa-tags text-success mx-2"></i></span>Bank Offer10% off up to ₹2,000 on AU Credit Card EMI Transactions, on orders of ₹5,000 and aboveT&C</p>
                                <p><span><i className="fa-solid fa-tags text-success mx-2"></i></span>Special PriceGet extra 21% off (price inclusive of cashback/coupon)T&C</p>
                            </div>
                            <div className='m-4'>
                                <h4 className='mt-4'>Description</h4>
                            </div>
                            <div className='mb-5 m-4'>
                                <p className='mt-4'>{desc}</p>
                            </div>
                            <div className='mb-4'>
                                <h6>Delivery</h6>
                                <span><input type='text' className='form-control w-25 p-2 border-top border-start border-end' placeholder='Enter Pincode'></input></span>
                                <Button className=''>Check</Button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='row'>
                                {
                                    allProducts.slice(0, 4).map((item) => {
                                        return (
                                            <div className='col-lg-3 col-md-6 col-sm-6 col-12' key={item.id}>
                                                <ProductCard items={item}></ProductCard>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetails;
