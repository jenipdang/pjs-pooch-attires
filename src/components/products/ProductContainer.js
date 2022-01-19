import React, { useState, useEffect } from 'react';
import Search from './Search';
import ProductList from './ProductList';
import { Container } from 'semantic-ui-react';
import Loading from '../pages/Loading';
import FilterCategory from './FilterByCategory';


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

	const addItem = (product) => {
		const exist = shoppingCartItems.find(ex => ex.id === product.id)
		if (exist) {
			setShopingCartItems((...shoppingCartItems, {...product, qty: 1 } : x ))
		}
	
	}

	const removeItem = (productObj) => {
		setShopingCartItems((cart) => cart.filter((product) => product.id !== productObj.id))
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

	return (
		<Container>
			<Search products={products} term={search} searchKeyword={searchHandler} />
			<FilterCategory filterResult={filterResult} />
			<ProductList products={searchResult} addItem={addItem}/>
		</Container>
	);
};

export default ProductContainer;
