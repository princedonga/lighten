import React from 'react'
import ComonSecation from '../Componets/ComonSecation'

function Contact() {
  return (
    <div>
      <ComonSecation title="CONTACT US"></ComonSecation>

      <section className='py-5'>
        <div className='container '>
          <div className='row'> 
            <div className='col-lg-6 '>
              <div>
                  <input type='text' className='form-control' placeholder ="Enter Name"></input>
              </div>
            </div>
            <div className='col-lg-6 '>
              <div>
              <input type='emial' className='form-control' placeholder ="Enter Email"></input>
              </div>
            </div>
            <div className='col-lg-12 '>
              <div className='mt-4'>
              <input type='text' className='form-control' placeholder='Phone'></input>
              </div>
            </div>
            <div className='col-lg-12 '>
              <div className='mt-4'>
              <input type='text' className='form-control py-5' placeholder="Message"></input>
              </div>
            </div>
            <div className='d-flex justify-content-center '>
                <button className='btn btn-dark py-2 px-5 mt-5 '>Send</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact