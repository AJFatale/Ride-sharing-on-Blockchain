import React,{ useState } from 'react';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Form, Col ,Row,Button} from 'react-bootstrap';
import DashNav from './DashNav';
import Sidebar from './Sidebar';
import './CreateRide.css';

function CreateRide(){
    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState();

    return(
        <div>
            <DashNav sidebar={sidebar} showSidebar={showSidebar} />
            <Sidebar sideNav={sidebar} />
            <div id="createRide" className={sidebar ? 'createRide active' : 'createRide'}>
                <Container>
                    <Col xs={12} lg={12} className="top-heading">
                        <Form style={{
                            backgroundColor:"#FFFFFF",
                            color:"black",
                            borderRadius:"3px",
                            width:"550px",
                            margin:"50px auto"
                            }} 
                            className="rideForm">
                
                            <b style={{color:"#6D19FC",fontWeight:"700",fontSize:"23px"}}>Create a Ride to your destination in town</b>
                                
                                <Form.Group className="mt-4" controlId="formBasicDate">
                                    <Row>
                                        <Col md={3} xs={12}>
                                            <Form.Label>Date: </Form.Label>
                                        </Col>
                                        <Col md={9} xs={12}>
                                            <DatePicker className="selectDate" 
                                                selected={ selectedDate } 
                                                onChange={ date => setSelectedDate(date) } 
                                                dateFormat='dd/MM/yyyy'
                                                minDate= { new Date() }
                                                isClearable
                                                showMonthDropdown
                                                showYearDropdown
                                                scrollableMonthYearDropdown
                                            />
                                        </Col>
                                    </Row> 
                                </Form.Group>
                                <Form.Group className="mt-4" controlId="formBasicTime">
                                    <Row>
                                        <Col md={3} xs={12}>
                                            <Form.Label>Started Time:</Form.Label>
                                        </Col>
                                        <Col md={9} xs={12}>
                                            <TimePicker 
                                                value={ selectedTime }
                                                onChange={ time => setSelectedTime(time) }
                                                hourPlaceholder="hh"
                                                minutePlaceholder="mm"
                                                clockIcon={null}
                                                isClearable
                                                amPmAriaLabel='am'
                                                minTime={new Date()}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mt-4" controlId="formBasicPickUp">
                                    <Row>
                                        <Col md={3} xs={12}>
                                            <Form.Label>Pick Up: </Form.Label>
                                        </Col>
                                        <Col md={9} xs={12}>
                                            <Form.Control type="text" placeholder="Enter Pick up location" className="rideInput" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mt-4" controlId="formBasicDestination">
                                    <Row>
                                        <Col md={3} xs={12}>
                                            <Form.Label>Destination:</Form.Label>
                                        </Col>
                                        <Col md={9} xs={12}>
                                            <Form.Control type="text" placeholder="Enter destination for ride estimate" className="rideInput" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mt-4" controlId="formBasicFair">
                                    <Row>
                                        <Col md={3} xs={12}>
                                            <Form.Label>Expected Fair:</Form.Label>
                                        </Col>
                                        <Col md={9} xs={12}>
                                            <Form.Control type="number" placeholder="Enter Fair Price" className="rideInput" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mt-4" controlId="formBasicSelect">
                                    <Row>
                                        <Col md={3} xs={12}>
                                            <Form.Label>No of Seats:</Form.Label>
                                        </Col>
                                        <Col md={9} xs={12}>
                                            <Form.Select aria-label="Default select example" className="rideInput">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Button type="submit" className="rideButton">
                                    Create Ride
                                </Button>
                        </Form> 
                    </Col>
                </Container>
            </div>      
        </div>
    );
}

export default CreateRide;