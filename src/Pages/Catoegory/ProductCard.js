import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartactions } from '../../Store/Slice/CartSlice'
import axios from 'axios';

function ProductCard(props) {
    const{id,title,image01,price} = props.items
    const dispatch = useDispatch()
    const addtoCart = async() =>{
      const newItem = { id, title, image01, price };

      try {
          const response = await axios.post('http://localhost:5000/api/cart/add', newItem);
          if (response.status === 201) {
              dispatch(cartactions.addItem(response.data));
          }
      } catch (error) {
          console.error('Error adding item to cart:', error.message);
      }
    }
  return (
    <div>
        <div className='product-box'>
           <Link to={`/product/${id}`}> <img src={image01}alt='' className='img-fluid'></img></Link>
            <Link to={`/product/${id}`} className='text-decoration-none '><h3  style={{cursor:"pointer"}}>{title}</h3></Link>
            <span className='pt-2'>${price}</span>
            <button className='btn btn-warning py-0 px-5 ms-5 fw-bold' onClick={addtoCart}>Buy</button>
        </div>
    </div>
  )
}

export default ProductCard