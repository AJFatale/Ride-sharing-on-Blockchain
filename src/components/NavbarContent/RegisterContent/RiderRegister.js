import React from "react";
import {Modal}from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Form, Col, Row} from 'react-bootstrap';
import '../../NavbarContent/Login.css';


function RiderRegister(props){
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header className="registerHeader" closeButton>
            <Modal.Title className="registerTitle" id="contained-modal-title-vcenter">
            Rider Registration
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
                     ID Proof as
                    </Form.Label>
                    <Col sm="10">
                        <Form.Select column sm="4" aria-label="Select ID type" className="selectId">
                            <option value="1">Aadhar Card</option>
                            <option value="2">Pan Card</option>
                            <option value="3">Voter Card</option>
                        </Form.Select>
                    </Col>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Enter ID proof No" />
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

export default RiderRegister;