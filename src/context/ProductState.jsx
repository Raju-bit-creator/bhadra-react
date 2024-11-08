import React, { useState } from 'react'
import ProductContext from './productContext'

const ProductState = (props) => {
    let p1={
        name: "apple",
        price: 100
    }
    const [product , setProduct] = useState(p1)

    const update=()=>{
        setTimeout(() => {
            setProduct({
                name: "orange",
                price: 50
            })
        }, 5000);
    }
  return (
    <ProductContext.Provider value={{ product , update}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
