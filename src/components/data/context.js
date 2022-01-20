import React , { useState }from 'react';

const DataContext = React.createContext()

const DataProvider = ({children}) => {
    const [cart, setCart] = useState([])
	

    const addItem = (product) => {
		const existing = cart.find(ex => ex.id === product.id)
		if (existing) {
			setCart(cart.map(ex => ex.id === product.id ? {...existing, qty: existing.qty + 1 } : ex ))
		}
		else {
			setCart([...cart, {...product, qty: 1 }])
		}
	}

    const removeItem = (product) => { 
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
