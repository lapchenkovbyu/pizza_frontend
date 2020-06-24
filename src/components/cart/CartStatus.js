import React from "react";
import { connect } from "react-redux";
import { PutStateToCartProps } from "../../context/cart/CartState";
import { NavLink } from "react-router-dom";

const CartStatus = ({cart}) => {
    return (
        <div className="col-4">
            <div className="jumbotron">
                <h1 className="display-6">Pizzas in cart : </h1>
                {!cart && (<h1 className="display-6">Cart is empty</h1>) ||
                cart && (<h1 className="display-6">{cart.length}</h1>)}
                <hr className="my-4"/>
                <h1 className="display-6">Total : </h1>
                {!cart && (<h1 className="display-6">Cart is empty</h1>) ||
                cart && (<h1 className="display-6">{cart.total}</h1>)}
                <NavLink
                    className="btn btn-primary btn-lg"
                    to="/cart"
                >
                    Go to cart
                </NavLink>
            </div>
        </div>
    )
}

export default connect(PutStateToCartProps)(CartStatus)
