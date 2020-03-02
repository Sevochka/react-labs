import React from "react";
import AppMinMax from "./../inputs/minmax/minmax";
import styles from "./../app.module.css";
import { Button } from "react-bootstrap";

export default class extends React.Component {
    sendForm = () => {
        this.props.setPage("order");
    };

    render() {
        let total = this.props.products.reduce((t, pr) => {
            return t + pr.current * pr.price;
        }, 0);

        let productsRows = this.props.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax
                            min={1}
                            max={product.rest}
                            cnt={product.current}
                            onChange={cnt => this.props.changeCnt(i, cnt)}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={() => this.remove(i)}>X</button>
                    </td>
                </tr>
            );
        });

        return (
            <div className="container">
                <h2>Cart</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>{productsRows}</tbody>
                </table>
                <h3>Total: {total}</h3>
                <hr />
                <Button variant="warning" >
                    Go to Order Forms
                </Button>

                <hr />
                <Button
                    variant="primary"
                    onClick={() => this.props.changeCnt(1, 4)}
                >
                    Unreal change cnt
                </Button>
            </div>
        );
    }
}


