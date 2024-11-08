import React, { useContext, useEffect } from 'react'
import productContext from '../context/productContext'

const About = () => {
    const context =useContext(productContext)
    const {product , update}= context
 
    useEffect(()=>{
      update()
    },[])

    return (
        <div>
            <h4> this is about us component. my product name is: {product.name} and price:{product.price}</h4>
        </div>
    )
}

export default About


