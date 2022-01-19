import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Loading from '../pages/Loading'
import Product from './Product'


const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const r = await fetch(`https://localhost:3001/products/${id}`) 
            setProduct(await r.json())
            setLoading(false)
        }
        getProduct()
    }, [])

    

  return <div>
      <div>
          <div className='container'>
              {loading ? <Loading /> : <Product />}
          </div>
      </div>
  </div>;
};

export default ProductDetails;