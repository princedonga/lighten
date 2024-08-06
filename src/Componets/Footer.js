import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className='bg-dark text-white'>
        <div className='container '>
          <div className='row py-4'> 
            <div className='col-lg-12 '>
                <div className='i-set text-center '>
                  <span><i class="fa-brands fa-facebook"></i></span>
                  <span><i class="fa-brands fa-twitter"></i></span>
                  <span><i class="fa-brands fa-instagram"></i></span>
                </div>
            </div>
          </div>
          <div className='row mt-5  px-2 pb-5'>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12 '>
              <div className=''>
                  <h3 className='mb-4'>CONATCT US</h3>
                  <h6>123 Second Street Fifth Avenue, Manhattan, New York +987 654 3210</h6>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12 '>
              <div className='footer-mennu'>
                <ul>
                  <h3  className='mb-4'>ADDITIONAL LINKS</h3>
                  <li><Link to="">About us</Link></li>
                  <li><Link to="">Terms and conditions</Link></li>
                  <li><Link to="">Privacy policy</Link></li>
                  <li><Link to="">News</Link></li>
                  <li><Link to="">Contact us</Link></li>

                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12 '>
              <div className='footer-mennu'>
                <ul>
                  <h3  className='mb-4'> SERVICE</h3>
                  <li><Link to="">Data recovery</Link></li>
                  <li><Link to="">Computer repair</Link></li>
                  <li><Link to="">Mobile service</Link></li>
                  <li><Link to="">Network solutions</Link></li>
                  <li><Link to="">Technical support</Link></li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12 '>
              <div className=''>
                  <h3  className='mb-4'>ABOUT LIGHTEN</h3>
                  <h6>Tincidunt elit magnis nulla facilisis. Dolor Sapien nunc amet ultrices,</h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className='footer-bg  d-lg-block d-none'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'>
                <div className='text-center fs-5'>  
                  <p className='mt-2'>
                  Copyright 2019 All Right Reserved By Free html Templates Distributed By ThemeWagon
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer