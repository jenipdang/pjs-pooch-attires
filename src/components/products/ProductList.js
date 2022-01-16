import React from 'react'
// import '../css/Details.css'
import Product from './Product'


const ProductList = ({products}) => {

    const displayProducts = products.map((product) => (
        <Product key={product.id} product={product}/>
    ))

    return (
        <div>
            {displayProducts.length > 0 ? displayProducts : "No Result Found"}
        </div>
    )
}

export default ProductList
