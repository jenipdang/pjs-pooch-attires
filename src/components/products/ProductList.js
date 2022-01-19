import React from 'react'
import '../css/Products.css'
import Product from './Product'


const ProductList = ({products, addItem, removeItem}) => {

    const displayProducts = products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} removeItem={removeItem}/>
    ))

    return (
        <div id="product">
            {displayProducts.length > 0 ? displayProducts : "No Result Found"}
        </div>
    )
}

export default ProductList
