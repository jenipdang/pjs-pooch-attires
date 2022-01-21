import React , { useState, useEffect }from 'react';

const DataContext = React.createContext()

const DataProvider = ({children}) => {
    const [cart, setCart] = useState([])
	const [product, setProduct] = useState([])

	
	const getProduct = async () => {
		try {
			const response = await fetch('http://localhost:3001/products/');
			const data = await response.json();
			setProduct(data)
		} catch (error) {
			alert (error)
		}
	}
	
	useEffect(() => {
		getProduct()
	}, [])
	
	
    const addItem = (id) => {
		const existing = cart.find(ex => ex.id === product.id)
		if (existing) {
			setCart(cart.map(ex => ex.id === product.id ? {...existing, qty: existing.qty + 1 } : ex ))
		}
		else {
			setCart([...cart, {...product, qty: 1 }])
		}
	}

    const removeItem = (id) => { 
		const existing = cart.find(ex => ex.id === product.id)
		if (existing) {
			setCart(cart.filter((ex) => ex.id !== product.id))
		} else {
			setCart(cart.map(ex => ex.id === product.id ? {...existing, qty: existing.qty - 1 } : ex))
		}
		
	}

  return (
      <div>
          <DataContext.Provider value={{cart, addItem, removeItem}}>
              {children}
          </DataContext.Provider>
      </div>
  )
};

export {DataProvider, DataContext};
