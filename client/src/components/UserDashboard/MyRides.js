import React,{ useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import DashNav from './DashNav';
import Sidebar from './Sidebar';
import './RequestedRide.css';
import Home from '../Home'

function MyRides({userAccount,user}){

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    //manage state for starting the ride
    const [startRide,setStartRide] = useState(true);

    //handleStartRide() will be called after Starting the ride
    const handleStartRide = () => {
        setStartRide(false);

        // called to start ride
        console.log("startRide() called");
    }

    if(localStorage.getItem('mobile_no')){
        return(
        <div>
            <DashNav sidebar={sidebar} showSidebar={showSidebar} userAccount={userAccount} user={user}/>
            <Sidebar sideNav={sidebar} />
            <div id="requestedRidesContent" className={ sidebar ? 'requestedRidesContent p-5 active' : 'requestedRidesContent p-5'}>
                <h1 className="rideTitle">My Rides</h1>
                <Table className="mt-3" responsive="sm">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Pick Up</th>
                            <th>Destination</th>
                            <th>Ride Time</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Borivali,Mumbai</td>
                            <td>Bandra,Mumbai</td>
                            <td>4:30 pm</td>
                            <td>{ startRide ? <Button className="joinButton" onClick = { handleStartRide }>Start</Button> : <span className="requested"> Ride Started</span> }</td>
                        </tr>
                        {/* add here all rides by calling a getRide() */}
                    </tbody>
                </Table>
            </div>
        </div>
    );
} else{
    return <Home />;

}}

export default MyRides;