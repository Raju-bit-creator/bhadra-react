
import React, { useState } from 'react'

const EditProductModal = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: product.name,
    description: product.description,
    price: product.price,
    instock: product.instock
  })
  const handelChange= (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSave=()=>{
    onSave(formData)
    onClose()
    
  }
  return (
    <div className=' modal show' style={{ display: "block" }}>
      <div className=' modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Edit product</h5>
            <button type='button'className='btn-close' onClick={onClose}></button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='mb-6'>
                <label htmlFor='title' className='form-label'>title</label>
                <input
                type='text'
                className='form-control'
                id='title'
                name='title'
                value={formData.title}
                onChange={handelChange}
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='title' className='form-label'>Description</label>
                <input
                type='text'
                className='form-control'
                id='description'
                name='description'
                value={formData.description}
                onChange={handelChange}
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='title' className='form-label'>Price</label>
                <input
                type='number'
                className='form-control'
                id='price'
                name='price'
                value={formData.price}
                onChange={handelChange}
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='title' className='form-label'>Instock</label>
                <input
                type='number'
                className='form-control'
                id='instock'
                name='instock'
                value={formData.instock}
                onChange={handelChange}
                />
              </div>
              <div className=' modal-footer'>
                <button type='button' className='btn btn-secondary' onClick={onClose}>Close</button>
                <button type='button' className='btn btn-primary' onClick={handleSave}>Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProductModal


