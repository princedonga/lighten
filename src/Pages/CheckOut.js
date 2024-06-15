import React from 'react'
import ComonSecation from '../Componets/ComonSecation'
import { useSelector } from 'react-redux'

function CheckOut() {
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <div>
            <div>
                <ComonSecation title="Check Out"></ComonSecation>
            </div>
            <section>
                <div className='container '>
                    <div className='row'>
                        <div className='col-lg-6 '>
                            <div>
                                <h4 className='mb-4 mt-4'>Shpping Address</h4>
                                <div>
                                    <input placeholder='Enter Your Name' type='text' className='form-control py-1 w-100 mb-5 border-0 border-bottom '></input>
                                    <input placeholder='Enter Your Email' type='email' className='form-control py-1 w-100 mb-5 border-0 border-bottom '></input>
                                    <input placeholder='Enter Your Phone Number' type='number' className='form-control py-1 w-100 mb-5 border-0 border-bottom '></input>
                                    <input placeholder='Enter Your Countery' type='text' className='form-control py-1 w-100 mb-5 border-0 border-bottom '></input>
                                    <input placeholder='Enter Your state' type='text' className='form-control py-1 w-100 mb-5 border-0 border-bottom '></input>
                                    <input placeholder='Enter Your City' type='text' className='form-control py-1 w-100 border-0 border-bottom ' ></input>
                                </div>
                                <div>
                                    <button className='btn btn-warning mt-5 mb-5 px-4'>Payment</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='ms-5'>
                                <h5 className='mt-5 mb-3'>SubTotal:<span className='ms-2'>${totalAmount}</span></h5>
                                <h5 className='mb-3'>Shpping Cost:$12</h5>
                                <h5>totalAmount:$34</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CheckOut