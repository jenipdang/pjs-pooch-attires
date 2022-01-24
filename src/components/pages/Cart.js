import React, { useContext } from 'react';
import { DataContext } from '../data/context';
import '../css/Cart.css';
import '../css/Details.css';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom' replace with useNavigate for v6

const Cart = () => {
	const { cart, addItem, removeItem } = useContext(DataContext);
	const itemsAmount = cart.reduce((a, c) => a + c.amount * c.qty, 0);

  // let history = useHistory()

  // const continueShopping = () => {
  //   history.push('/products')
  // }

  let navigate = useNavigate()

  const handleClick = () => {
    navigate('/products')
  }
 	// const taxAmount = itemsAmount * 0.10
	// const shippingAmount = itemsAmount > 100 ? 0 : 60
	// const totalAmount = itemsAmount + taxAmount + shippingAmount

	return (
		<section className="container">
			<div className="text ">
				{cart.length === 0 && (
					<h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
						Your Shopping Cart Is Empty
					</h2>
				)}
			</div>
			{cart.map((item, index) => (
				<div className="details cart" key={index}>
					<img src={item.images.front} alt={item.name} />
					<div className="box">
						<div className="row">
							<h2>{item.name}</h2>
							<span>
								${item.amount} 
							</span>
						</div>
						<p>{item.description}</p>
						<div className="amount">
							<button className="count" onClick={() => removeItem(item)}> - </button>
              <span>{item.qty}</span>
							<button className="count" onClick={() => addItem(item)}> + </button>
						</div>
					</div>
				</div>
			))}
			<div className="total">
				{cart.length !== 0 && (
        <>
        <h3>Total: ${itemsAmount}</h3>
        <button className='btn btn-outline-dark mb-4'>CHECK OUT</button>
        <button className='btn btn-outline-dark mb-4'onClick={handleClick}>CONTINUE SHOPPING</button>
        </>
        )}
			</div>
			
		</section>
	);
};

export default Cart;
