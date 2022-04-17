import { useEffect,useState } from 'react';
import Web3 from 'web3';
import contract from '../contracts/Rideshare.json';
import contractContext from './contractContext';
import { ethers } from "ethers";

const contractAddress = "0xd94CFe9Ba68B5Fc70AC765BE3D156C8F6c416D5a";
const abi = contract.abi;

function Interact(props){
    const [currentAccount, setCurrentAccount] = useState(null);
    const [accountBalance, setAccountBalance] = useState(null);

    const checkWalletConnected = () =>{
        const { ethereum } = window;
        if(!ethereum){
            console.log("Metamask not installed")
            return;
        }else{
            console.log("wallet exists")
        }
    }
    const getAccountBalance = async(address) => {
        const web3 = new Web3(window.ethereum);
        const balance = await web3.eth.getBalance(address);
        setAccountBalance(ethers.utils.formatEther(balance));     
    }
    const setAccountListener = (provider) => {
        provider.on("accountsChanged", (accounts) => setCurrentAccount(accounts[0]));
        // getbalance(account);
        // provider.on("accountsChanged", (accounts) => getbalance(account[0]));
    
      };

    const connectWalletHandler = async () => { 
        const { ethereum } = window;

        if(!ethereum){
            alert("Please install metamask");
        }
        try{
            setAccountListener(ethereum);
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            console.log("Found an account address: ", accounts[0]);
            setCurrentAccount(accounts[0]);
            getAccountBalance(accounts[0]);
        }catch(err){
            console.log(err)
        }
    }

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;

        if(!ethereum){
            console.log("Make sure you have metamask installed");
            return; 
        }else{
            console.log("Wallet exist's");
        }

        const accounts = await ethereum.request({ method:'eth_accounts'});

        if(accounts.length !==0){
            const account = accounts[0];
            console.log("Found an account: ",account);
            setCurrentAccount(account);
        }else{
            console.log("No autherised account found");
        }
    }
    // useEffect(() => {
    //     checkWalletIsConnected();
    //   }, [])
    return (
        <contractContext.Provider value={{currentAccount,accountBalance,checkWalletIsConnected:checkWalletIsConnected,connectWalletHandler:connectWalletHandler,checkWalletConnected:checkWalletConnected}}>
        {props.children}    
        </contractContext.Provider>
    )
}
export default Interact;