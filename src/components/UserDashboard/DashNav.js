import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function DashNav(props) {
    return(
        <Navbar bg="light" variant="light" fixed="top" >
                    <Nav className="justify-content-center align-items-center"> 
                            <button id="sidebarCollapse" type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 m-2" onClick={props.showSidebar}>
                                <GiHamburgerMenu style={{fontSize:"18px"}} />
                            </button>
                            <Link to="/" className="text-decoration-none">
                                <Navbar.Brand href="#home" style={{color:"#6D19FC",fontWeight:"700",fontSize:"22px"}}>RideShare</Navbar.Brand> 
                            </Link> 
                    </Nav>
        </Navbar>
    );
}
export default DashNav;