import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Loading from '../pages/Loading';
import { Card } from 'react-bootstrap';

const ProductDetails = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getProduct = async () => {
			setLoading(true);
			const r = await fetch(` http://localhost:3001/products/${id}`);
			setProduct(await r.json());
			setLoading(false);
		};
		getProduct();
	}, []);

	const displayProduct = () => {
		const { name, images, amount, description, care } = product;
		return (
			<Card>
				<div className="details">
					<div className="image">
						<img src={window.location.orgin + 'images/' } alt={name} />
					</div>
					<div className="box">
						<div className="row">
							<h2>{name}</h2>
							<span>${amount}</span>
						</div>
						<p>
							{description}
		
						</p>
						<p>{care}</p>

					</div>
				</div>
			</Card>
		);
	};

	return (
		<div>
			<div>
				<div className="container">
					{loading ? <Loading /> : displayProduct()}
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
