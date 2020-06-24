import React from "react";
import { connect } from "react-redux";
import {putStateToOrderStoryProps} from "../context/orderStory/OrderStoryState";
import {OrderItem} from "../components/orderStory_components/OrderItem";

const OrderStory = ({orderStory}) => {
    console.log(orderStory);
    return (
        <div>
            <h1>Orders story</h1>
            <div className="col">

                <table className="col table ">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Client full name</th>
                    <th>delivery address</th>
                    <th>delivery date</th>
                </tr>
                </thead>
                <tbody>
                {
                    orderStory && orderStory.map((element, index) => {
                        return (
                            <OrderItem key={index+1} orderData={element}/>
                        )
                    })

                }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default connect(putStateToOrderStoryProps)(OrderStory)