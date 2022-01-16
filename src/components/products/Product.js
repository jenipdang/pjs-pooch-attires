import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product }) => {
	const { name, amount, description, images } = product;
	const [readMore, setReadMore] = useState(false);
	const [isFront, setIsFront] = useState(true);

	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={images.front} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Text style={{ color: 'darkred' }}>${amount}</Card.Text>
				<Button variant="dark w-100">Add to Cart</Button>
			</Card.Body>
		</Card>
	);
};

export default Product;

// import React, { useState } from 'react';
// import { Card } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import '../css/Details.css';

// const Product = ({ products, addCart }) => {
// 	const [readMore, setReadMore] = useState(false);
// 	const [isFront, setIsFront] = useState(true);

// 	return (
// 		<Card.Group>
// 			{products.map((product) => (
// 				<div className="details" key={product.id}>
// 					<div className='image' onClick={() => setIsFront(!isFront)}>
// 						{isFront ? (
// 						<img
// 							src={window.location.origin + product.images.front}
// 							alt={product.name}
// 						/>
// 					) : (
// 						<img
// 							src={window.location.origin + product.images.back}
// 							alt="Sample on Dog"
// 						/>
// 					)}
// 					</div>
// 					<div className="box">
// 						<div className="row">
// 							<h4>{product.name}</h4>
// 							<span>${product.amount}</span>
// 						</div>
// 						<p>
// 							{readMore
// 								? product.description
// 								: `${product.description.substring(0, 100)}...`}
// 							<button className="btn" onClick={() => setReadMore(!readMore)}>
// 								{readMore ? 'Show Less' : 'Read More'}
// 							</button>
// 						</p>
// 						<p>{product.care}</p>
// 						<Link
// 							to="/cart"
// 							className="cart"
// 							onClick={() => addCart(product.id)}
// 						>
// 							Add to cart
// 						</Link>
// 					</div>
// 				</div>
// 			))}
// 		</Card.Group>
// 	);
// };

// export default Product;
