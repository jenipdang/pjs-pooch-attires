import React, {useState} from 'react'
import { Card } from "semantic-ui-react"
import { Link } from 'react-router-dom'
// import './css/Details.css'

const Product = ({products, addCart}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <Card>
        {
            products.map(product =>(
                <div className="details" key={product.id}>
                    <img src={window.location.origin + product.images.front} alt=""/>
                    <div className="box">
                        <div className="row">
                            <h2>{product.name}</h2>
                            <span>${product.amount}</span>
                        </div>
                        <p>{product.description}</p>
                        <p>{product.care}</p>
                        <Link to="/cart" className="cart" onClick={() => addCart(product.id)}>
                            Add to cart
                        </Link>
                    </div>
                </div>
            ))
        }
    </Card>
    )
}

export default Product
