import React from "react";

import cartModel from "~s/cart.js";
import orderModel from "~s/order";

export default class extends React.Component {
    render() {
        return (
            <div>
                <h2>Congratulations!</h2>
                <p>Hi, {orderModel.dataValues.name}</p>
                <p>
                    <strong>Total: {cartModel.total}</strong>
                </p>
            </div>
        );
    }
}
