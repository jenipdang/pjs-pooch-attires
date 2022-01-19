import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Loading from '../pages/Loading';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import '../css/Details.css';

const ProductDetails = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(false);
	const [shoppingCartItems, setShopingCartItems] = useState([])

	useEffect(() => {
		const getProduct = async () => {
			setLoading(true);
			const r = await fetch(` http://localhost:3001/products/${id}`);
			setProduct(await r.json());
			setLoading(false);
		};
		getProduct();
	}, []);

	const addItem = (product) => {
		const existing = shoppingCartItems.find(ex => ex.id === product.id)
		if (existing) {
			setShopingCartItems(shoppingCartItems.map(ex => ex.id === product.id ? {...existing, qty: existing.qty + 1 } : ex ))
		}
		else {
			setShopingCartItems([...shoppingCartItems, {...product, qty: 1 }])
		}
	}

	const removeItem = (product) => { 
		const existing = shoppingCartItems.find(ex => ex.id === product.id)
		if (existing) {
			setShopingCartItems(shoppingCartItems.filter((ex) => ex.id !== product.id))
		} else {
			setShopingCartItems(shoppingCartItems.map(ex => ex.id === product.id ? {...existing, qty: existing.qty - 1 } : ex))
		}
		
	}

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
                        <button className='btn btn-outline-dark px-4 py-2'>
                            Add to Cart
                        </button>
                        <NavLink to='/cart' className='btn btn-dark ms-2 px-3 py-2'>
                            Go to Cart
                        </NavLink>
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
