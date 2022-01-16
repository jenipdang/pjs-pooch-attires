import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../css/Details.css'

const Product = ({ product, addCart }) => {
	const { id, name, amount, description, images, care } = product;
	const [readMore, setReadMore] = useState(false);
	const [isFront, setIsFront] = useState(true);

	return (
		<Card>
			<div className='details' key={id}>
				<img src={images.front} alt='item'/>
				<div className='box'>
					<div className='row'>
						<h2>{name}</h2>
						<span>${amount}</span>
					</div>
					<p>{description}</p>
					<p>{care}</p>
					<Link to='/cart' className='cart' onClick={() => addCart(id)}>
						Add to cart
					</Link>
				</div>
			</div>
		</Card>
		// <Card md={6} style={{ width: '18rem' }} onClick={() => setIsFront(!isFront)}>
		// 	{isFront ? <Card.Img variant="top" src={images.front}/> : <Card.Img variant="top" src={images.back}/>}
		// 	<Card.Body>
		// 		<Card.Title>{name}</Card.Title>
		// 		<Card.Text>{readMore ? description : `${description.substring(0, 100)}...`}
		// 		<button className='btn' onClick={() => setReadMore(!readMore)}>
		// 			{readMore ? 'Show Less' : 'Read More'}
		// 		</button>
		// 		</Card.Text>
		// 		<Card.Text>{care}</Card.Text>
		// 		<Card.Text style={{ color: 'darkred' }}>${amount}</Card.Text>
		// 		<Button variant="dark w-100">Add to Cart</Button>
		// 	</Card.Body>
		// </Card>

	);
};

export default Product;