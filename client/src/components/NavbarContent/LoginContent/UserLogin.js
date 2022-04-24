import React, {useState} from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Form, Col, Row } from 'react-bootstrap';
import '../../NavbarContent/Login.css';
// import { ethers } from "ethers";
import { useNavigate } from "react-router-dom"
import axios  from "axios";
// import Web3 from 'web3';

function DriverRiderLogin(props) {  

const navigate=useNavigate();    
    // usetstate for storing and retrieving wallet details
    // const [data, setdata] = useState({
    //     address: "",
    //     balance: null,
    // });
    
    const [ user, setUser] = useState({
        mobile_no:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            // alert(res.data.user)
            setUser({ mobile_no:"", password:""})

            props.setLoginUser(res.data.user)
            
            props.onHide()
            if (res.data.user){
            // onLogin()
            localStorage.setItem('mobile_no', res.data.user.mobile_no);
            localStorage.setItem('email', res.data.user.email);
            navigate('/userDashboard')
            }
        })
    }
    // const onLogin = () => {
    //     console.log("Login success");
    //     if (typeof window.ethereum) {
    //         console.log('MetaMask is installed!');

    //         window.ethereum.request({ method: 'eth_requestAccounts' })
    //             .then(res => accountChangeHandler(res[0]));
    //             props.onHide()
    //             if(data.address){
    //             navigate('/userDashboard')
    //             }
    //     } else {
    //         alert("install metamask extension!!")
    //     }

    // };
    // const onLogin = async () => {
    //     console.log("Login success");
    //     if (window.ethereum) { //check if Metamask is installed
    //         console.log('MetaMask is installed!');
    //         // const web3 = new Web3(window.ethereum);

    //           try {
    //               const address = await window.ethereum.request({ method: 'eth_requestAccounts' }); //connect Metamask
    //               accountChangeHandler(address)
    //             //   const balance = await window.ethereum.request({ method: 'eth_getBalance',  params : [address, "latest"]});
    //             //   console.log(balance)
    //             //   const obj = {
    //             //           connectedStatus: true,
    //             //           status: "",
    //             //           address: address
    //             //       }
    //             //       return obj;
    //             if(address){
    //                 // console.log(address)
    //                 // var balance = getbalance(address[0])
    //                 // const balance = await web3.eth.getBalance(address)
    //                 // console.log(balance)

    //                 props.onHide()
    //                 if(address){
    //                                 navigate('/userDashboard')
    //                     }
    //             }
                   
    //           } catch (error) {
    //               console.log("Connect to metamask using connect button.")
    //             //   return {
    //             //       connectedStatus: false,
    //             //       status: "🦊 Connect to Metamask using the button on the top right."
    //             //   }
    //           }
              
    //     } else {
    //         console.log('🦊 Install metamask!')
    //         //   return {
    //         //       connectedStatus: false,
    //         //       status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
    //         //   }
    //         } 
    //   };

    // getbalance function for getting a balance in
  // a right format with help of ethers
//   const getbalance =  async(address) => {
  
//     // Requesting balance method
//     // const balance = await window.ethereum.request({ method: "eth_getBalance",  params : [address, "latest"]});
//     const web3 = new Web3(window.ethereum);
//     const balance = await web3.eth.getBalance(address);
//     // console.log(ethers.utils.formatEther(balance))
//     // ethers.utils.formatEther(balance)
//     // window.ethereum
//     //   .request({ 
//     //     method: "eth_getBalance", 
//     //     params: [address, "latest"] 
//     //   })
//     //   .then((balance) => {
//     //     // Setting balance
//         setdata({
//             address: address,
//           balance: ethers.utils.formatEther(balance),
//         });
//     //   });
//   };
// // Function for getting handling all events
// const accountChangeHandler = (account) => {
//     // Setting an address data
//     // setdata({
//     //   address: account[0],
//     // });
//     console.log(data.address)
//     // console.log( typeof account)
// //   props.setUserAccount(account)
// //   console.log(props.userAccount)
//     // Setting a balance
//     getbalance(account[0]);

//   };

//   useEffect(() => {
// //    console.log(data)
//    props.setUserAccount(data)
//   });
  
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="loginHeader" closeButton>
                <Modal.Title className="loginTitle" id="contained-modal-title-vcenter">
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Mobile No.
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" placeholder="Eg. +12345678" name="mobile_no" value={user.mobile_no} onChange={ handleChange } required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="login-submit" onClick={()=>login()}>Login</Button>
                <Button className="login-cancel" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DriverRiderLogin;