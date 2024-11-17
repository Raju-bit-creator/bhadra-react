import React, { useContext, useEffect } from 'react'
import productContext from '../context/productContext'
import Mac from "../assets/images/mac.jpeg"

const About = () => {
    const context = useContext(productContext)
    const { state: { cart }, dispatch, product } = context
    console.log("thsi is cart",cart);
    
    console.log("hello", product);



    // useEffect(() => {
    //     update()
    //     fetchApi()

    // }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    {/* <h4> this is about us component. my product name is: {product.name} and price:{product.price}</h4> */}

                    <h4 className="our-product-title">
                        Our Product
                    </h4>
                    {product.map((item) => {
                        return (
                            <div className='col-md-3'>
                                <div key={item.id} className="card ">
                                    <img src={Mac} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <p className="card-text">Rs. {item.price}</p>
                                        {/* <button className='btn btn-primary'>Add to cart</button> */}
                                        {cart && cart.some(p => p.id === item.id) ? (
                                            <button
                                                className='btn btn-danger'
                                                onClick={() => {
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: item
                                                    });
                                                }}
                                            >
                                                Remove from cart
                                            </button>
                                        ) : (
                                            <button
                                                className='btn btn-primary'
                                                onClick={() => {
                                                    dispatch({
                                                        type: "ADD_TO_CART",
                                                        payload: item
                                                    });
                                                }}
                                            >
                                                Add to cart
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )

                    })}

                </div>
            </div>
        </>
    )
}

export default About


