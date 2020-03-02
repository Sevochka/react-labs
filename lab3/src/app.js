import React from 'react'
import CartModule from './cart/cart'
import OrderFormModule from './orderForm/orderForm'
import ResultScreenModule from './resultScreen/result.js'

export default class extends React.Component{
    state = {
        products: getProducts(),
        userInfo: getUserInfo(),
        page:'cart'
    }

    //Products
    changeProductCnt(i, current){
        let products = [...this.state.products]
        products[i] = {...this.state.products[i], current}
        this.setState({
            products
        })
    }

    removeProduct(i){
        let products = [...products]
        products.splice(i, 1);
        this.setState({
            products
        })
    }


    setPage(page){
        this.setState({
            page
        })
    }
    updateProducts(products) {
        this.setState({
            products: [...products]
        })
    }

    updateUserInfo(userInfo) {
        this.setState({
            userInfo: userInfo
        })
    }

    render(){
        if (this.state.page === 'cart') {
            return(
                <CartModule 
                products={this.state.products} 
                updateProducts={(products) => this.updateProducts} 
                setPage={(p) => this.setPage(p)}
                />
            ) 
        }
        if (this.state.page === 'order') {
            return(
                <OrderFormModule 
                    products={this.state.products} 
                    userInfo={this.state.userInfo} 
                    updateUserInfo={(userInfo) => this.updateUserInfo(userInfo)}
                    setPage={(p) => this.setPage(p)}
                    />
            ) 
           
        }
        else{
            return(
                <ResultScreenModule 
                    products={this.state.products} 
                    userInfo={this.state.userInfo}
                    setPage={(p) => this.setPage(p)}
                    />
            ) 
            
        } 
    }


}

function getProducts(){
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            current: 1
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            current: 1
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            current: 1
        }
    ];
}

function getUserInfo(){
    return {
        name: 'Seva',
        surname:'Kochnev',
        address: 'House Bouse He'
    }
}