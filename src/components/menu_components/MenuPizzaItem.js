import React from "react";
import image from "../../pub/logo192.png"
import { AddToCart } from "../../context/cart/CartState";
import {baseUrl} from "../../common/ApiHeplper";

export const MenuPizzaItem = ({props}) => {
    return (
        <div className={`col-4 mb-4 pizza_${props.id}`}>
            <div className="card h-100">
                <img src={baseUrl+'img/'+props.image || image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="row pizzaDescription">
                        <p className="card-text col">Ingredients: </p>
                        <ul>{props.ingredients && props.ingredients.map((elem,iter)=>
                            <li key={iter+'ingredient'}>{elem.name}</li>
                        ) }</ul>
                        <button className="btn btn-primary btn-lg"
                            onClick={
                                () => {
                                    AddToCart(props)
                                }
                            }
                        >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}