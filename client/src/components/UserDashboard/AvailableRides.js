import React,{ useState, useContext , useEffect} from 'react';
import { Table, Button } from 'react-bootstrap';
import DashNav from './DashNav';
import Sidebar from './Sidebar';
import './AvailableRides.css';
import contractContext from '../../utils/contractContext';
// import Interact from '../../utils/interact';

function AvailableRides({userAccount, user}){

    const {currentAccount,listMyRides,connectWalletHandler,otherRides,joinRide} = useContext(contractContext);
    connectWalletHandler()
    // listMyRides(currentAccount)
    // console.log(accountBalance)
    // console.log(currentAccount)
    // console.log(checkWalletConnected())
    
    useEffect(()=>{
      listMyRides(currentAccount)
    },[]);

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    //manage state of join ride button
    const [joinRideState, setJoinRideState] = useState(null);

    //handleRide() will be called after joining the ride
    const handleRide = (e,id,rideCost) => {
        setJoinRideState(id);
        joinRide(Number(id),rideCost)

       // called by passenger to send request to join ride
        console.log("joinRide() called for ride:",id);
    }

    return(
        <div>
            <DashNav sidebar={sidebar} showSidebar={showSidebar} userAccount={userAccount} user={user}/>
            <Sidebar sideNav={sidebar} />
            <div id="availableRidesContent" className={ sidebar ? 'availableRidesContent p-5 active' : 'availableRidesContent p-5'}>
                <h1 className="rideTitle">Available Rides</h1>
                <Table className="mt-3" responsive="sm">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Username</th>
                        <th>Pick Up</th>
                        <th>Destination</th>
                        <th>Cost</th>
                        <th>Ride Date</th>
                        <th>Ride Time</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <tr>
                        <td>Mark</td>
                        <td>Borivali,Mumbai</td>
                        <td>Bandra,Mumbai</td>
                        <td>22/04/2022</td>
                        <td>4:30 pm</td> */}
                        {/* <td> */}
                            {/* if the ride is not joined button will appear else it will be clicked */}
                            {/* { joinRide ? <Button className="joinButton" onClick={handleRide}>Join Ride</Button> */}
                                {/* //    : <span className="requested">Requested</span>  */}
                            {/* // } */}
                        {/* </td> */}
                    {/* </tr> */}
                    {otherRides ? otherRides.map((item, index) => {
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
                        <td>{item[1]}</td>
                        <td>{item[9]}</td>
                        <td>{item[10]}</td>
                        <td>{ joinRideState!=item[11] ? <Button className="joinButton" onClick = {e=> handleRide(e,item[11],item[1]) }>Join Ride</Button> : <span className="requested">Requested</span> }</td>
                    </tr>

                        );
                    }) : null }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default AvailableRides;