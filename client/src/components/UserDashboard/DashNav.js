import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsPersonCircle } from 'react-icons/bs';
import './DashNav.css';
import Home from '../Home';
import contractContext from '../../utils/contractContext';

function DashNav(props) {

    const {currentAccount,accountBalance,connectWalletHandler} = useContext(contractContext);
    connectWalletHandler()
    // console.log(accountBalance)
    // initialise blockchain address as a string
    const blockAddress = currentAccount;
// console.log(props.userAccount.address)
if(localStorage.getItem('mobile_no')){
    return(
        <Navbar bg="light" variant="light" fixed="top" >
            <Nav className="align-items-center w-100" style={{position:"relative"}}> 
                <button id="sidebarCollapse" type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 m-2" onClick={props.showSidebar}>
                    <GiHamburgerMenu style={{fontSize:"18px"}} />
                </button>
                <Link to="/" className="text-decoration-none">
                    <Navbar.Brand href="#home" style={{color:"#6D19FC",fontWeight:"700",fontSize:"22px",justifyContent:"center"}}>RideShare</Navbar.Brand> 
                </Link> 
                <div className="align-items-center" style={{ position:"absolute", right: "10px",display:"flex" }}>
                    <BsPersonCircle style={{ color:"#6D19FC", fontSize:"28px"}} />
                    {/* Add here blockchain address as string */}
                    <p className = "blockAddress">
                        {blockAddress}
                    </p>
                </div>
            </Nav>
        </Navbar>
    );
}
else{
    return <Home />;
}
}
export default DashNav;