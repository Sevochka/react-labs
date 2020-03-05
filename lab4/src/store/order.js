import {observable, computed, action, createTransformer} from 'mobx'

class Order {
    @observable data = getData();

    @action changeValue(key, value){
        this.data[key] = value
    }

    
}

export default new Order()

function getData(){
    return {
        email:"",
        password:"",
        name:"",
        surname:""
    }
}