import React, { useState } from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../data/context'
import { FaSignInAlt } from 'react-icons/fa'

const NavBar = () => {
	const { cart } = useGlobalContext()
	const [isToggle, setIsToggle] = useState(false)

	const mobileMenuToggle = () => {
		setIsToggle(!isToggle)
	}

	return (
		<header className='navbar sticky-top bg-white py-3 shadow-sm'>
			<div className="menu" onClick={mobileMenuToggle}>
				<i className="fa fa-bars" alt="mobile menu bar" width="20"></i>
			</div>
			<div className="logo">
				<h1>
					<Link to="/">
						<i className="fa fa-paw" style={{marginLeft: "30px"}}> PJ'S POOCH ATTIRES</i>
					</Link>
				</h1>
			</div>
			<nav style={{marginRight: "30px"}}>
				<ul className={isToggle ? "toggle" : ""}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li className='close' onClick={mobileMenuToggle}>
						<i className='fa fa-times'></i>
					</li>
				</ul>
				<div className="buttons">
					<Link to="/account/signin" className="btn btn-outline-dark ms-2">
						<FaSignInAlt />
					</Link>
					<Link to="account/register" className="btn btn-outline-dark ms-2">
						<i className="fa fa-user-plus"></i> 
					</Link>
					<Link to="/cart" className="btn btn-outline-dark ms-2">
						<i className="fa fa-shopping-cart"></i>({cart.length})
					</Link>
				</div>
			</nav>
		</header>
	);
};
export default NavBar;
