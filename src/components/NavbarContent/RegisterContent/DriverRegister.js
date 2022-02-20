import React from "react";
import {Modal}from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Form, Col, Row} from 'react-bootstrap';
import '../../NavbarContent/Login.css';


function DriverRegister(props){
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header className="registerHeader" closeButton>
            <Modal.Title className="registerTitle" id="contained-modal-title-vcenter">
            Driver Registration
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="email" placeholder="Enter Email" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Mobile No.
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="tel" placeholder="+12345678" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Driver Licence No.
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Enter Driver Licence no." />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Aadhar No (UID)
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="tel" placeholder="Enter Aadhar (UID) no." />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" placeholder="Enter Password" />
                    </Col>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button className="register-submit" type="submit">Register</Button>
            <Button className="register-cancel" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    );
}

export default DriverRegister;