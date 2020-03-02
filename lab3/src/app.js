import React from "react";
import CartModule from "./cart/cart";
import OrderFormModule from "./orderForm/orderForm";
import ResultScreenModule from "./resultScreen/result.js";

export default class extends React.Component {
    state = {
        products: getProducts(),
        userInfo: getUserInfo(),
        currentPage: "Cart"
    };

    //Products
    changeProductCnt(i, current) {
        let products = [...this.state.products];
        products[i] = { ...this.state.products[i], current };
        this.setState({
            products
        });
    }

    removeProduct(i) {
        let products = [...this.state.products];
        products.splice(i, 1);
        this.setState({
            products
        });
    }

    handleInputChange(key, value) {
        let userInfo = {...this.state.userInfo};
        userInfo[key] = {...userInfo[key], value};
        this.setState({
            userInfo
        })
    }

    //Pages switchers. (замена роутов)
    goToCart = () => {
        this.setState({ currentPage: "Cart" });
    };
    goToOrder = () => {
        this.setState({ currentPage: "Order" });
    };
    goToResultScreen = () => {
        this.setState({ currentPage: "Result" });
    };

    render() {
        switch (this.state.currentPage) {
            case "Cart":
                return (
                    <CartModule
                        products={this.state.products}
                        changeCnt={(i, cnt) => this.changeProductCnt(i, cnt)}
                        remove={i => {
                            this.removeProduct(i);
                        }}
                        next={this.goToOrder}
                    />
                );
            case "Order":
                return (
                    <OrderFormModule
                        userInfo={this.state.userInfo}
                        onChange={(key, value) => this.handleInputChange(key, value)}
                        back={this.goToCart}
                        next={this.goToResultScreen}
                    />
                );
            case "Result":
                return (
                    <ResultScreenModule
                        products={this.state.products}
                        userInfo={this.state.userInfo}
                        setPage={p => this.setPage(p)}
                    />
                );
            default:
                return (
                    <div className="container mt-4">
                        <h2>Page not found. Error 404</h2>
                    </div>
                );
        }
    }
}

function getProducts() {
    return [
        {
            id: 100,
            title: "Ipnone 200",
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 101,
            title: "Samsung AAZ8",
            price: 22000,
            rest: 5,
            current: 1
        },
        {
            id: 103,
            title: "Nokia 3310",
            price: 5000,
            rest: 2,
            current: 1
        },
        {
            id: 105,
            title: "Huawei ZZ",
            price: 15000,
            rest: 8,
            current: 1
        }
    ];
}

function getUserInfo() {
    return(
        {
            name: {
                label:"First Name",
                value:''
            },
            surname: {
                label:"Last Name",
                value:''
            },
            email: {
                label:"Email",
                value:''
            },
        }
    );
}
