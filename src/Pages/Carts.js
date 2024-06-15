import React from 'react'
import ComonSecation from '../Componets/ComonSecation'
import { Col, Container, Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { cartactions } from '../Store/Slice/CartSlice'
import { Link } from 'react-router-dom'
function Carts() {
    const cartItem = useSelector(state => state.cart.cartItem)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <div>
            <div>
                <ComonSecation title="Carts"></ComonSecation>
            </div>
            <section className='mt-5 mb-5'>
                <Container>
                    <Row>
                        <Col lg="12">
                            {
                                cartItem.length === 0 ?(
                                    <img src='https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png' className='w-25 d-block mx-auto' alt=""></img>
                                ):(
                                    <table className='table table-bordered '>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Title</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItem.map((item) =>{
                                                return<Tr items={item}></Tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                                )
                            }
                            <div className='mt-5'>
                                <h3 className=''>SubTotal:<span className='ms-3'>${totalAmount}</span></h3>
                                <p>All Tex Included</p>
                            </div>
                            <div>
                                <button className='btn btn-warning '><Link className='text-decoration-none text-dark' to="/product">Countinue Shoping</Link></button>
                                <button className='btn btn-warning ms-3'><Link className='text-decoration-none text-dark' to="/checkout">Check Out</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

const Tr  = (props) =>{
    const {image01,price,title,quantity,id} = props.items
    const dispatch = useDispatch()
    const deleteItem = () => {
        dispatch(cartactions.deleteItem({
          id
          }))
    }
    return(
        <tr>
            <td className='text-center'><img src={image01} alt="" className='w-25'></img></td>
            <td className='text-center'>{title}</td>
            <td className='text-center'>${price}</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center'>
                <i class="fa-solid fa-trash-can" onClick={deleteItem}></i>
            </td>
        </tr>
        
    );
    
}

export default Carts