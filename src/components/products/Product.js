import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Details.css';

const Product = ({ product, addToCart }) => {
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
						<h2>{name}</h2>
						<span>${amount}</span>
					</div>
					<p>
						{readMore ? description : `${description.substring(0, 100)}...`}
						<button className="btn" onClick={() => setReadMore(!readMore)}>
							{readMore ? 'Show Less' : 'Read More'}
						</button>
					</p>
					<p>{care}</p>
					<Link to="/cart" className="cart" onClick={() => addToCart(id)}>
						Add to cart
					</Link>
				</div>
			</div>
		</Card>
	);
};

export default Product;
