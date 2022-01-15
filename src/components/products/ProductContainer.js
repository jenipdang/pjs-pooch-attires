import React, { useState, useEffect } from 'react';
import Search from './Search';
import ProductList from './ProductList';
import { Container } from 'semantic-ui-react';
import FilterCategory from './FilterByCategory';

const url = 'http://localhost:3001/products';

const ProductContainer = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	const fetchProducts = async () => {
		setLoading(true);

		try {
			const response = await fetch(url);
			const data = await response.json();
			setLoading(false);
			setProducts(data);
			setSearchResult(data);
		} catch (error) {
			setLoading(false);
			alert(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	if (loading) {
		return 'Loading...';
	}

	const filterResult = (categoryItem) => {
        setSearch(search)
		if (categoryItem === 'All') {
			setSearchResult(products);
			return;
		}
		const result = products.filter((currentData) => {
			return currentData.category === categoryItem;
		});
		setSearchResult(result);
	};

	const searchHandler = (search) => {
		if (search !== '') {
			const newProduct = searchResult.filter((product) => {
				return Object.values(product)
					.join(' ')
					.toLowerCase()
					.includes(search.toLowerCase());
			});
            setSearchResult(newProduct)
		} else {
            setSearchResult(products)
        }
	};

	return (
		<Container>
			<Search products={products} term={search} searchKeyword={searchHandler} />
			<FilterCategory products={products} filterResult={filterResult} />
			<ProductList products={searchResult} />
		</Container>
	);
};

export default ProductContainer;
