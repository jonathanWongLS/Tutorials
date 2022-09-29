import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HTTPRequest";

function Home() {
    let content = null
    const url = `https://63351812849edb52d6fb621a.mockapi.io/products/?page=1&limit=10`

    let products = useAxiosGet(url)

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