import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import router from "~s/router"

export default function(props) {
    return (
        <>
            <Modal show={props.isVisible} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function handleSaveClick() {
    router.moveTo('result')
}
