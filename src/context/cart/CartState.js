import React from "react";
import { store } from "../../App";
import { addToCart, calcTotalPrice, confirmOrder, removeFromCart } from "./cartActions";
import { loadOrderStory } from "../orderStory/orderStoryActions";
import {apiHelper} from "../../common/ApiHeplper";

export const AddToCart = (data) => {
    store.dispatch(addToCart(data))
}

export const RemoveFromCart = (data) => {
    store.dispatch(removeFromCart(data))
}

export const CalcTotalPrice = (data) => {
    store.dispatch(calcTotalPrice(data))
}

export const PutStateToCartProps = (state) => {
    return {cart : state.cart}
}

export const ConfirmOrder = (data) => {
    apiHelper.post(`/placeOrder`,
        data
    )
        .then(res => {

        })
        .catch(err => {

        });
}