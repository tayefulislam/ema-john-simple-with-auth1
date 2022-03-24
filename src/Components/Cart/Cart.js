import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    console.log(cart)


    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;

    }

    // tax
    const tax = parseFloat((total * 0.10).toFixed(2));


    const grandTotal = total + shipping + tax;


    return (
        <div className='cart'>

            <h3 >Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h5>Grand Total : {grandTotal}</h5>

        </div>
    );
};

export default Cart;