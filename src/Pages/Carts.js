import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { cartactions } from '../Store/Slice/CartSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import ComonSecation from '../Componets/ComonSecation';

function Carts() {
    const cartItem = useSelector(state => state.cart.cartItem);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();
    const [discountCode, setDiscountCode] = useState('');
    const [discountAmount, setDiscountAmount] = useState(0);
    const [error, setError] = useState('');

    const addItem = async (item) => {
        try {
            const response = await axios.post('http://localhost:5000/api/cart/add', item);
            if (response.status === 201) {
                dispatch(cartactions.addItem(response.data));
            }
        } catch (error) {
            console.error('Error adding item to cart:', error.message);
        }
    };

    const removeItem = async (item) => {
        try {
            const response = await axios.post('http://localhost:5000/api/cart/remove', item);
            if (response.status === 200) {
                dispatch(cartactions.removeItem(response.data));
            }
        } catch (error) {
            console.error('Error removing item from cart:', error.message);
        }
    };

    const deleteItem = async (item) => {
        try {
            const response = await axios.post('http://localhost:5000/api/cart/delete', item);
            if (response.status === 200) {
                dispatch(cartactions.deleteItem(response.data));
            }
        } catch (error) {
            console.error('Error deleting item from cart:', error.message);
        }
    };

    const applyDiscount = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/cart/apply-discount', { code: discountCode });
            if (response.status === 200) {
                setDiscountAmount(response.data.discountAmount);
                setError('');
                Swal.fire({
                    title: 'Success!',
                    text: `Discount of $${response.data.discountAmount} applied!`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } else {
                setError('Invalid discount code');
                Swal.fire({
                    title: 'Error!',
                    text: 'Invalid discount code',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            setError('Error applying discount code');
            console.error('Error applying discount code:', error.message);
            Swal.fire({
                title: 'Error!',
                text: 'Error applying discount code',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div>
            <div>
                <ComonSecation title="Carts" />
            </div>
            <section className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-6 mt-3'>
                        <div className='border p-2 border-warning'>
                            <h5>Apply on First order: "FIRST"</h5>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 mt-3'>
                        <div className='border p-2 border-warning'>
                            <h5>Apply on SBI CARD Order: "USE20SBI"</h5>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 mt-3'>
                        <div className='border p-2 border-warning'>
                            <h5>Axis Credit card: "DISCOUNT30"</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-5 mb-5'>
                <Container>
                    <Row>
                        <Col lg="12">
                            {cartItem.length === 0 ? (
                                <img src='https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png' className='w-25 d-block mx-auto' alt="Empty Cart" />
                            ) : (
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Title</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItem.map((item) => (
                                            <tr key={item.id}>
                                                <td className='text-center'><img src={item.image01} alt="" className=' ' style={{width:"12vw"}} /></td>
                                                <td className='text-center'>{item.title}</td>
                                                <td className='text-center'>${item.price}</td>
                                                <td className='text-center'>
                                                    <div className='d-flex align-items-center justify-content-center'>
                                                        <button className='btn btn-light' onClick={() => removeItem(item)}>-</button>
                                                        <span className='mx-2'>{item.quantity}</span>
                                                        <button className='btn btn-light' onClick={() => addItem(item)}>+</button>
                                                    </div>
                                                </td>
                                                <td className='text-center'>
                                                    <i className="fa-solid fa-trash-can" onClick={() => deleteItem(item)}></i>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                            <div className='mt-5'>
                                <h3 className=''>SubTotal: <span className='ms-3'>${totalAmount}</span></h3>
                                {discountAmount > 0 && <h4 className='text-success'>Discount: -${discountAmount}</h4>}
                                <h3 className=''>Total: <span className='ms-3'>${totalAmount - discountAmount}</span></h3>
                                <p>All Tax Included</p>
                            </div>
                            <div className='mb-3'>
                                <input
                                    type='text'
                                    className='form-control w-50'
                                    placeholder='Enter discount code'
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                />
                                <button className='btn btn-warning mt-3' onClick={applyDiscount}>Apply Discount</button>
                                {error && <p className='text-danger'>{error}</p>}
                            </div>
                            <div>
                                <button className='btn btn-warning'><Link className='text-decoration-none text-dark' to="/product">Continue Shopping</Link></button>
                                <button className='btn btn-warning ms-3'><Link className='text-decoration-none text-dark' to="/checkout">Check Out</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Carts;
