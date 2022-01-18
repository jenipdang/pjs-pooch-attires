import React from 'react'
import Product from '../products/Product'


const Cart = ({ products, removeItem }) => {
  const shoppingCartList = products.map((product) => <Product key={product.id} product={product} handleclick={removeItem} />)
 

  return (
    <div>
      <h2>Shopping Cart</h2>
      {shoppingCartList}
    </div>
  )
}

export default Cart
