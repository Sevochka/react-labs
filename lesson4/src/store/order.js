import {observable, computed, action} from 'mobx'

class Order {
    @observable data = getData();

    @action change(key, value){
        let field = this.data[key];
        field.value = value
        field.valid = field.validator(field.value)
        
    }

    @computed get isFormValid(){
        return Object.values(this.data).every(field => field.valid)
    }

    @computed get dataValues(){
        let data = {};
        for (const key in this.data) {
            data[key] = this.data[key].value;
            
        }
        return data
    }
}

export default new Order()

function getData(){
    return {
        name: {
            value: '',
            label: 'Name',
            validator: val => /^[aA-zZ]{3,}$/.test(val),
            errorText:'Латинские символы, не менее двух',
            valid: null
        },
        phone: {
            value: '',
            label: 'Phone',
            validator: val => /^[0-9]{7,15}$/.test(val),
            errorText:'От 17 до 15, цифры',
            valid: null
        },
        email: {
            value:'',
            label:'Email',
            validator: val => /^.+@.+$/.test(val),
            errorText:'Собака',
            valid: null
        }
    }
}