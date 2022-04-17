import React,{ useState,useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import DashNav from './DashNav';
import Sidebar from './Sidebar';
import './RequestedRide.css';
import Home from '../Home';
import contractContext from '../../utils/contractContext';


function RequestedRide({user}){

    const {currentAccount,accountBalance,checkWalletIsConnected,connectWalletHandler,checkWalletConnected} = useContext(contractContext);
    console.log(connectWalletHandler())
    console.log(accountBalance)
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    //manage state of accept button
    const [acceptRide, setAcceptRide] = useState(true);

    //handleAcceptRide() will be called after accepting the ride
    const handleAcceptRide = () => {
        setAcceptRide(false);

        //call accept passenger ride function here
        console.log("acceptPassengerRequest() called");
    }
    if(localStorage.getItem('mobile_no')){
        return(
        <div>
            <DashNav sidebar={sidebar} showSidebar={showSidebar} user={user} />
            <Sidebar sideNav={sidebar} />
            <div id="requestedRidesContent" className={ sidebar ? 'requestedRidesContent p-5 active' : 'requestedRidesContent p-5'}>
                <h1 className="rideTitle">Requested Rides</h1>
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
                            <td>{ acceptRide ? <Button className="joinButton" onClick={handleAcceptRide}>Accept</Button>
                                             : <span className="accepted">Accepted</span> 
                                }
                            </td>
                            <td><Button className="cancelButton">Reject</Button></td>
                            {/* after clicking the  reject, all data of that particular row should be gone*/}
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
} else{
    return <Home />;

}}

export default RequestedRide;