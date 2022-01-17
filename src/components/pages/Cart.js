import React from 'react'
import Product from '../products/Product'


const Cart = ({ products, removeFromCart }) => {
  const shoppingCartList = products.map((product) => <Product key={product.id} product={product} removeFromCart={removeFromCart} />)
 

  return (
    <div>
      <h2>Shopping Cart</h2>
      {shoppingCartList}
    </div>
  )
}

export default Cart
