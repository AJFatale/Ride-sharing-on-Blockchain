import React,{ useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import DashNav from './DashNav';
import Sidebar from './Sidebar';
import './AvailableRides.css';

function AvailableRides(){

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

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
                        <td><Button className="joinButton">Join Ride</Button></td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Vashi,Mumbai</td>
                        <td>Borivali</td>
                        <td>5.15pm</td>
                        <td><Button className="joinButton">Join Ride</Button></td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Bandra</td>
                        <td>Vashi</td>
                        <td>9.10am</td>
                        <td><Button className="joinButton">Join Ride</Button></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default AvailableRides;