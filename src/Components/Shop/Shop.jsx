import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='lg:container flex justify-between mt-5'>
            <div className='w-[75%] grid grid-cols-3 gap-3'>

                {
                    products.map(product =><Product product={product} key={product.id}></Product>)
                }

            </div>
            <div className='w-[25%]'>
                <h4 className='text-center text-xl'>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;