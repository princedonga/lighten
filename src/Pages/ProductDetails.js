import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Fack-data/Product'
import { useDispatch } from 'react-redux'
import { cartactions } from '../Store/Slice/CartSlice'

function ProductDetails(props) {
  const { id } = useParams()
  const Products = products.find(item => item.id === id)
  console.log(Products);
  const { title, price, desc, image01 } = Products

 
    const dispatch = useDispatch()
    const addtoCart = () =>{
      dispatch(cartactions.addItem({
        id,title,image01,price
      }))
    }
  return (
    <div>
       <section >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-3 col-sm-12'>
                <div>
                  <img src={image01} alt='' className='w-100'></img>
                </div>
              </div>
              <div className='col-lg-9 col-md-10 col-sm-12'>
                <div className='mt-5 ms-4'>
                  <h2>{title}</h2>
                  <h4 className='mt-4'>Price:${price}</h4>
                  <button className='btn btn-warning mt-3' onClick={addtoCart}>Add to Cart</button>
                  <button className='btn btn-warning ms-3 mt-3'>Buy Now</button>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div>
                  <h4>Description</h4>
                </div>
                <div className='mb-5'>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          </div>
       </section>
    </div>
  )
}

export default ProductDetails