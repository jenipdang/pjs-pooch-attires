import React, {useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'


const url = 'https:/localhost:3001/products'

const ProductDetails = () => {
    let {productId} = useParams
    const history = useHistory()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`url/${productId}`)
        .then(r => r.json())
        .then (product => setProduct(product))
        .catch (err => alert(err))
    }, [productId])

    const addToCart = () => {
        fetch(`url/${productId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cart: !product.cart
            }),
        })
        history.push("/products")
    }

    const { name, id, description, images, amount, care} = item
    
    return (
        <>
            <div className='details' key={id}>
                <img src={images.front} alt='item' />
                <div className='box'>
                    <h2>{name}</h2>
                    <span>{amount}</span>
                </div>
                <p>{description}</p>
                <p>{care}</p>
                <Link to='/cart' className='cart' onClick={() => addToCart(id)}>
                    Add to cart
                </Link>
            </div>
        </>
    )
}

export default ProductDetails
