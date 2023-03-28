import { faArrowRight, faDeleteLeft, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart)
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total += product.price;
        totalShipping += product.shipping;
    }
    const tax = (total * 7) / 100;
    const grandTotal = total + totalShipping + tax;
    console.log(total, 'shipping', totalShipping)
    return (
        <>
            <h4 className='text-center text-2xl font-bold'>Order Summary</h4>
            <div className='flex flex-col gap-5 mt-5 font-medium'>
                <p>Selected items : {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p className='text-xl font-bold mb-5'>Grand Total: ${grandTotal.toFixed(2)}</p>
                <button className='btn bg-[#FF3030] w-full'>Clear Cart <i className='ml-2'><FontAwesomeIcon icon={faTrashCan} /></i></button>
                <button className='btn bg-[#FF9900] w-full'>Clear Cart <i className='ml-2'><FontAwesomeIcon icon={faArrowRight} /></i></button>
            </div>
        </>
    );
};

export default Cart;