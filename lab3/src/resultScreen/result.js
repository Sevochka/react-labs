import React from "react";
import Alert from "react-bootstrap/Alert";

export default class extends React.Component {
    render() {
        let productsRows = this.props.products.map((product, i) => {
            if (product.current >= 1) {
                return (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.current}</td>
                            <td>{product.price * product.current}</td>
                        </tr>
                );
            }
        });

        return (
            <Alert variant="danger" className="container mt-4">
                Покупка совершена! Вы купили:
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Current</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>{productsRows}</tbody>
                </table>
            </Alert>
        );
    }
}
