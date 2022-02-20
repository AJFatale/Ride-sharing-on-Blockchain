import React from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';

    function SearchCabs(){
    return (
    <div style={{backgroundColor:"#ffefd5",
      backgroundImage: `url("https://images.unsplash.com/photo-1484373030460-8de45ac8796d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color:"#FFFFFF",
      paddingTop:"100px"}}
      >
        <Container>
          <Row>
              <Col xs={12} lg={6} className="top-heading text-center align-items-center justify-content-center">
                <Form style={{backgroundColor:"#FFFFFF",color:"black",borderRadius:"3px"}} className="text-center align-items-center justify-content-center p-4">
                    <b style={{color:"#ff9b23",fontWeight:"700",fontSize:"17"}}>Book a city taxi to your destination in town</b>
                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Pick up location" className="text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter drop location for ride estimate" className="text-center" />
                        </Form.Group>
                        <button type="submit" className="login-submit" style={{margin:"20px 0 20px 0",border:"1px solid #ff9b23"}}>
                            Search Cabs
                        </button>
                </Form> 
              </Col>
              <Col xs={12} lg={6} className="text-center">
                <h1>Search Cabs  ---> Results will display here...</h1></Col>
          </Row>
        </Container>
    </div>
    );
}

export default SearchCabs;
