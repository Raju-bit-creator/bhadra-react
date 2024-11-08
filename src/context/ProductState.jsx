import React, { useState } from 'react'
import ProductContext from './productContext'

const ProductState = (props) => {
    const p1 = {
        name: "potato",
        price: 50
    };
    
    const [product, setProduct] = useState(p1);
    const update =()=>{
        setTimeout(() => {
            setProduct({
                name: "orange",
                price: 1
            })
        },2000);
    }
  return (
    <ProductContext.Provider value={{product, update}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
