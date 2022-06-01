import React,{ useState,useContext,useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import DashNav from './DashNav';
import Sidebar from './Sidebar';
import './RequestedRide.css';
import Home from '../Home';
import contractContext from '../../utils/contractContext';


function RequestedRide({user}){

    const {connectWalletHandler,currentAccount,listMyRides,requestedRides,acceptPassengerRequest,endRide,rejectPassengerRequest} = useContext(contractContext);
    connectWalletHandler()
    // console.log(accountBalance)

    useEffect(()=>{
        listMyRides(currentAccount)
    },[]);
    // console.log(requestedRides)
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    //manage state of accept button
    const [acceptRideState, setAcceptRideState] = useState(null);
    const [rejectRideState, setRejectRideState] = useState(null);
    const [endRideState, setEndRideState] = useState(null);

    //handleAcceptRide() will be called after accepting the ride
    const handleAcceptRide = (e, id, address) => {
        setAcceptRideState(id);
        acceptPassengerRequest(id,address)

        //call accept passenger ride function here
        console.log("acceptPassengerRequest() called");
    }
    const handleRejectRide = (e, id, address) => {
        setRejectRideState(id);
        rejectPassengerRequest(id,address)

        //call accept passenger ride function here
        console.log("rejectPassengerRequest() called");
    }

    const handleEndRide = (e, id) => {
        setEndRideState(id);
        endRide(id)
        console.log("endRide() called for:",id);
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
                            <th>No.</th>
                            <th>Username</th>
                            <th>Pick Up</th>
                            <th>Destination</th>
                            <th>Ride Date</th>
                            <th>Ride Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {console.log(requestedRides)} */}
                    {requestedRides ? requestedRides.map((item, index) => {
                        return (
                            item[0].toLowerCase()===currentAccount && item[8][0] ? 
                        <tr>
                            <td>{index+1}</td>
                            <td>{item[8][0]}</td>
                            <td>{item[3]}</td>
                            <td>{item[4]}</td>
                            <td>{item[9]}</td>
                            <td>{item[10]}</td> 
                            { acceptRideState!=item[11] && item[7]==="passengerRequested" ? <td><Button className="joinButton" onClick={e=> handleAcceptRide(e, item[11], item[8][0])}>Accept</Button></td> : null}
                            { rejectRideState!=item[11] && item[7]==="passengerRequested" ? <td><Button className="joinButton" onClick={e=> handleRejectRide(e, item[11], item[8][0])}>Reject</Button></td> : null}
                            {item[7]==="passengerConfirmed" || item[7]==="enroute" ? <td><span className="requested">Confirmed</span></td> : null}
                            {item[7]==="completed" ? <td><span className="accepted">Ride Ended</span></td> : null}
                            {item[7]==="enroute" && endRideState!=item[11] && item[8].length<1 ? <td><Button className="joinButton" onClick={e=> handleEndRide(e, item[11])}>End Ride</Button></td>: null}
                            {/* // (item[7]==="passengerRequested" ? <td><span className="requested">Requested</span></td> : <td><span className="requested">Confirmed</span></td>) } */}
                            {/* after clicking the  reject, all data of that particular row should be gone*/}
                        </tr>
                        :
                        <tr> 
                            <td>{index+1}</td>
                            <td>{item[0]}</td>
                            <td>{item[3]}</td>
                            <td>{item[4]}</td>
                            <td>{item[9]}</td>
                            <td>{item[10]}</td>
                            {item[7]==="passengerRequested" ? <td><span className="requested">Requested</span></td> : null}
                            {item[7]==="passengerConfirmed" ? <td><span className="requested">Confirmed</span></td> : null}
                            {item[7]==="enroute" && endRideState!=item[11] ? <td><Button className="joinButton" onClick={e=> handleEndRide(e, item[11])}>End Ride</Button></td>: null}                        
                            {item[7]==="completed" ? <td><span className="accepted">Ride Ended</span></td> : null}                    
                            {/* // <span className="accepted">Ride Completed</span>  */}
                            
                        </tr> 
                        );
                    }) : null }
                    </tbody>
                </Table>
            </div>
        </div>
    );
} else{
    return <Home />;

}}

export default RequestedRide;