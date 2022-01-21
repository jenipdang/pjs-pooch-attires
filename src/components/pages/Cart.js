import React, {useContext} from 'react'
import { DataContext } from '../data/context'
import { Link } from 'react-router-dom'
import '../css/Cart.css'
import '../css/Details.css'


const Cart = () => {
    
  const { cart, addItem, removeItem } = useContext(DataContext)
  const itemsAmount = cart.reduce((a, c) => a + c.price * c.qty, 0)
  const taxAmount = itemsAmount * 0.10
  const shippingAmount = itemsAmount > 100 ? 0 : 60
  const totalAmount = itemsAmount + taxAmount + shippingAmount
  

  return (
    <section className='container'>
      <div className='text'>
        {cart.length === 0 && <h2 style={{textAlign: 'center'}}>Your Shopping Cart Is Empty</h2>}
      </div>
      {
        cart.map((product, index) => (
          <div className='details cart' key={index}>
            <img src={product.images} alt={product.name} />
            <div className='box'>
              <div className='row'>
                <h2>{product.name}</h2>
                <span>${product.amount} x {product.qty}</span>
              </div>
              <p>{product.description}</p>
              <div className='amount'>
                <button className='count' onClick={() => removeItem(product.index)}> - </button>
                <button className='count' onClick={() => addItem(product.index)}> + </button>
              </div>
            </div>
          </div>
        ))
      }
      <div className='total'>
        {
          cart.length !== 0 && (
            <>
            <Link to='/payment'>Payment</Link>
            <div> 
            <div className='row'>
              <div className='col-2'><h2>Item Price: ${itemsAmount.toFixed(2)}</h2></div>
            </div>
            <div className='row'>
              <div className='col-2'><h3>TAx Price: ${itemsAmount.toFixed(2)}</h3></div>
            </div>
            <div className='row'>
              <div className='col-2'><h3>Shippig Price: ${itemsAmount.toFixed(2)}</h3></div>
            </div>
            <div className='row'>
              <div className='col-2'><h3>Total: ${totalAmount.toFixed(2)}</h3></div>
            </div>
            </div>
            </>
          )
        }
      </div>
    </section>
      

  )
}

export default Cart
