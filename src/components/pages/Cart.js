import React, { useContext } from 'react';
import { DataContext } from '../data/context';
import '../css/Cart.css';
import '../css/Details.css';

const Cart = () => {
	const { cart, addItem, removeItem } = useContext(DataContext);
	const itemsAmount = cart.reduce((a, c) => a + c.amount * c.qty, 0);
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
					<img src={item.images} alt={item.name} />
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
				{cart.length !== 0 && <h3>Total: ${itemsAmount}</h3>}
			</div>
			{/* <div className='total'>
        {
          cart.length !== 0 && (
            <>
            <Link to='/payment'>Payment</Link>
            <div> 
            <div className='row'>
              <div className='col-2'><h2>Item Price: ${itemsAmount.toFixed(2)}</h2></div>
            </div>
            <div className='row'>
              <div className='col-2'><h3>Tax Price: ${itemsAmount.toFixed(2)}</h3></div>
            </div>
            <div className='row'>
              <div className='col-2'><h3>Shipping Price: ${itemsAmount.toFixed(2)}</h3></div>
            </div>
            <div className='row'>
              <div className='col-2'><h3>Total: ${totalAmount.toFixed(2)}</h3></div>
            </div>
            </div>
            </>
          )
        }
      </div> */}
		</section>
	);
};

export default Cart;
