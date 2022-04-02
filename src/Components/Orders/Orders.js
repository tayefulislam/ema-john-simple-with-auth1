import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProduct from '../hooks/useProducts';
import ReviewCart from '../ReviewCart/ReviewCart';

const Orders = () => {

    const [products, setProducts] = useProduct();

    const [cart, setCart] = useCart(products)

    const handleRemoveItem = (product) => {

        const restItem = cart.filter(pd => pd.id !== product.id)

        setCart(restItem)
        removeFromDb(product.id)

    }


    return (
        <div className='shop-container'>

            <div className=''>

                {
                    cart.map(product => <ReviewCart
                        key={product.id}
                        product={product}
                        removeItem={handleRemoveItem}></ReviewCart>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <Link to='/shop'> <button>Proceed Checkout</button> </Link>


                </Cart>
            </div>

        </div>
    );
};

export default Orders;