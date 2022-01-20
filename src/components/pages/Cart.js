import React, {useContext} from 'react'
import { DataContext } from '../data/context'
import { Link } from 'react-router-dom'
import '../css/Cart.css'


const Cart = () => {
    
  const { cart, addItem, removeItem } = useContext(DataContext)

  const itemsAmount = cart.reduce((a, c) => a + c.price * c.qty, 0)
  const taxAmount = itemsAmount * 0.10
  const shippingAmount = itemsAmount > 100 ? 0 : 60
  const totalAmount = itemsAmount + taxAmount + shippingAmount
  

  return (
    <>
      <div className='text'>
        {cart.length === 0 && <h2 style={{textAlign: 'center'}}>Your Shopping Cart Is Empty</h2>}
      </div>
      {
        cart.map((item) => (
          <div className='details cart' key={item.id}>
            <img src={item.images.front} alt={item.name} />
            <div className='box'>
              <div className='row'>
                <h2>{item.name}</h2>
                <span>${item.amount} x {item.qty}</span>
              </div>
              <p>{item.description}</p>
              <div className='amount'>
                <button className='count' onClick={() => removeItem(item.id)}> - </button>
                <button className='count' onClick={() => addItem(item.id)}> + </button>
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
            <hr>
            <div className='row'>
              <div className='col-2'><h3>Item Price: ${itemsAmount.toFixed(2)}</h3></div>
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
            </hr>
            </>
          )
        }
      </div>
    </>
      

  )
}

export default Cart
