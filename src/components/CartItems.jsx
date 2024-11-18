import React, { useContext } from 'react'
import productContext from '../context/productContext'
import Mac from "../assets/images/mac.jpeg"

const CartItems = () => {
    const context = useContext(productContext)
    const { state: { cart }, dispatch } = context
    return (
        <div className='container '>
            <div className='productContainer-cart'>
                <ul className='list-group'>

                    {cart && cart.map((item) => (
                        <li className='list-group-item' key={item.id}>
                            <div className='row'>
                                <div className='col-md-2'>
                                    <img src={Mac} alt='prduct list image' />
                                </div>
                                <div className='col-md-2'>
                                    <h4>Name:{item.name}</h4>
                                </div>
                                <div className='col-md-2'>
                                    <h4>Price:{item.price}</h4>
                                </div>
                                <div className='col-md-2'>
                                    <select value={item.qty}
                                        onClick={(e) =>
                                            dispatch({
                                                type: "CHANGE_CART_QTY",
                                                payload: {
                                                    id: item.id,
                                                    qty: e.target.value
                                                }
                                            })
                                        }></select>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default CartItems
