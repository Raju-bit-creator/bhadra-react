import React, { useContext, useEffect, useState } from 'react'
import productContext from '../context/productContext'
import Mac from "../assets/images/mac.jpeg"
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from './EditProductModal';

const About = () => {
    const context = useContext(productContext)
    const { state: { cart }, dispatch, product, allProduct,deleteProduct, editProduct } = context 
    console.log("product1111", product);
    

    const [menuVisible, setMenuVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)


    const toggleMenu = (id) => {
        setMenuVisible(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    const openEditModal = (product) => {
        setSelectedProduct(product)
        setModalVisible(true)
    }
    const closeEditModal = () => {
        setModalVisible(false);
        setSelectedProduct(null);
    };
    const saveEdit = (updateData) => {
        editProduct(selectedProduct._id, updateData)
    }
    const handleDelete = async (id) => {
        console.log("deleting product");
        await deleteProduct(id)

    }
    useEffect(() => {
        allProduct()
    }, [])



    return (
        <>
            <div className="container">
                <div className="row">
                    {/* <h4> this is about us component. my product name is: {product.name} and price:{product.price}</h4> */}

                    <h4 className="our-product-title">
                        My Product
                    </h4>
                    {product.map((item) => {
                        return (
                            <div className='col-md-3'>
                                <div key={item._id} className="card ">
                                    <img src={`http://localhost:5000/uploads/${item.images[0]}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className='three-dots'>
                                            <h5 className="card-title">{item.title}</h5>
                                            <BsThreeDots onClick={() => toggleMenu(item._id)} />
                                            {menuVisible[item._id] && (
                                                <div className='menu-options'>
                                                    <button onClick={() => openEditModal(item)}>Edit</button>
                                                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                                                </div>
                                            )}
                                        </div>
                                        <p className="card-text">{item.description}</p>
                                        <p className="card-text">Rs. {item.price}</p>
                                        {/* <button className='btn btn-primary'>Add to cart</button> */}
                                        {cart && cart.some(p => p._id === item._id) ? (
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
                                {modalVisible && selectedProduct && selectedProduct._id === item._id && (
                                    <EditProductModal
                                        product={selectedProduct}
                                        onClose={closeEditModal}
                                        onSave={saveEdit}

                                    />
                                )}
                            </div>
                        )

                    })}

                </div>
            </div>
        </>
    )
}

export default About


