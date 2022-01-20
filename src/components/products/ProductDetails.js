import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import Loading from '../pages/Loading';
import { Card } from 'react-bootstrap';
import '../css/Details.css';
import { DataContext } from '../data/context';

const ProductDetails = () => {
	const { addItem } = useContext(DataContext)
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
	}, [id]);

	const displayProduct = () => {
		const { id, name, images, amount, description, care } = product;
		return (
			<Card>
				<div className="details">
					<div className="image">
						<img src={window.location.orgin + 'images/' + images} alt={name} />
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
                        <button className='btn btn-outline-dark px-4 py-2' onClick={() => addItem(id)}>
                            Add to Cart
                        </button>
					</div>
				</div>
			</Card>
		);
	};

	return (
		<div>
			<div className="container py-5">
				<div className="row py-4">
					{loading ? <Loading /> : displayProduct()}
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
