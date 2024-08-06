import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useSelector } from 'react-redux';

function Header() {
  const quantity = useSelector(state => state.cart.totalQuantity);
  const total = useSelector(state => state.cart.totalAmount);
  const pro = useSelector(state => state.cart.cartItem);

  return (
    <>
      <section className='icon-set d-lg-block d-none'>
        <div className='container-fluid'>
          <div className='row '>
            <div className='col-lg-6'>
              <div className='container'>
                <span><i className="fa-brands fa-facebook"></i></span>
                <Link to="https://x.com/DongaPrinc63321" target='_blank ' className='text-dark'><span><i class="fa-brands fa-twitter"></i></span></Link>
                <Link to="https://www.instagram.com/prince__donga__/" target="_blank" className='text-dark'><span><i class="fa-brands fa-instagram"></i></span></Link>
                <Link to="www.linkedin.com/in/prince-donga" target='_blank' className='text-dark'><span><i class="fa-brands fa-linkedin"></i></span></Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='container mt-2 '>
                <h6 className='float-end'>long established fact that a reader will be</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='py-3'>
        <section>
          <div className='container py-3'>
            <div className='row'>
              <div className='col-lg-2 col-md-6 col-sm-6 col-5'>
                <Link to="/"><img src='Assets/img/logo.jpg' alt='' className='w-100' /></Link>
              </div>  
              <div className='col-lg-8 d-lg-block d-none'>
                <div>
                  <ul className='nav-set-main'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/product">PRODUCT</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><Link to="/login">SIGN UP</Link></li>
                    <li><Link to="/carts">CARTS</Link></li>
                    <li><Link to="/register">REGISTER</Link></li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-2 col-md-6 col-sm-6 col-7'>
                <div className='float-end position-relative'>
                  <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    <i className="fa-solid fa-cart-shopping fs-4"></i>
                  </button>
                  <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <div className="offcanvas-header">
                      <img src='https://themewagon.github.io/lighten/images/logo.jpg' alt='' className='w-50' />
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                      <div>
                        {pro.length === 0 ? (
                          <img src='https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png' className='w-50 d-block mx-auto mt-5' alt="" />
                        ) : pro.map((item) => (
                          <Cart key={item._id} item={item} />
                        ))}
                      </div>
                      <div className='bg-warning py-3 position-absolute bottom-0 px-3' style={{ width: "93%" }}>
                        <h4 className='d-inline'>SubTotal:<span className='ms-2'>${total}</span></h4>
                        <button className='btn btn-dark float-end'><Link to="/checkout" className='text-decoration-none text-white'>Check Out</Link></button>
                      </div>
                    </div>
                  </div>
                  <span className='q-set text-dark'>{quantity}</span>
                  <span className='fs-4 ms-3'>
                    <i className="fa-solid fa-bars mt-4 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                          <ul className='nav-set'>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/product">PRODUCT</Link></li>
                            <li><Link to="/blog">BLOG</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                            <li><Link to="/login">SIGN UP</Link></li>
                            <li><Link to="/carts">CARTS</Link></li>
                            <li><Link to="/register">REGISTER</Link></li>
                          </ul>
                        </div>
                      </div>
                    </i>
                    <Link to="/profile" className='text-dark'><i className="fa-solid fa-user ms-4"></i></Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Header;
