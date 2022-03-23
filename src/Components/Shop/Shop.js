import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css';


const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handelAddToCart = (product) => {
        console.log(product)
    }


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={handelAddToCart}
                    ></Product>)
                }

            </div>

            <div className="cart-container">
                <h1>Order Summary {products.length}</h1>

            </div>

        </div>
    );
};

export default Shop;