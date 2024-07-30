import React from 'react'
import ComonSecation from '../Componets/ComonSecation'
import { useState } from 'react'
// import products from '../Fack-data/Product'
import ProductCard from './Catoegory/ProductCard'
import { useEffect } from 'react'
import axios from 'axios'

function Product() {
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
      <ComonSecation title="OUR PRODUCT"></ComonSecation>
      <div className='py-5'>
        <p className='text-center fs-4'>We package the products with best services to make you a happy customer.</p>
      </div>
      <div className='bg1 mt-5'>
        <div className='product-set'>
          <section className='container '>
            <div className='row g-4 mt-2'>
              {
                allProducts.map((item) => {
                  return <div className='col-lg-3 col-md-6 col-sm-12 col-6'>
                    <ProductCard items={item}></ProductCard>
                  </div>
                })
              }
            </div>
          </section>
        </div>
      </div>

    </div>
  )
}

export default Product