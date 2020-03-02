import React from "react";
import { Container, Button, Alert, Form, Modal } from "react-bootstrap";

export default class extends React.Component {

    state = {
        isVisible:false
    }

    show = () =>{
        this.setState({
            isVisible:true
        })
    }

    hide = () =>{
        this.setState({
            isVisible:false
        })
    }

    
    render() {
        let inputDOMElements = [];
        let userInfo = this.props.userInfo;
        for (const key in userInfo) {
            if (userInfo.hasOwnProperty(key)) {
                const element = userInfo[key];
                inputDOMElements.push(
                    <Form.Group key={key} controlId="formBasicEmail">
                        <Form.Label>{element.label}</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={e =>
                                this.props.onChange(key, e.target.value)
                            }
                            defaultValue={element.value}
                        />
                    </Form.Group>
                );
            }
        }
        return (
            <Container>
                <h2>OrderPage</h2>
                <Alert variant="success">
                    <Form>
                        {inputDOMElements}
                        <Button variant="danger" onClick={this.props.back}>
                            Go to Cart
                        </Button>
                        <Button
                            variant="success"
                            className="m-2"
                            onClick={this.show}
                        >
                            Buy
                        </Button>
                    </Form>
                </Alert>

                <Modal show={this.state.isVisible} onHide={this.hide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Be careful</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       We suggest you checking your order list in order to avoid issues with delivery
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hide}>
                            Hmm, you're actually right
                        </Button>
                        <Button variant="primary" onClick={this.props.next}>
                            I don't care. Let's get my stuff
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}
