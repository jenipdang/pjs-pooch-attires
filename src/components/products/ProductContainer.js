import React, { useState, useEffect } from 'react';
import Search from './Search';
import ProductList from './ProductList';
import { Container } from 'semantic-ui-react';
import Loading from '../pages/Loading';
import FilterCategory from './FilterByCategory';
import Cart from '../pages/Cart'


const url = 'http://localhost:3001/products';

const ProductContainer = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [shoppingCartItems, setShopingCartItems] = useState([])


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
		return <div>
            <Loading />
        </div>;
	}

	const filterResult = (categoryItem) => {
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
        setSearch(search)
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

	const addItem = (productItem) => {
		const existing = shoppingCartItems.find(ex => ex.id === productItem.id)
		if (existing) {
			setShopingCartItems(shoppingCartItems.map(ex => ex.id === productItem.id ? {...existing, qty: existing.qty + 1 } : ex ))
		}
		else {
			setShopingCartItems([...shoppingCartItems, {...productItem, qty: 1 }])
		}
	}

	const removeItem = (productItem) => { 
		const existing = shoppingCartItems.find(ex => ex.id === productItem.id)
		if (existing) {
			setShopingCartItems(shoppingCartItems.filter((ex) => ex.id !== productItem.id))
		} else {
			setShopingCartItems(shoppingCartItems.map(ex => ex.id === productItem.id ? {...existing, qty: existing.qty - 1 } : ex))
		}
		
	}

	return (
		<>
		<Container>
			<Search products={products} term={search} searchKeyword={searchHandler} />
			<FilterCategory filterResult={filterResult} />
			<ProductList products={searchResult} addItem={addItem}/>
			<Cart shoppingCartItems={shoppingCartItems} addItem={addItem} removeItem={removeItem}/> 
		</Container>
		</>
	);
};

export default ProductContainer;
