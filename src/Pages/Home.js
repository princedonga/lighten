import React from 'react'
import { useState } from 'react'
import ProductCard from './Catoegory/ProductCard'
// import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'
import { useEffect } from 'react'


function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setAllProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);
  return (
    <div>

      <section className=''>
        <div className='container-fluid '>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 '>
              <div className='main-set   '>
                {/* <h1 className='m-set mt-5 ms-5'>OUR <br></br>LATEST<br></br> <span className='text-warning'>PRODUCT</span></h1> */}
                {/* <p className='m-set'>It is a long established fact that a r<br></br>eader will be distracted by the readable content of a page</p>
                  <button className='m-set'><Link className='text-decoration-none text-white' to="/product">See More Product</Link></button> */}
                <img src='https://themewagon.github.io/lighten/images/banner2.jpg' alt='' className='img-fluid position-relative'></img>
                <div className=''>
                  <h1 className='  '>OUR <br></br>LATEST<br></br> <span className='text-warning '>PRODUCT</span></h1>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container py-4'>
          <div className='row '>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='why-choose'>
                <h2 className=''><span>WHY</span> CHOOSE US</h2>
                <h3 className='text-center mt-3'> Fastest repair service with best price!</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-warning mt-5'>
        <div className='container bg-white c-set'>
          <div className='row m-2 py-5'>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className=' '>
                <img src='Assets/img/1.png' alt='' className='d-block mx-auto'></img>
                <div className='mt-3'>
                  <h4 className='text-center'>Data recovery</h4>
                  <p className='text-center'  >
                    Perspiciatis eos quos totam cum minima autPerspiciatis eos quos
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className=''>
                <img src='Assets/img/2.png' alt='' className='d-block mx-auto'></img>
                <div className='mt-3'>
                  <h4 className='text-center'>Computer repair</h4>
                  <p className='text-center'>
                    Perspiciatis eos quos totam cum minima autPerspiciatis eos quos
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className=''>
                <img src='Assets/img/3.png' alt='' className='d-block mx-auto'></img>
                <div className='mt-3'>
                  <h4 className='text-center'>Mobile service</h4>
                  <p className='text-center'>
                    Perspiciatis eos quos totam cum minima autPerspiciatis eos quos
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className=''>
                <img src='Assets/img/4.png' alt='' className='d-block mx-auto'></img>
                <div className='mt-3'>
                  <h4 className='text-center'>Network solutions</h4>
                  <p className='text-center'>
                    Perspiciatis eos quos totam cum minima autPerspiciatis eos quos
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row py-4'>
            <div className='col-lg-12 '>
              <button className='set-btn '>Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-5'>
        <div className='text-center why-choose'>
          <h2 className='fs-1 py-2'><span className='text-warning'>SERVICE</span> PROCESS</h2>
          <h3 className=''>Easy and effective way to get your device repair</h3>
        </div>
      </section>

      <section className='mt-5'>
        <div className='container'>
          <div className='row m-3'>
            <div className='col-lg-4  col-md-6 col-sm-6 col-12'>
              <div className='card-set mb-4'>
                <img src='Assets/img/service1.png' alt=''></img>
                <div>
                  <h3>
                    Fast service
                  </h3>
                  <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4  col-md-6 col-sm-6 col-12'>
              <div className='card-set mb-4'>
                <img src='Assets/img/service2.png' alt=''></img>
                <div>
                  <h3>
                    Secure payments
                  </h3>
                  <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4  col-md-6 col-sm-6 col-12'>
              <div className='card-set mt-md-4 mt-lg-0 '>
                <img src='Assets/img/service3.png' alt=''></img>
                <div>
                  <h3>
                    Expert team
                  </h3>
                  <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4  col-md-6 col-sm-6 col-12'>
              <div className='card-set mt-4'>
                <img src='Assets/img/service4.png' alt=''></img>
                <div>
                  <h3>
                    Affordable services
                  </h3>
                  <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4  col-md-6 col-sm-6 col-12'>
              <div className='card-set mt-4'>
                <img src='Assets/img/service5.png' alt=''></img>
                <div>
                  <h3>
                    90 Days warranty
                  </h3>
                  <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4  col-md-6 col-sm-6 col-12'>
              <div className='card-set mt-4'>
                <img src='Assets/img/service6.png' alt=''></img>
                <div>
                  <h3>
                    Award winning
                  </h3>
                  <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container mt-5'>
        <div className='why-choose'>
          <h2 className='fs-1 py-2'><span className='text-warning'>OUR </span> PRODUCTS</h2>
          <h3 className='text-center'>Easy and effective way to get your device repair</h3>
        </div>
      </section>

      <section className='container mt-5'>
        <div className='row g-4 mt-2 m1-set'>
          {
            allProducts.map((item) => {
              return <div className='col-lg-3 col-md-6 col-sm-6 col-12' key={item.id}>
                <ProductCard items={item}></ProductCard>
              </div>
            })
          }
        </div>
      </section>

      <section className='mt-5'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'>
              <div>
                <img src='Assets/img/mapimg.jpg' alt='map-img' className='img-fluid'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home