import React from "react";
import { connect } from "react-redux";
import { putStateToMenuProps } from "../context/menu/MenuState";
import { MenuPizzas } from "../components/menu_components/MenuPizzas";
import CartStatus from "../components/cart/CartStatus";

const Menu = ({menu}) => {
    return (
        <div>
            <h1>Menu</h1>
            <div className="row">
                <MenuPizzas pizzas={menu}/>
                <CartStatus/>
            </div>
        </div>
    )
}

export default connect(putStateToMenuProps)(Menu)