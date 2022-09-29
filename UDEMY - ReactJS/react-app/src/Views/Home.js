import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";

function Home() {
    let content = null
    const url = `https://63351812849edb52d6fb621a.mockapi.io/products/?page=1&limit=10`
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProducts({
            loading:true,
            data:null,
            error: false
        })
        axios.get(url).then(response => {
            setProducts({
                loading:false,
                data: response.data,
                error: false
            })
        })
        .catch(error => {
            setProducts({
                loading: false,
                data: null,
                error:true
            })
        })
    }, [url])

    if (products.error) {
        content = <p>There was an error please refresh or try again later</p>
    }

    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.data) {
        content = 
        products.data.map((product, key) => 
            <div key={product.id}>
                <ProductCard
                    product={product}/>
            </div>
        )
    }

    return (
        <div>
            <h1 className='font-bold text-2xl'>
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home