import React, { useState } from "react";
import { Modal, Form, Col, Row, Button } from 'react-bootstrap';
import '../../NavbarContent/Login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function DriverRegister(props) {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        mobile_no: "",
        driving_liscence: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        const { email, mobile_no, driving_liscence, password } = user
        if (email && mobile_no && driving_liscence && password) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    props.onHide()                })
        } else {
            alert("invlid input")
        }

    }

    return (
        
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* {console.log("User", user)} */}

            <Modal.Header className="registerHeader" closeButton>
                <Modal.Title className="registerTitle" id="contained-modal-title-vcenter">
                    User Registration
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" placeholder="Enter Email" name="email" value={user.email} onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Mobile No.
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" placeholder="+12345678" name="mobile_no" value={user.mobile_no} onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Driver Licence No.
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Enter Driver Licence no." name="driving_liscence" value={user.driving_liscence} onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    {/* <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Aadhar No (UID)
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="number" placeholder="Enter Aadhar (UID) no." />
                    </Col>
                </Form.Group> */}
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleChange} />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="register-submit" onClick={register}>Register</Button>
                <Button className="register-cancel" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DriverRegister;