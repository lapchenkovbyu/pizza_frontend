import React from "react";

export const PizzaSize = ({sizes, setPrice, setOrderSizes, amount}) => {
    const getPrice = (e) => {
        sizes.map(elem => {
            if(elem.id == e.target.value){
                setPrice(elem.price[0].usd);
                setOrderSizes({...elem, amount: amount});

            }
        })
    }
    return(
        <select className="custom-select" id="inputGroupSelect01" onChange={getPrice}>
            {sizes.map((size, index) =>
                (<option key={index + 1} value={size.id} >{size.name + ' ' + size.radius}</option>)
            )}
        </select>
    )
}