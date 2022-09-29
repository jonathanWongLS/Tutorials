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
        error: false
    })

    let content = null

    useEffect(() => {
        setProduct({
            loading:true,
            data:null,
            error: false
        })
        axios.get(url).then(response => {
            setProduct({
                loading:false,
                data: response.data,
                error: false
            })
        })
        .catch(error => {
            setProduct({
                loading: false,
                data: null,
                error:true
            })
        })
    }, [url])
    
    if (product.error) {
        content = <p>There was an error please refresh or try again later</p>
    }

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
                    src={product.data.images[0].imageURL}
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