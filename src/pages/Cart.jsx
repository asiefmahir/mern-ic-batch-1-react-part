import CartItem from "../components/CartItem";
import Nav from "../components/Nav";

import {useSelector, useDispatch} from 'react-redux'

const Cart = () => {

    const cart = useSelector((state) => state.cart);

    let totalAmount = 0;

    cart.forEach(item => totalAmount += item.price * item.quantity)

    const dispatch = useDispatch()

   
    return (
        <>
            <Nav />
            <div class="account-setting__content">
                <div class="account-setting__content__title">
                    <h4>Product list in your cart</h4>
                </div>
                <div class="product-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>PRODUCT Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <CartItem key = {item.id} item = {item} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <h2 class="total-price">
                    You Total Price Will be $ {totalAmount}
                </h2>
                <div class="mt-50">
                    <button onClick={() => dispatch({type: 'CLEAR_CART'})} type="button" class="btn-big">Clear Cart</button>
                </div>
            </div>
        </>
    )
}

export default Cart