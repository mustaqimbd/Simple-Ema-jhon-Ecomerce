import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCard = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
        console.log(newCart)
    }
    return (
        <div className='ml-10 flex justify-between gap-5 mx-auto'>
            <div className='w-[75%] grid grid-cols-3 gap-3 mt-5'>

                {
                    products.map(product =><Product product={product} key={product.id} handleAddToCard={handleAddToCard}></Product>)
                }

            </div>
            <div className='w-[25%] bg-[#FFE0B3] p-4 sticky top-0 h-[500px]'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;