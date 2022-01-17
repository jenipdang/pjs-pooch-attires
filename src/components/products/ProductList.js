import React from 'react'
import '../css/Products.css'
import Product from './Product'


const ProductList = ({products, addToCart }) => {

    const displayProducts = products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart}/>
    ))

    return (
        <div id="product">
            {displayProducts.length > 0 ? displayProducts : "No Result Found"}
        </div>
    )
}

export default ProductList
