import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../css/Details.css';

const Product = ({ product, handleClick }) => {
	const { id, name, amount, description, images, care } = product;
	const [readMore, setReadMore] = useState(false);
	const [isFront, setIsFront] = useState(true);

	return (
		<Card>
			<div className="details" key={id}>
				<div className='image' onClick={() => setIsFront(!isFront)}>
				{isFront ? (
					<img src={images.front} alt="item" />
				) : (
					<img src={images.back} alt="item" />
				)}
				</div>
				<div className="box">
					<div className="row">
						<a className='nav-link' style={{color: "black"}} href={`/products/${id}`}><h2>{name}</h2></a>
						<span>${amount}</span>
					</div>
					<p>
						{readMore ? description : `${description.substring(0,100)}...`}
						<button className="btn" onClick={() => setReadMore(!readMore)}>
							{readMore ? 'Show Less' : 'Read More'}
						</button>
					</p>
					<p>{care}</p>
					<NavLink to='/cart' className="cart" onClick={() => handleClick(id)}>
						Add to cart
					</NavLink>
				</div>
			</div>
		</Card>
	);
};

export default Product;
