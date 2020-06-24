import React, {useState} from "react";
import { PizzaSize } from "./PizzaSize";
import { RemoveFromCart } from "../../context/cart/CartState";


export const CartItem = ({props, index, setOrderSizes}) => {
    const [price, setPrice] = useState(props.sizes[0].price[0].usd)
    const [amount, setAmount] = useState(1)
    return(
        <tr>
            <td className="">{props.id}</td>
            <td className="">{props.name}</td>
            <td className="">{price + 'usd'}</td>
            <td className=""><input onChange={event => setAmount(event.target.value)} type="number" className="pizza_count" defaultValue={1} min={1}/></td>
            <td className=""><PizzaSize amount={amount} sizes={props.sizes} setPrice={setPrice} setOrderSizes={setOrderSizes}/></td>
            <td className=""><button type="button" className="btn btn-danger" onClick={() => {
                RemoveFromCart(index)
            }
            }>&times;</button></td>
        </tr>
    )
}