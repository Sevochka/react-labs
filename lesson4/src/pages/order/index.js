import React from "react";
import PropTypes from "prop-types";
import { Container, Button, Alert, Form, Modal } from "react-bootstrap";

import orderModel from "~s/order";

import { observer } from "mobx-react";

import { routesMap } from "~/routes";

@observer class Order extends React.Component {
    state = {
        isVisible: false
    };

    show = (e) => {
        e.preventDefault()
        this.setState({
            isVisible: true
        });
    };

    hide = () => {
        this.setState({
            isVisible: false
        });
    };


    render() {
        let inputDOMElements = [];
        let userInfo = orderModel.data;
        
        
        for (const key in userInfo) {
            if (userInfo.hasOwnProperty(key)) {
                const element = userInfo[key];
                inputDOMElements.push(
                    <Form.Group key={key} controlId="formBasicEmail">
                        <Form.Label>{element.label}</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={e => orderModel.change(key, e.target.value) }
                            defaultValue={element.value}
                        />

                        {element.valid === null || element.valid ? '' :
                            <Form.Text className="text-muted">
                                {element.errorText}
                            </Form.Text>
                        }
                        
                    </Form.Group>
                );
            }
        }
        return (
            <Container>
                <Form>
                    {inputDOMElements}
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={this.show}
                        disabled = {!orderModel.isFormValid}
                    >
                        Submit
                    </Button>
                </Form>

                <Button
                    className="mt-2"
                    variant="warning"
                    onClick={() => router.moveTo("cart")}
                >
                    Go Back
                </Button>

                <Modal show={this.state.isVisible} onHide={this.hide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Be careful</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        We suggest you checking your order list in order to
                        avoid issues with delivery
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hide}>
                            Hmm, you're actually right
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => this.props.history.push(routesMap.result)}
                        >
                            I don't care. Let's get my stuff
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

export default Order;