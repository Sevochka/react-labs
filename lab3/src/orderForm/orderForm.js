import React, {forwardRef} from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import LazyInputModule from "./../inputs/lazy/lazy";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styles from "./order.module.css";
import Example from "./modal"

export default class extends React.Component {

    inputName = React.createRef();
    inputSurname = React.createRef();
    inputAddress = React.createRef();

    state = {
        userInfo: this.props.userInfo
    }

    handleSubmit = (e) => {
        let newUserInfo = {
            name: this.inputName,
            surname: this.inputSurname,
            address: this.inputAddress,
        }

        this.props.updateUserInfo([newUserInfo]);
    }

    
    render() {
        return (
            <Container>
                <h2>OrderPage</h2>
                <p>Hello</p>
                <Alert variant="success">
                    <h5>Name</h5>
                    <InputGroup className={styles.input}>
                        <FormControl
                            aria-describedby="basic-addon1"
                            onBlur={e => console.log(styles.input)}
                            defaultValue={this.state.userInfo.name}
                            ref={this.inputName}
                        />
                    </InputGroup>
                    <h5>Surename</h5>
                    <InputGroup className={styles.input}>
                        <FormControl
                            aria-describedby="basic-addon1"
                            defaultValue={this.state.userInfo.surname}
                            ref={this.inputSurname}
                        />
                    </InputGroup>
                    <h5>Address</h5>
                    <InputGroup className={styles.input}>
                        <FormControl
                            aria-describedby="basic-addon1"
                            defaultValue={this.state.userInfo.address}
                            ref={this.inputAddress}
                        />
                    </InputGroup>
                    <button className="btn btn-success mt-2" onClick={this.handleSubmit}>Submit</button> 
                </Alert>
            </Container>
        );
    }
}

