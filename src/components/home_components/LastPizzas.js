import React from "react";
import { LastPizzaItem } from "./LastPizzaItem";


export const LastPizzas = ({pizzas}) => {
    if(pizzas){
        let pizza = [...pizzas]
        pizza.splice(8, pizza.length-8)
        return (
            <div className="col row">{
                pizza.map((pizza, index) =>
                    <LastPizzaItem key={index} props={pizza}/>
                )
            }</div>
        )
    }else {
        return (
            <div>
                Pizzas is empty
            </div>
        )
    }

}