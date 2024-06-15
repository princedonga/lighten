import React from 'react'
import { useDispatch } from 'react-redux'
import { cartactions } from '../Store/Slice/CartSlice'
import { ListGroupItem } from 'reactstrap'
import { useSelector } from 'react-redux'
// import image01 from '../Fack-data/Images/p1.png'

function Cart(props) {
    const { id, title, image01, price, totalprice, quantity } = props.items;

    const dispatch = useDispatch()
    const addItem = () => {
        dispatch(cartactions.addItem({
            id, title, image01, price, quantity, totalprice
        }))
    }
    const removeItem = () => {
        dispatch(cartactions.removeItem({
            id
        }))
    }
    const deleteItem = () => {
        dispatch(cartactions.deleteItem({
            id
        }))
    }
    const cartItem = useSelector(state => state.cart.cartItem)
    console.log(props.items);
    return (
        <div>
            {
                cartItem.length === 0 ? (
                    <img src='https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png' className='w-25 d-block mx-auto' alt=''></img>
                ) : (
                    <ListGroupItem className='border-0  cart__item'>
                        <div>
                            <img src={image01} alt='' className='w-25'></img>
                            <div className='cart__product-info w-100  d-flex  align-items-center  justify-content-between gap-4'>
                                <div>
                                    <h6 className='cart__product-title'>{title}</h6>
                                    <p className='d-flex align-items-center  gap-5 cart_product-price text-dark'>{quantity}<span>${totalprice}</span></p>
                                    <div className='d-flex align-items-center justify-content-between  increase__decrease-btn'>
                                        <span className='increase__btn' onClick={addItem}><i className='ri-add-line'></i></span>

                                        <span className='quanitity'>{quantity}</span>

                                        <span className='decrease__btn' onClick={removeItem}><i className='ri-subtract-line'></i></span>
                                    </div>
                                </div>
                                <span className='delete_btn' onClick={deleteItem}><i className='ri-close-circle-fill'></i></span>
                            </div>
                        </div>
                    </ListGroupItem>
                )
            }
        </div>
    )
}

export default Cart