import React, {useEffect, useState} from "react";
import axios from 'axios'
import { useParams } from "react-router";

function Product() {
    const { id } = useParams()
    const url = `https://63351812849edb52d6fb621a.mockapi.io/products/${id}`
    const [product, setProduct] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url).then(response => {
            setProduct(response.data)
        })
    }, [url])
    
    if (product) {
        content = 
        <div>
            <h1 className='font-bold text-2xl mb-3'>
                {product.name}
            </h1>
            <div>
                <img
                    src={product.images}
                    alt={product.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.price}
            </div>
            <div>
                {product.description}
            </div>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product