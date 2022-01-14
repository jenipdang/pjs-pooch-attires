import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';
import ProductContainer from './components/products/ProductContainer'


function App() {
	return (
		<div>
			<NavBar />
      <ProductContainer />
			<Footer />
		</div>
	);
}

export default App;
