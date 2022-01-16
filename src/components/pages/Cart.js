import React, { useState, useEffect } from 'react'
import Product from '../products/Product'

const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://localhost:3001/products')
    .then(r => r.json())
    .then(data => {
      const cartItem = data.filter((product) => !!product.cart)
      setCart(cartItem)
    })
  }, [])

  const addCart = cart.map(product => <Product key={product.id} product={product} />)

  return (
    <div>
      <h2>Shopping Cart</h2>
    </div>
  )
}

export default Cart
