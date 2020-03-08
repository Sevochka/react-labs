import React from "react";
import { Card } from "react-bootstrap";

import { Link } from 'react-router-dom';

import CartModule from "~s/cart.js";

export default function(props) {
    let addToCart = () => {
        CartModule.add(props.id);
    }

    return (
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
                {props.price}
            </Card.Subtitle>
            <Card.Text>
               {props.desc}
            </Card.Text>
            <button className="btn btn-primary m-2" onClick={addToCart}>Add To Cart</button>
            <Link className="btn btn-warning m-2" to={"product/"+props.id}>Open</Link>
        </Card.Body>
    );
}


