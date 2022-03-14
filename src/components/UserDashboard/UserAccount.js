import React, { useState } from "react";
import { Container, Col} from 'react-bootstrap';
import { BsPersonFill } from "react-icons/bs";
import DashNav from './DashNav';
import Sidebar from './Sidebar';
import './UserAccount.css';

function UserAccount(){

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <div>
            <DashNav sidebar={sidebar} showSidebar={showSidebar} />
            <Sidebar sideNav={sidebar} />
            <div id="userAccount" className={ sidebar ? 'userAccount p-5 active' : 'userAccount p-5'}>
                <Container>
                    <Col xs={12} lg={12}
                        style={{
                            backgroundColor:"#FFFFFF",
                            color:"black",
                            margin:"5px auto"
                        }}
                        className="cardCol"
                    >
                        <h1 className="rideTitle pb-3 m-2">My Profile</h1>
                        <BsPersonFill style={{fontSize:"100px",color:"6D19FC",margin:"5px auto"}} className="personIcon" />
                            <Col lg={12} md={12} xs={12} className="m-2">
                                <b className="p-1">Email: </b>
                                <span className="userDetails p-1">user@gmail.comdjkjfjkdchfjdgjhj</span>
                            </Col>
                            <Col lg={12} md={12} xs={12} className="m-2">
                                <b className="p-1">Mobile No: </b>
                                <span className="userDetails">+12345678</span>
                            </Col>
                            <Col lg={12} md={12} xs={12} className="m-2">
                                <b className="p-1">Blockchain Address: </b>
                                <span className="userDetails p-1">BgtdRtddhhTyy1bbdcjgh</span>
                            </Col>
                            <Col lg={12} md={12} xs={12} className="m-2">
                                <b className="p-1">Balance: </b>
                                <span className="userDetails p-1">$123,45</span>
                            </Col>
                    </Col>
                </Container>
            </div>
        </div>
      
    );
}

export default UserAccount;