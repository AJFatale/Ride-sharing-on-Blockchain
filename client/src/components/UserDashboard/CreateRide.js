import React, { useState, useContext } from 'react';
// import DatePicker from "react-datepicker";
// import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import DashNav from './DashNav';
import Sidebar from './Sidebar';
import './CreateRide.css';
import Home from '../Home';
import contractContext from '../../utils/contractContext';


function CreateRide({ user }) {

    const { createRide, getTotalRideCount, currentAccount, accountBalance, checkWalletIsConnected, connectWalletHandler, checkWalletConnected } = useContext(contractContext);
    

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState();

    const [rideData, setRideData] = useState({
        driveCost: "", 
        capacity: 1,  
        originAddress: "",  
        destAddress: "", 
        year: new Date().getFullYear(),
        month: new Date().getMonth()+1,
        day: new Date().getDate(),
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
    });
    // const rideObj = {
    //     year: new Date().getFullYear(),
    //     month: new Date().getMonth()+1,
    //     day: new Date().getDate(),
    //     hours: new Date().getHours(),
    //     minutes: new Date().getMinutes(),
    //     seconds: new Date().getSeconds()
    //   };
    //   const [ride, setRide] = useState(rideObj);


    const handleChange = e => {
        const { name, value } = e.target
        setRideData({
            ...rideData,
            [name]: value
        })
        // setRide({
        //     // We call setRide and use the spread operator to bring in any existing state values for the ride object(rideObj).
        //      ...ride,
        //      // if user do any changes in any one field, this is going to update that particular field state
        //      //Look at the name property of the input ([ev.target.name]), which MUST match the name in the ride object(rideObj), 
        //      //and set that to the value being typed in to the input field ([ev.target.value].)
        //      [e.target.name]:e.target.value
        //    })
    }

     // We are accessing the user input values for whole date and passing them as parameters to the userDate
    //  const userDate = new Date(ride.year, ride.month, ride.day, ride.hours, ride.minutes, ride.seconds);
// Conversion of userDate to the unix timestamp 
    // In above case ,we have not provided the local timezone as unix timestamp is based on UTC
    // const timestamp = userDate.getTime(); 

    // console.log(timestamp);

    const onCreateRide = (e) => {
        e.preventDefault();
        const {driveCost, capacity, originAddress, destAddress, year, month, day, hours, minutes, seconds} = rideData;
        // if (driveCost && capacity && originAddress && destAddress && departAt) {
        if (year==='' || month==='' ||   day==='' || hours==='' || minutes==='' ||   seconds==='' 
        || driveCost==='' || capacity==='' || originAddress==='' || destAddress===''){
             
        alert("invlid input")
        // console.log(selectedDate)

    } else {
        const userDate = new Date(year, month, day, hours, minutes, seconds);

        const departAt = userDate.getTime();
        createRide(driveCost, capacity, originAddress, destAddress, departAt);
        console.log("ride created")
            
        }
    }


    connectWalletHandler()
    // console.log(accountBalance)
    getTotalRideCount()
    // createRide(10, 2, "Barshi", "Aurangabad", 1000)


    if (localStorage.getItem('mobile_no')) {
        return (
            <div>
                <DashNav sidebar={sidebar} showSidebar={showSidebar} user={user} />
                <Sidebar sideNav={sidebar} />
                <div id="createRide" className={sidebar ? 'createRide active' : 'createRide'}>
                    <Container>
                        <Col xs={12} lg={12} className="top-heading">
                            <Form style={{
                                backgroundColor: "#FFFFFF",
                                color: "black",
                                borderRadius: "3px",
                                width: "550px",
                                margin: "50px auto"
                            }}
                                className="rideForm"
                                onSubmit={onCreateRide}
                                >

                                <b style={{ color: "#6D19FC", fontWeight: "700", fontSize: "23px" }}>Create a Ride to your destination in town</b>

                                <Form.Group className="mt-4" controlId="formBasicDate">
                                    <Row>
                                        {/* <Col md={3} xs={12}>
                                            <Form.Label>Date: </Form.Label>
                                        </Col>
                                        <Col md={9} xs={12}>
                                            <DatePicker className="selectDate"
                                                selected={selectedDate}
                                                onChange={date => setSelectedDate(date)}
                                                dateFormat='dd/MM/yyyy'
                                                minDate={new Date()}
                                                isClearable
                                                showMonthDropdown
                                                showYearDropdown
                                                scrollableMonthYearDropdown
                                            />
                                        </Col> */}
                                        <Col md={3} xs={12}>
                                            <Form.Label>Date</Form.Label>
                                        </Col>
                                        <Col md={3} xs={12}>
                                            <Form.Label>Year</Form.Label> 
                                            <Form.Control type="number" placeholder="Year" name="year" className="rideInput" min="2022" max="2050" onChange={handleChange} value={rideData.year} />
                                        </Col>
                                        <Col md={3} xs={12}>
                                            <Form.Label>Month</Form.Label> 
                                            <Form.Control type="number" placeholder="Month" name="month" className="rideInput" min="1" max="12" onChange={handleChange} value={rideData.month} />
                                        </Col>
                                        <Col md={3} xs={12}>
                                        <Form.Label>Day</Form.Label> 
                                            <Form.Control type="number" placeholder="Day" name="day" className="rideInput" min="1" max="31" onChange={handleChange} value={rideData.day} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mt-4" controlId="formBasicTime">
                                    <Row>
                                        {/* <Col md={3} xs={12}>
                                            <Form.Label>Started Time:</Form.Label>
                                        </Col>
                                        <Col md={9} xs={12}>
                                            <TimePicker
                                                value={selectedTime}
                                                onChange={time => setSelectedTime(time)}
                                                hourPlaceholder="hh"
                                                minutePlaceholder="mm"
                                                clockIcon={null}
                                                isClearable
                                                amPmAriaLabel='am'
                                                minTime={new Date()}
                                            />
                                        </Col> */}
                                        <Col md={3} xs={12}>
                                            <Form.Label>Time</Form.Label>
                                        </Col>
                                        <Col md={3} xs={12}>
                                            <Form.Label>Hours(24 hour)</Form.Label> 
                                            <Form.Control type="number" placeholder="Hours" name="hours" className="rideInput" min="0" max="23" onChange={handleChange} value={rideData.hours} />
                                        </Col>
                                        <Col md={3} xs={12}>
                                            <Form.Label>Minutes</Form.Label> 
                                            <Form.Control type="number" placeholder="Minutes" name="minutes" className="rideInput" min="0" max="59" onChange={handleChange} value={rideData.minutes} />
                                        </Col>
                                        {/* <Col md={3} xs={12}>
                                            <Form.Label>Seconds</Form.Label> 
                                            <Form.Control type="number" placeholder="Seconds" name="seconds" className="rideInput" min="0" max="59" onChange={handleChange} value={ride.seconds} />
                                        </Col> */}
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mt-4" controlId="formBasicPickUp">
                                    <Row>
                                        <Col md={3} xs={12}>
                                            <Form.Label>Pick Up</Form.Label>
                                        </Col>
                                        <Col md={9} xs={12}>
                                            <Form.Control type="text" placeholder="Enter Pick up location" className="rideInput" name="originAddress" value={rideData.originAddress} onChange={handleChange} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mt-4" controlId="formBasicDestination">
                                    <Row>
                                        <Col md={3} xs={12}>
                                            <Form.Label>Destination</Form.Label>
                                        </Col>
                                        <Col md={9} xs={12}>
                                            <Form.Control type="text" placeholder="Enter destination for ride estimate" className="rideInput" name="destAddress" value={rideData.destAddress} onChange={handleChange}/>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mt-4" controlId="formBasicFair">
                                    <Row>
                                        <Col md={3} xs={12}>
                                            <Form.Label>Expected Fair</Form.Label>
                                        </Col>
                                        <Col md={9} xs={12}>
                                            <Form.Control type="number" placeholder="Enter Fair Price" className="rideInput" name="driveCost" value={rideData.driveCost} onChange={handleChange}/>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mt-4" controlId="formBasicSelect">
                                    <Row>
                                        <Col md={3} xs={12}>
                                            <Form.Label>No of Seats</Form.Label>
                                        </Col>
                                        <Col md={9} xs={12}>
                                            <Form.Select aria-label="Default select example" className="rideInput" name="capacity" value={rideData.capacity} onChange={handleChange}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Button className="rideButton" type="submit">
                                    Create Ride
                                </Button>
                            </Form>
                        </Col>
                    </Container>
                </div>
            </div>
        );
    } else {
        return <Home />
    }
}

export default CreateRide;