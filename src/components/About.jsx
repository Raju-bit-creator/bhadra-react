import React, { useContext, useEffect } from 'react'
import productContext from '../context/productContext'


const About = () => {
    const a = useContext(productContext)
    const {update, product}= a

    // useEffect(() => {
    //     update()
    // }, [])

    return (
        <div>
            <h4> this is about us component:{product.name} and price:{product.price}</h4>
        </div>
    )
}

export default About


