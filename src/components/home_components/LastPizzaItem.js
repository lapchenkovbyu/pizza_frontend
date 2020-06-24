import React from "react";
import image from "../../pub/logo192.png"
import { NavLink} from "react-router-dom";
import {baseUrl} from "../../common/ApiHeplper";

export const LastPizzaItem = ({props}) => {
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
                                <NavLink
                                    className="nav-link btn btn-primary btn-lg"
                                    to="/menu"
                                >
                                    Open in menu
                                </NavLink>
                            </div>
                        </div>
                </div>
            </div>
    )
}