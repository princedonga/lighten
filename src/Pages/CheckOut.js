import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ComonSecation from '../Componets/ComonSecation';
import { useSelector } from 'react-redux';
import axios from 'axios';

function CheckOut() {
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        state: '',
        city: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, country, state, city } = formData;
        if (name && email && phone && country && state && city) {
            try {
                const response = await axios.post('http://localhost:5000/api/checkout', formData);
                if (response.status === 200) {
                    Swal.fire({
                        title: "Thank You",
                        text: "Payment successful",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Network error!",
                });
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill up all details",
            });
        }
    };

    return (
        <div>
            <div>
                <ComonSecation title="Check Out"></ComonSecation>
            </div>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div>
                                <h4 className='mb-4 mt-4'>Shipping Address</h4>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        name="name"
                                        placeholder='Enter Your Name'
                                        type='text'
                                        className='form-control py-1 w-100 mb-5 border-0 border-bottom'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        name="email"
                                        placeholder='Enter Your Email'
                                        type='email'
                                        className='form-control py-1 w-100 mb-5 border-0 border-bottom'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        name="phone"
                                        placeholder='Enter Your Phone Number'
                                        type='number'
                                        className='form-control py-1 w-100 mb-5 border-0 border-bottom'
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        name="country"
                                        placeholder='Enter Your Country'
                                        type='text'
                                        className='form-control py-1 w-100 mb-5 border-0 border-bottom'
                                        value={formData.country}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        name="state"
                                        placeholder='Enter Your State'
                                        type='text'
                                        className='form-control py-1 w-100 mb-5 border-0 border-bottom'
                                        value={formData.state}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        name="city"
                                        placeholder='Enter Your City'
                                        type='text'
                                        className='form-control py-1 w-100 border-0 border-bottom'
                                        value={formData.city}
                                        onChange={handleInputChange}
                                    />
                                    <button type="submit" className='btn btn-warning mt-5 mb-5 px-4'>Payment</button>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='ms-5'>
                                <h5 className='mt-5 mb-3'>SubTotal:<span className='ms-2'>${totalAmount}</span></h5>
                                <h5 className='mb-3'>Shipping Cost:$12</h5>
                                <h5>Total Amount: ${totalAmount + 12}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CheckOut;
