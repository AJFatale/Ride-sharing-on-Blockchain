import React,{ useState, useContext,useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import DashNav from './DashNav';
import Sidebar from './Sidebar';
import './RequestedRide.css';
import Home from '../Home';
import contractContext from '../../utils/contractContext';

function MyRides({user}){
    const {currentAccount,connectWalletHandler,listMyRides,myRides,startRide,cancelRide} = useContext(contractContext);
    connectWalletHandler()
    // console.log(accountBalance)
    
    useEffect(()=>{
        listMyRides(currentAccount)
    },[]);
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    //manage state for starting the ride
    const [startRideState,setStartRideState] = useState(null);
    const [cancelRideState,setCancelRideState] = useState(null);

    //handleStartRide() will be called after Starting the ride
    const handleStartRide = (e,id) => {
        setStartRideState(id);
        startRide(id);

        
        // called to start ride
        console.log("startRide() called for:",id);
    }
    const handleCanceltRide = (e,id) => {
        setCancelRideState(id);
        cancelRide(id)
        // called to cancel ride
        console.log("cancelRide() called");
    }

    if(localStorage.getItem('mobile_no')){
        return(
        <div>
            <DashNav sidebar={sidebar} showSidebar={showSidebar} user={user}/>
            <Sidebar sideNav={sidebar} />
            <div id="requestedRidesContent" className={ sidebar ? 'requestedRidesContent p-5 active' : 'requestedRidesContent p-5'}>
                <h1 className="rideTitle">My Rides</h1>
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
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>Mark</td>
                            <td>Borivali,Mumbai</td>
                            <td>Bandra,Mumbai</td>
                            <td>22/04/2022</td>
                            <td>4:30 pm</td>
                            <td>{ startRide ? <Button className="joinButton" onClick = { handleStartRide }>Start</Button> : <span className="requested"> Ride Started</span> }</td>
                        </tr> */}
                        {/* add here all rides by calling a getRide() */}
                        {myRides ? myRides.map((item, index) => {
                        return (
                            // <li className={item.cNameLi}>
                            //     <Link to={item.path} className={item.cNameLink} key={index}>
                            //         {item.icon}
                            //         <span className={item.cNameSpan}>{item.title}</span>
                            //     </Link>

                            // </li>
                    <tr>
                        <td>{index+1}</td>
                        <td>{item[0]}</td>
                        <td>{item[3]}</td>
                        <td>{item[4]}</td>
                        <td>{item[9]}</td>
                        <td>{item[10]}</td>
                        {(item[7]==="Initial" || item[7]==="passengerRequested" || item[7]==="passengerConfirmed")&& cancelRideState!=item[11] ? <td>{ startRideState!=item[11] ? <Button className="joinButton" onClick = {e => handleStartRide(e,item[11]) }>Start</Button> : <span className="requested"> {item[7]} </span> }</td>:<td><span className="requested">{item[7]}</span></td>}
                        {(item[7]==="Initial" || item[7]==="passengerRequested" || item[7]==="passengerConfirmed") && startRideState!=item[11] ? <td>{ cancelRideState!=item[11] ? <Button className="joinButton" onClick = {e=> handleCanceltRide(e,item[11]) }>Cancel</Button> : <span className="requested"> {item[7]}</span> }</td>:null} 
                        {/* <span className="requested"> {item[7]} </span> */}
                        {/* {item[7]==="completed" ? <td><span className="accepted">Ride Ended</span></td> : null}  */}


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

export default MyRides;