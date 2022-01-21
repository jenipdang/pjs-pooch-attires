import React, { useContext } from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';
// import { DataContext } from '../data/context'

// const NavBar = () => {
// 	const { cart } = useContext(DataContext)
// 	return (
// 		<nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
// 			<div className="container">
// 				<NavLink className="navbar-brand fw-bold fs-4" to="/">
// 					<i className="fa fa-paw"> PJ'S POOCH ATTIRES</i>
// 				</NavLink>
// 				<button
// 					className="navbar-toggler"
// 					type="button"
// 					data-bs-toggle="collapse"
// 					data-bs-target="#navbarSupportedContent"
// 					aria-controls="navbarSupportedContent"
// 					aria-expanded="false"
// 					aria-label="Toggle navigation"
// 				>
// 					<span className="navbar-toggler-icon"></span>
// 				</button>
// 				<div className="collapse navbar-collapse" id="navbarSupportedContent">
// 					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
// 						<li className="nav-item">
// 							<NavLink className="nav-link" aria-current="page" to="/">
// 								Home
// 							</NavLink>
// 						</li>
// 						<li className="nav-item">
// 							<NavLink className="nav-link" to="/products">
// 								Products
// 							</NavLink>
// 						</li>
// 						<li className="nav-item">
// 							<NavLink className="nav-link" to="/about">
// 								About
// 							</NavLink>
// 						</li>
// 					</ul>
// 					<div className="buttons">
// 						<NavLink to="/account/signin" className="btn btn-outline-dark ms-2">
// 							<i className="fa fa-sign-in me-1"></i> Sign In
// 						</NavLink>
// 						<NavLink to="account/register" className="btn btn-outline-dark ms-2">
// 							<i className="fa fa-user-plus me-1"></i> Register
// 						</NavLink>
// 						<NavLink to="/cart" className="btn btn-outline-dark ms-2">
// 							<i className="fa fa-shopping-cart me-1"></i> Cart {cart.length}
// 						</NavLink>
// 					</div>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

const NavBar = () => {
	return (
		<header>
			<div className="menu">
				<i className="fa fa-bars" alt="mobile menu bar"></i>
			</div>
			<div className="logo">
				<h1>
					<Link to="/">
						<i className="fa fa-paw"> PJ'S POOCH ATTIRES</i>
					</Link>
				</h1>
			</div>
			<nav>
				<ul className="toggle">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
				<div className="buttons">
					<Link to="/account/signin" className="btn btn-outline-dark ms-2">
						<i className="fa fa-sign-in me-1"></i> Sign In
					</Link>
					<Link to="account/register" className="btn btn-outline-dark ms-2">
						<i className="fa fa-user-plus me-1"></i> 
					</Link>
					<Link to="/cart" className="btn btn-outline-dark ms-2">
						<i className="fa fa-shopping-cart me-1"></i>(0)
					</Link>
				</div>
			</nav>
		</header>
	);
};
export default NavBar;
