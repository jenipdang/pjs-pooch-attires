import React from 'react';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Signin from './components/account/Signin';
import Signup from './components/account/Signup';
import Account from './components/account/Account';
import ProductContainer from './components/products/ProductContainer';
import Cart from './components/cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div>
				<NavBar />
				<Routes>
					<Route path="/products" element={<ProductContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/account/signin" element={<Signin />} />
					<Route path="/account/signup" element={<Signup />} />
					<Route path="/account" element={<Account />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
