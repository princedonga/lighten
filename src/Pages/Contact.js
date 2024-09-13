import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ComonSecation from '../Componets/ComonSecation';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill up all details',
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/contact/', formData);

      if (response.status === 200) {
        Swal.fire({
          title: 'Thank You',
          text: 'Message sent successfully',
          icon: 'success',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong',
      });
    }
  };

  return (
    <div>
      <ComonSecation title="CONTACT US" />
      <section className='py-5'>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-lg-6'>
                <div>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Enter Name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div>
                  <input
                    type='email'
                    name='email'
                    className='form-control mt-4 mt-lg-0'
                    placeholder='Enter Email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='mt-4'>
                  <input
                    type='text'
                    name='phone'
                    className='form-control'
                    placeholder='Phone'
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='mt-4'>
                  <input
                    type='text'
                    name='message'
                    className='form-control py-5'
                    placeholder='Message'
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <button className='btn btn-dark py-2 px-5 mt-5' type='submit'>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
