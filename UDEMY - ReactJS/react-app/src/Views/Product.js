import React, {useEffect, useState} from "react";
import axios from 'axios'
import { useParams } from "react-router";
import Loader from "../Components/Loader";

function Product() {
    const { id } = useParams()
    const url = `https://63351812849edb52d6fb621a.mockapi.io/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
    })

    let content = null

    useEffect(() => {
        setProduct({
            loading:true,
            data:null
        })
        axios.get(url).then(response => {
            setProduct({
                loading:false,
                data: response.data
            })
        })
    }, [url])
    
    if (product.loading) {
        content = <Loader></Loader>
    }

    if (product.data) {
        content = 
        <div>
            <h1 className='font-bold text-2xl mb-3'>
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.images}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
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