import React, { useReducer, useState } from 'react'
import ProductContext from './productContext'
import { cartReducer } from './Reducer'

const ProductState = (props) => {
  let p1 = {
    name: "apple",
    price: 100
  }
  const prod = [
    {
      "id": 1,
      "name": "apple",
      "description": "this is fresh and healthy",
      "price": 100,
      "instock": 5

    },
    {
      "id": 2,
      "name": "mango",
      "description": "this is local product from Nepal",
      "price": 200,
      "instock": 3
    },
    {
      "id": 3,
      "name": "banana",
      "description": "this is local product from Nepal",
      "price": 300,
      "instock": 5
    }
  ]
  const [product, setProduct] = useState([])
  
  const [state, dispatch] = useReducer(cartReducer, 
    {
        products: product,
        cart: []
    }
)



  // const update = () => {
  //   setTimeout(() => {
  //     setProduct({
  //       name: "orange",
  //       price: 50
  //     })
  //   }, 5000);
  // }
 
  const allProduct = async () => {
    const response = await fetch("http://localhost:5000/api/product/getallproduct", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
        }
    })
    let parseData = await response.json()
    console.log(parseData);
    setProduct(parseData)
}

const editProduct = async (selectedProduct, updateData) => {
  console.log("edditing product with selected product", selectedProduct);
  const { title, description, price, instock } = updateData
  try {
      const response = await fetch(`http://localhost:5000/api/product/updateproduct/${selectedProduct}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
          },
          body: JSON.stringify({ title, description, instock, price })
      })
      if (!response.ok) {
          throw new Error('fail to update product')
      }
      const json = await response.json();
      console.log("product updated successfully" ,json);
      allProduct();

  } catch (error) {
      throw new Error('fail to update product')
  }
}

const deleteProduct = async(id)=>{
  try {
      const response= await fetch(`http://localhost:5000/api/product/deleteproduct/${id}`,{
          method: 'DELETE',
          headers: {
              "Content-Type":"application/json",
              "auth-token": localStorage.getItem('token')
          }
      })
      if(response.ok){
          console.log("product deleted successfully");
          allProduct()
          
      }
      else{
          console.error("failed to delete the product item")
      }
  } catch (error) {
      console.error("internal server error")
  }
}
 
  return (
    <ProductContext.Provider value={{ state, allProduct, editProduct, dispatch, product }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
