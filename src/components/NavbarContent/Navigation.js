import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container}from "react-bootstrap";
import AdminLogin from './LoginContent/AdminLogin';
import DriverRiderLogin from './LoginContent/DriverRiderLogin';
import AdminRegister from './RegisterContent/AdminRegister';
import DriverRegister from './RegisterContent/DriverRegister';
import RiderRegister from './RegisterContent/RiderRegister';
import './Login.css';

function Navigation(){
    const [modalShow, setModalShow] = useState(false);
    const [modalDisplay, setModalDisplay] = useState(false);
    const [modalAdminRegister, setModalAdminRegister] = useState(false);
    const [modalDriverRegister, setModalDriverRegister] = useState(false);
    const [modalRiderRegister, setModalRiderRegister] = useState(false);

    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Container>
                <Link to="/" className="text-decoration-none">
                    <Navbar.Brand style={{color:"#ff9b23",fontWeight:"700",fontSize:"22px"}}>RideShare</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/SearchCabs" className="text-decoration-none">
                        <Nav.Link href="/SearchCabs">Search Cabs</Nav.Link>
                    </Link>
                    <NavDropdown title="Login" id="collasible-nav-dropdown" className="ms-3">
                        <NavDropdown.Item href="#admin" onClick={() => setModalShow(true)} className="navDropdownItem">Admin</NavDropdown.Item>
                        <AdminLogin
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#driver" onClick={() => setModalDisplay(true)} className="navDropdownItem">Driver</NavDropdown.Item>
                        <DriverRiderLogin
                            show={modalDisplay}
                            onHide={() => setModalDisplay(false)}
                        />
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#rider" onClick={() => setModalDisplay(true)} className="navDropdownItem">Rider</NavDropdown.Item>
                        <DriverRiderLogin
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
                        <NavDropdown.Item href="#driverRegister" onClick={() => setModalDriverRegister(true)} className="navDropdownItem">Driver</NavDropdown.Item>
                        <DriverRegister
                            show={modalDriverRegister}
                            onHide={() => setModalDriverRegister(false)}
                        />
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#riderRegister" onClick={() => setModalRiderRegister(true)} className="navDropdownItem">Rider</NavDropdown.Item>
                        <RiderRegister
                            show={modalRiderRegister}
                            onHide={() => setModalRiderRegister(false)}
                        />
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
}

export default Navigation;