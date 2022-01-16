import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product }) => {
	const { name, amount, description, images, care } = product;
	const [readMore, setReadMore] = useState(false);
	const [isFront, setIsFront] = useState(true);

	return (
		<Card style={{ width: '18rem' }} onClick={() => setIsFront(!isFront)}>
			{isFront ? <Card.Img variant="top" src={images.front}/> : <Card.Img variant="top" src={images.back}/>}
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{readMore ? description : `${description.substring(0, 100)}...`}
				<button className='btn' onClick={() => setReadMore(!readMore)}>
					{readMore ? 'Show Less' : 'Read More'}
				</button>
				</Card.Text>
				<Card.Text>{care}</Card.Text>
				<Card.Text style={{ color: 'darkred' }}>${amount}</Card.Text>
				<Button variant="dark w-100">Add to Cart</Button>
			</Card.Body>
		</Card>

	);
};

export default Product;