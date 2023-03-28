import React from 'react';

const Product = ({product}) => {
    const { name, price, img, seller, ratings } = product;
    // console.log(product)
    return (<div className="card card-compact w-full bg-base-100 shadow-xl border border-[#95A0A7]">
        <figure><img className='h-[248px] w-full mt-1 mx-1' src={img ? img : 'null'} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className='text-lg mb-5'>Price : $ {price}</p>
            <p className='mb-0 pb-0'>Manufacturer : {seller}</p>
            <p>Rating : {ratings} start</p>
            <div className="card-actions">
                <button className="btn bg-[#FFE0B3] text-black hover:bg-[#FFE0B3] w-full">Add to Cart  <i className="fa-solid fa-cart-plus pl-2"></i></button>
            </div>
        </div>
    </div>)
};

export default Product;