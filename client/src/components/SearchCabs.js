import React,{useState, useContext, useEffect } from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';
import './UserDashboard/AvailableRides.css'
import { Table, Button } from 'react-bootstrap';
import contractContext from '../utils/contractContext';
import background from '../img/search_cab_background.avif'



    function SearchCabs(){

      const { listAvailableRides,availableRides } = useContext(contractContext);
      const [rideCount, setRideCount]=useState(null)
      const [getride,setride]=useState(false)


      const getAvailableRides = () => {
        setride(true)
        console.log(getride)
        listAvailableRides()
        if(availableRides){
          const ride=availableRides[0]
        //   console.log(Object.values(ride)[0]);
                    
        }
     }
     useEffect(()=>{
      
        listAvailableRides()
     },[]);

    return (
    <div style={{backgroundColor:"#b53389",
    backgroundImage: `url(${background})`,
    //   backgroundImage: `url("https://images.unsplash.com/photo-1584875939087-f1d9a6d27e97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80")`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color:"#FFFFFF",
      paddingTop:"150px"}}
      >
        <Container>
          <Row>
              <Col xs={12} lg={5} className="top-heading text-center align-items-center justify-content-center">
                <div style={{backgroundColor:"#FFFFFF",color:"black",borderRadius:"3px"}} className="text-center align-items-center justify-content-center p-4">
                    <b style={{color:"#6D19FC",fontWeight:"700",fontSize:"17"}}>Book a city taxi to your destination in town</b>
                    <br />
                        {/* <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Pick up location" className="text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter drop location for ride estimate" className="text-center" />
                        </Form.Group> */}
                        <button onClick={()=>{getAvailableRides()}} className="login-submit" style={{margin:"20px 0 20px 0",border:"1px solid #ff9b23"}}>
                            Available Rides
                        </button>
                </div> 
              </Col>
              <Col xs={12} lg={7} className="text-center">
                {/* <h1>Search Cabs Results will display here...</h1> */}
                <div>
                {/* <h1 className="rideTitle">Available Rides</h1> */}
                

                {getride && availableRides.length>0?
                <Table className="mt-3" responsive="sm" style={{backgroundColor:"#FFFFFF",color: "rgb(109, 25, 252)",borderRadius:"3px"}}>
                    <thead >
                    <tr>
                        <th>Pick Up</th>
                        <th>Destination</th>
                        <th>Ride Date</th>
                        <th>Ride Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <tr>
                        <td>Mark</td>
                        <td>Borivali,Mumbai</td>
                        <td>Bandra,Mumbai</td>
                        <td>22/04/2022</td>
                        <td>10:00 AM</td>
                            {/* if the ride is not joined button will appear else it will be clicked */}
                            {/* { joinRide ? <Button className="joinButton" onClick={handleRide}>Join Ride</Button>
                                   : <span className="requested">Requested</span> 
                            } */}
                            {/* <Button className="joinButton">Login</Button> */}
                        
                    {/* </tr> */}
                    {console.log(availableRides.length)}
                     {availableRides.length>0 ? availableRides.map((item, index) => {
                        return (
                            // <li className={item.cNameLi}>
                            //     <Link to={item.path} className={item.cNameLink} key={index}>
                            //         {item.icon}
                            //         <span className={item.cNameSpan}>{item.title}</span>
                            //     </Link>

                            // </li>
                    <tr>
                        <td>{item[3]}</td>
                        <td>{item[4]}</td>
                        <td>{item[9]}</td>
                        <td>{item[10]}</td>
                    </tr>

                        );
                    }) : null} 
                    </tbody>
                </Table>
                : null }
            </div>
                </Col>
          </Row>
        </Container>
    </div>
    );
}

export default SearchCabs;
