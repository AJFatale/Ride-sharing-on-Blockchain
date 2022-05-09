import React,{ useState, useContext,useEffect } from 'react';
import { Table, Card, CardGroup } from 'react-bootstrap';
import { MdOutlineBusAlert, MdKeyboardArrowRight} from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import {GiCancel} from 'react-icons/gi';
import {ImUser} from 'react-icons/im';
import {RiMoneyDollarCircleFill}from 'react-icons/ri';
import {HiUserCircle} from 'react-icons/hi';
import './Sidebar.css';
import Home from '../Home';
import contractContext from '../../utils/contractContext';


function DashboardContent(props){
  const {currentAccount,connectWalletHandler,listMyRides,myRides,totalRideCount,getTotalRideCount,getAvailableRideCount,availableRideCount,getEnrouteRideCount,getCompletedRideCount,enrouteRideCount,completedRideCount,userCount,getUserCount} = useContext(contractContext);
    connectWalletHandler()
    // console.log(accountBalance)
    
    useEffect(()=>{
        listMyRides(currentAccount)
        getTotalRideCount()
        getAvailableRideCount()
        getEnrouteRideCount()
        getCompletedRideCount()
        getUserCount()
    },[]);

  if(localStorage.getItem('mobile_no')){
    return(
    <div>
        <div id="content" className={props.sideNav ? 'page-content p-5 active' : 'page-content p-5'}>
          <div className="container">
          <h5 className="m-1" style={{color:"#6D19FC"}}>Site Statistics</h5>
            <CardGroup>
              <Card className="cardBox1">
                <Card.Body>
                  <Card.Title>Total Users</Card.Title>
                  <Card.Text className="d-flex justify-content-between">
                    <h2>{userCount}</h2>
                    <HiUserCircle style={{fontSize:"4rem"}} />
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* <Card className="cardBox2">
                <Card.Body>
                  <Card.Title>Total Drivers</Card.Title>
                  <Card.Text className="d-flex justify-content-between">
                    <h2>200</h2>
                    <ImUser style={{fontSize:"4rem"}} />
                  </Card.Text>
                </Card.Body>
              </Card> */}
              <Card className="cardBox2">
                <Card.Body>
                  <Card.Title>Total No of Ride</Card.Title>
                  <Card.Text className="d-flex justify-content-between">
                    <h2>{totalRideCount}</h2>
                    <MdOutlineBusAlert style={{fontSize:"4rem"}} />
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="cardBox1">
                <Card.Body>
                  <Card.Title>Revenue</Card.Title>
                  <Card.Text className="d-flex justify-content-between">
                    <div className="d-inline-block">
                      <h2>₹{125.13*totalRideCount}</h2>
                      <h6>from {totalRideCount} rides</h6>
                    </div>
                    <RiMoneyDollarCircleFill style={{fontSize:"4rem"}} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>

            <h5 className="m-1 mt-5" style={{color:"#6D19FC"}}>Ride Statistics</h5>
            <CardGroup>
              <Card className="cardBox2">
                <Card.Body>
                  <Card.Title>Total available Rides</Card.Title>
                  <Card.Text className="d-flex justify-content-between">
                    <h2>{availableRideCount}</h2>
                    <MdOutlineBusAlert style={{fontSize:"4rem"}} />
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="cardBox1">
                <Card.Body>
                  <Card.Title>Running Rides</Card.Title>
                  <Card.Text className="d-flex justify-content-between">
                    <h2>{enrouteRideCount}</h2>
                    <AiFillCar style={{fontSize:"4rem"}} />
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="cardBox2">
                <Card.Body>
                  <Card.Title>Completed Rides</Card.Title>
                  <Card.Text className="d-flex justify-content-between">
                    <h2>{completedRideCount}</h2>
                    <GiCancel style={{fontSize:"4rem"}} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <div className="recentTransactions m-1 mt-5">
              <h5 style={{color:"#6D19FC"}}>Recent Transactions</h5>
              <Table className="mt-1 text-center" responsive="sm">
                    <tbody>
                        {/* <tr>
                            <td>user Id</td>
                            <td>Borivali,Mumbai</td>
                            <td><MdKeyboardArrowRight /></td>
                            <td>Bandra,Mumbai</td>
                        </tr> */}
                        {myRides ? myRides.map((item, index) => {
                        return (
                            // <li className={item.cNameLi}>
                            //     <Link to={item.path} className={item.cNameLink} key={index}>
                            //         {item.icon}
                            //         <span className={item.cNameSpan}>{item.title}</span>
                            //     </Link>

                            // </li>
                    <tr>
                        <td>{item[3]}</td>
                        <td><MdKeyboardArrowRight /></td>
                        <td>{item[4]}</td>
                        <td>{item[7]}</td>
                        </tr>

                        );
                    }) : null }
                    </tbody>
              </Table>
            </div>
          </div>
        </div>
    </div>
    );
} else{
  return <Home />;

}}

export default DashboardContent;