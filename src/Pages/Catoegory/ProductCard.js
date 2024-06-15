import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartactions } from '../../Store/Slice/CartSlice'

function ProductCard(props) {
    const{id,title,image01,price} = props.items
    const dispatch = useDispatch()
    const addtoCart = () =>{
      dispatch(cartactions.addItem({
        id,title,image01,price
      }))
    }
  return (
    <div>
        <div className='product-box'>
           <Link to={`/product/${id}`}> <img src={image01}alt='' ></img></Link>
            <Link to={`/product/${id}`} className='text-decoration-none '><h3  style={{cursor:"pointer"}}>{title}</h3></Link>
            <span className='pt-2'>${price}</span>
            <button className='btn btn-warning py-0 px-5 ms-5 fw-bold' onClick={addtoCart}>Buy</button>
        </div>
    </div>
  )
}

export default ProductCard