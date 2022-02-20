import React from "react";
import { Link } from 'react-router-dom';
import './NavbarContent/Login.css';
import {Container,Col} from "react-bootstrap";

function Home(){
    return(
        <div style={{backgroundColor:"#ffefd5",
            backgroundImage: `url("https://images.unsplash.com/photo-1578041262130-633307b3bfd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color:"#FFFFFF",
            paddingTop:"100px"}}
            >
            <Container>
                    <Col xs={12} lg={12} className="top-heading text-center flex-column align-items-center justify-content-center">
                        <h6>Book for less today!! Try rideShare</h6>
                        <h1>Need to travel? Get a rider or Find a seat</h1>
                        <Link to="/SearchCabs">
                            <button type="button" class="btn login-submit btn-get-started m-3">Get Started</button>
                        </Link>
                    </Col>
            </Container>
        </div>
    );
}

export default Home;