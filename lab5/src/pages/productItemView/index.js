import React from "react";

import productData from "~s/products";
import cartData from '~s/cart.js'

import { Alert } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { routesMap } from '~/routes'


export default function(props) {
    let product = productData.products.filter(
        pr => pr.id === +props.match.params.id
    )[0];

    let addToCart = () => {
        cartData.add(props.match.params.id);
    }

    let removeFromCart = () => {
        cartData.remove()
    }

    return (
        <Alert variant="primary" className="container mt-3">
            <h1>Страницу продукта #{props.match.params.id}</h1>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <h4>{product.description}</h4>
            <button className="btn btn-primary m-1" onClick={addToCart}>Add To Cart</button>
            <button className="btn btn-success m-1" onClick={removeFromCart}>Remove From Cart</button>
            <Link className="btn btn-warning" to={routesMap.home}>Go To Home</Link>
        </Alert>
    );
}
