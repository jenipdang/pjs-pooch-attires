import React, { useState } from 'react';
// import { Card } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';


const Product = ({products, addCart }) => {

	return (
		<div className="col-md-9">
		<div className="row">
			{products.map((product) => {
				const {id, name, amount, images, description, care, like, availability} = product
				return (
					<>
						<div className="col-md-3 mb-4" key={id}>
							<div className="card" >
								<img
									src={images.front}
									className="card-img-top"
									alt="Product"
								/>
								<div className="card-body">
									<h5 className="card-title">{name}</h5>
									<p>Price: {amount}</p>
									<p className="card-text">
										{description}
									</p>
									<button className="btn btn-dark">Add to Cart</button>
								</div>
							</div>
						</div>
					</>
				);
			})}
		</div>
	</div>
	)
}

export default Product

// const Product = ({ products, addCart }) => {
// 	const [readMore, setReadMore] = useState(false);

// 	return (
// 		<Card>
// 			{products.map((product) => (
// 				<div className="details" key={product.id}>
// 					<img
// 						src={window.location.origin + product.images.front}
// 						alt={product.name}
// 					/>
// 					<div className="box">
// 						<div className="row">
// 							<h2>{product.name}</h2>
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
// 		</Card>
// 	);
// };

// export default Product;
