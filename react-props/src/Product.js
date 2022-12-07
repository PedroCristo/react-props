import React from 'react'

function Product(props) {
  return (

    <div className='product-details'>
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
        <h3>€{props.price}</h3>
    </div>
  
  )
}

export default Product