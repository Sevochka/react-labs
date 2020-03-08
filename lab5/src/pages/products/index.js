import React from "react";
import productItem from "~p/productItem";
import { observer } from "mobx-react";

import productData from "~s/products.js";
import ProductItem from "~p/productItem";

import { Card } from "react-bootstrap";
import { routesMap } from '~/routes'

@observer class Products extends React.PureComponent {

    goToCart = (e) => {
        this.props.history.push(routesMap.cart)
    }

    render() {
        let products = productData.products.map((pr, i) => {
            return (
                <Card style={{ width: "18rem", display: 'inline-block', margin:'5px'}} key={pr.id}>
                    <ProductItem price={pr.price} title={pr.title} desc={pr.description} id={pr.id}/>
                </Card>
            );
        });
        return (
            <>
                    {products}
                    <hr/>
                    <button className="btn btn-primary" onClick={this.goToCart}>Go To Cart</button>
            </>
        );
    }
}

export default Products;
