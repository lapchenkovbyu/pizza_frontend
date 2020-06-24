import React from "react";
import { MenuPizzaItem } from "./MenuPizzaItem";


export const MenuPizzas = ({pizzas}) => {
    return (
        <div className="col-8 row">{
            pizzas && pizzas.map((pizza, index) =>
                <MenuPizzaItem key={index} props={pizza}/>
            )
        }</div>
    )
}