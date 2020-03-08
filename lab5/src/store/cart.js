import {observable, computed, action, set} from 'mobx';

import ProductData from '~s/products.js'

class Cart{
    @observable products = getProducts()

    @computed get total(){
        //return this.products.reduce((t, pr) => t + pr.price * pr.current, 0);
        let total = 0
        this.products.forEach((pr)=>{
            total = total + pr.current * ((ProductData.products.filter(pr2=> pr2.id === pr.id))[0]).price
        })
        return total;
    }

    @computed get changeOn(){
        return this.products.map((product, i) => {
            return (cnt) => this.change(i, cnt);
        });
    }

    @action change(i, cnt){
        this.products[i].current = cnt;
    }

    @action remove(i){
        this.products.splice(i, 1);
    }

    @action remove2(id){
        this.products.forEach((pr, i)=>{
            if (pr.id === id) {
                this.products.splice(id, 1)
            }
        })
    }

    @action add(id) {
        console.log(id);
        this.products.push(((ProductData.products.filter(pr=> pr.id === id))[0]))
        console.log(this.products);
    }
}

export default new Cart();












// server api
function getProducts(){
    return [
        {
            id: 100,
            current: 1
        },
        {
            id: 101,
            current: 1
        },
        {
            id: 103,
            current: 1
        }
    ];
}