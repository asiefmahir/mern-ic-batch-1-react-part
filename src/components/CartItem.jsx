import {useState} from 'react';
import {useDispatch} from 'react-redux'

import {icons} from '../assets'
import { modifyQuantityOfAnItem, removeItemFromCart } from '../store/actions/cart';

function CartItem({item}) {
    const [itemQuantity, setItemQuantity] = useState(item.quantity)

    const dispatch = useDispatch()

    return (
        <tr>
            <td>
                <div class="product">
                    <img
                        src = {item.image}
                        class="product-img"
                        alt=""
                    />
                    
                </div>
            </td>
            <td><p>{item.title}</p></td>
            <td>$ {item.price}</td>
            <td>
                <div class="qty_input">
                    <button
                        class="qty-count qty-count--minus"
                        data-action="minus"
                        type="button"
                    >
                        <figure onClick={() => {
                                setItemQuantity((prev) => prev - 1);
                                dispatch(modifyQuantityOfAnItem({id: item.id, quantity: itemQuantity - 1}))
                            }}>
                            <img src= {icons.minusIcon}  alt = ""/>
                        </figure>
                    </button>
                    <input
                        class="product-qty"
                        type="number"
                        name="product-qty"
                       
                        value= {itemQuantity}
                        onChange={(e) => {
                            setItemQuantity(parseInt(e.target.value))
                            dispatch(modifyQuantityOfAnItem({id: item.id, quantity: parseInt(e.target.value)}))
                        }}
                        min ='1'
                    />
                    <button
                        class="qty-count qty-count--add"
                        data-action="add"
                        type="button"
                    >
                        <figure onClick={() => {
                                setItemQuantity((prev) => prev + 1);
                                dispatch(modifyQuantityOfAnItem({id: item.id, quantity: itemQuantity + 1}))
                            }}>
                            <img  src={icons.plusIcon} alt = ""/>
                        </figure>
                    </button>
                </div>
            </td>
            <td>$  {item.quantity ? item.price * item.quantity : 0}</td>
            <td>
                <img onClick={() => dispatch(removeItemFromCart(item.id))} class="cross-icon" src = {icons.crossIcon} alt =""/>
            </td>
        </tr>
    )
}

// 10 * 2 = 20

// modifyQuantityOfAnItem(item.id, itemQuantity - 1) = {
//         type: "MODIFY_QUANTITY_OF_AN_ITEM",
//         payload: {id: item.id, quantity: itemQuantity - 1}
//     }

// dispatch({
//         type: 'REMOVE_ITEM',
//         payload : {id: item.id}
//     })

export default CartItem