import React,{ useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import DashNav from './DashNav';
import Sidebar from './Sidebar';
import './AvailableRides.css';

function AvailableRides(){

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    //manage state of join ride button
    const [joinRide, setJoinRide] = useState(true);

    //handleRide() will be called after joining the ride
    const handleRide = () => {
        setJoinRide(false);

       // called by passenger to send request to join ride
        console.log("joinRide() called");
    }

    return(
        <div>
            <DashNav sidebar={sidebar} showSidebar={showSidebar} />
            <Sidebar sideNav={sidebar} />
            <div id="availableRidesContent" className={ sidebar ? 'availableRidesContent p-5 active' : 'availableRidesContent p-5'}>
                <h1 className="rideTitle">Available Rides</h1>
                <Table className="mt-3" responsive="sm">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Pick Up</th>
                        <th>Destination</th>
                        <th>Ride Time</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Borivali,Mumbai</td>
                        <td>Bandra,Mumbai</td>
                        <td>4:30 pm</td>
                        <td>
                            {/* if the ride is not joined button will appear else it will be clicked */}
                            { joinRide ? <Button className="joinButton" onClick={handleRide}>Join Ride</Button>
                                   : <span className="requested">Requested</span> 
                            }
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default AvailableRides;