import React, { useState, useEffect } from 'react';
import DashNav from './DashNav';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';
import Web3 from 'web3';
import { ethers } from "ethers";
import Home from '../Home'
import {useContext} from 'react';
import contractContext from '../../utils/contractContext';




function Dashboard({ user, userAccount, setUserAccount}) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const {currentAccount,accountBalance,connectWalletHandler} = useContext(contractContext);
  connectWalletHandler()

  // console.log(currentAccount)
  // console.log(checkWalletConnected())

  
//   const [account, setAccount] = useState(null);
//   const [accountBalance, setAccountBalance] = useState(null);

//   const setAccountListener = (provider) => {
//     provider.on("accountsChanged", (accounts) => setAccount(accounts[0]));
//     // getbalance(account);
//     // provider.on("accountsChanged", (accounts) => getbalance(account[0]));

//   };

//   useEffect(() => {
//     const loadProvider = async () => {
//       const provider=window.ethereum;
//       // const contract = await loadContract("Rideshare", provider);
//       // console.log(contract)
//       if (provider) {
//         setAccountListener(provider);
//        provider.request({ method: "eth_requestAccounts" });
//        if(account){
//          getbalance(account)
//        }
               
//       } else {
//         console.log("Please install MetaMask!");
//       }
//     };
//     loadProvider();
//   }, [account]);

//   useEffect(() => {
//     const getAccount = async () => {
//      const web3 = new Web3(window.ethereum);
//       const accounts = await web3.eth.getAccounts();
//       setAccount(accounts[0]);
//     };
//     getAccount();
//   }, []);

//   const getbalance =  async(address) => {
//     const web3 = new Web3(window.ethereum);
//   const balance = await web3.eth.getBalance(address);
//   setAccountBalance(ethers.utils.formatEther(balance))
//   setUserAccount({
//     address,
//     balance:ethers.utils.formatEther(balance)
//   })
// };

  
//   console.log(localStorage.getItem('mobile_no'))
  
  if(localStorage.getItem('mobile_no')){
  return (
    <div className="sidebarNav">
      <DashNav sidebar={sidebar} showSidebar={showSidebar} user={user} />
      <Sidebar sideNav={sidebar} />
      <DashboardContent sideNav={sidebar} />
    </div>
  );
  }
    else{
      return <Home />;
  
  }
}

export default Dashboard;