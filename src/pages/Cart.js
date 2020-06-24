import React from "react";
import {connect} from "react-redux";
import {ConfirmOrder, PutStateToCartProps} from "../context/cart/CartState";
import {CartItem} from "../components/cart/CartItem";
import {ConfirmModal} from "../components/cart/ConfirmModal";

const Cart = ({cart}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let initialSizeDataState;

    cart && cart.map(elem => {
        console.log(elem)
        initialSizeDataState = {...initialSizeDataState, ...{[elem.id]:{...elem.sizes[0], amount: 1}}}
    })
    const [sizeData, setSizeData] = React.useState(initialSizeDataState)
    console.log(sizeData)

    const setOrderSizes = (payload) => {
        if(!sizeData){
            setSizeData({[cart[0].id]: payload})
        }

        cart.map(elem => {
            elem.sizes.map(size => {
                if(size.id === payload.id){
                    setSizeData({...sizeData,[elem.id]: payload})
                    console.log(sizeData)
                }
            })
        })
    }
    // console.log(sizeData)
    return (
        <div className="">
            <div className="cart">
                <h1>Cart</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>price (USD)</th>
                        <th>amount</th>
                        <th>size</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cart && cart.map((element, index) => {
                            return (
                                <CartItem props={element} index={index} key={index} setOrderSizes={setOrderSizes}/>
                            )
                        })

                    }
                    </tbody>
                    <tfoot>

                    <tr>
                        <td>
                            <button className="btn btn-success" onClick={handleClickOpen}>Confirm order</button>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
            <ConfirmModal handleClose={handleClose} open={open}  cartData={sizeData}/>
        </div>
    )
}

export default connect(PutStateToCartProps)(Cart)