import React from "react";
import {Modal}from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Form, Col, Row} from 'react-bootstrap';
import '../../NavbarContent/Login.css';

function DriverRiderLogin(props){
    return(
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header className="loginHeader" closeButton>
            <Modal.Title className="loginTitle" id="contained-modal-title-vcenter">
            Login
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Mobile No.
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="tel" placeholder="Eg. +12345678" required/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button className="login-submit" type="submit">Login</Button>
            <Button className="login-cancel" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    );
}

export default DriverRiderLogin;