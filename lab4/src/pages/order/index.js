import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import ModalComponent from './modal'

import orderData from '~s/order'
import router from '~s/router'

import {observer} from 'mobx-react'

import './order.module.css'

@observer class Order extends React.Component {

    state={
        isVisible:false
    }



    handleSubmitClick = (e) => {
        e.preventDefault();
        this.onModalChange();
    }

    
    onModalChange = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    handleInputChange = (e) => {
        orderData.changeValue(e.target.name, e.target.value)
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            placeholder="Enter your name"
                            defaultValue={orderData.data.name}
                            onChange={this.handleInputChange}
                            pattern="[а-яА-ЯёЁ]+"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            name="surname"
                            type="email"
                            placeholder="Enter your surname"
                            defaultValue={orderData.data.surname}
                            onChange={this.handleInputChange}
                            pattern="[а-яА-ЯёЁ]+"
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            name="email"
                            type="email" 
                            placeholder="Enter email" 
                            defaultValue={orderData.data.email}
                            onChange={this.handleInputChange}
                        />
                        
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name="password"
                            type="password" 
                            placeholder="Password" 
                            defaultValue={orderData.data.password}
                            onChange={this.handleInputChange}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
                            />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmitClick}>
                        Submit
                    </Button>
                </Form>

                <Button className="mt-2" variant="warning" onClick={()=>router.moveTo('cart')}>Go Back</Button>
                <ModalComponent isVisible={this.state.isVisible} handleClose={this.onModalChange}/>
                

            </div>
        );
    }
}

export default Order;