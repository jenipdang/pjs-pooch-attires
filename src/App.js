import React from 'react';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';
import Home from './components/pages/Home';
import Signin from './components/account/Signin';
import Register from './components/account/Register';
import Account from './components/account/Account';
import ProductContainer from './components/products/ProductContainer';
import Cart from './components/pages/Cart';
import About from './components/pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'


function App() {
	return (
		<BrowserRouter>
			<>
				<NavBar />
				<Routes>
					<Route path="/products" element={<ProductContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/account/signin" element={<Signin />} />
					<Route path="/account/register" element={<Register />} />
					<Route path="/account" element={<Account />} />
				</Routes>
				<Footer />
			</>
		</BrowserRouter>
	);
}

export default App;
