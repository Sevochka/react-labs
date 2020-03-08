import React from 'react';
import PropTypes from 'prop-types';
import AppMinMax from '~c/inputs/minmax';

import {observer} from 'mobx-react';
import cartModel from '~s/cart.js';
import productsModel from '~s/products.js';

import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

@observer class Cart extends React.Component{
    render(){
        let productsRows = cartModel.products.map((product, i) => {
        
            let productReal = productsModel.products.filter(pr => pr.id === product.id)[0]

            return (
                <tr key={product.id}>
                    <td>{productReal.title}</td>
                    <td>{productReal.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={productReal.rest} 
                                   cnt={product.current} 
                                   onChange={cartModel.changeOn[i]}
                        />
                    </td>
                    <td>{productReal.price * product.current}</td>
                    <td>
                        <button onClick={() => cartModel.remove(i)}>
                            X
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
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
                    <tbody>
                        {productsRows}
                    </tbody> 
                </table>
                <h3>Total: {cartModel.total}</h3>
                <hr/>
                <Link to={routesMap.order} className="btn btn-primary">
                    Send
                </Link>
            </div>
        );
    }
}

export default Cart;