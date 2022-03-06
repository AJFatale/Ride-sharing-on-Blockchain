import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container}from "react-bootstrap";
import AdminLogin from './LoginContent/AdminLogin';
import UserLogin from './LoginContent/UserLogin';
import AdminRegister from './RegisterContent/AdminRegister';
import UserRegister from './RegisterContent/UserRegister';
import './Login.css';

function Navigation(){
    const [modalShow, setModalShow] = useState(false);
    const [modalDisplay, setModalDisplay] = useState(false);
    const [modalAdminRegister, setModalAdminRegister] = useState(false);
    const [modalUserRegister, setModalUserRegister] = useState(false);

    return(
        <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
            <Container>
                <Link to="/" className="text-decoration-none ms-3">
                    <Navbar.Brand style={{color:"#6D19FC",fontWeight:"700",fontSize:"22px"}}>RideShare</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/SearchCabs" className="text-decoration-none ms-3">
                        <Nav.Link href="/SearchCabs" style={{color:"#6D19FC"}}>Search Cabs</Nav.Link>
                    </Link>
                    <NavDropdown title="Login" id="collasible-nav-dropdown" className="ms-3">
                        <NavDropdown.Item href="#admin" onClick={() => setModalShow(true)} className="navDropdownItem">Admin</NavDropdown.Item>
                        <AdminLogin
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#user" onClick={() => setModalDisplay(true)} className="navDropdownItem">User</NavDropdown.Item>
                        <UserLogin
                            show={modalDisplay}
                            onHide={() => setModalDisplay(false)}
                        />
                    </NavDropdown>
                    <NavDropdown title="Register" id="collasible-nav-dropdown" className="ms-3">
                        <NavDropdown.Item href="#adminRegister" onClick={() => setModalAdminRegister(true)} className="navDropdownItem">Admin</NavDropdown.Item>
                        <AdminRegister
                            show={modalAdminRegister}
                            onHide={() => setModalAdminRegister(false)}
                        />
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#userRegister" onClick={() => setModalUserRegister(true)} className="navDropdownItem">User</NavDropdown.Item>
                        <UserRegister
                            show={modalUserRegister}
                            onHide={() => setModalUserRegister(false)}
                        />
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
}

export default Navigation;