import { useState } from 'react';
import Web3 from 'web3';
import contract from '../contracts/Rideshare.json';
import contractContext from './contractContext';
import { ethers } from "ethers";

const contractAddress = "0x4D8aC8A4EBad09AAa7faA368ecB4b61B6Fd7425C";

function Interact(props) {
    const [currentAccount, setCurrentAccount] = useState(null);
    const [accountBalance, setAccountBalance] = useState(null);
    const [totalRideCount, setTotalRideCount] = useState(null);
    const [availableRides, setAvailableRides] = useState(null);
    const [myRides, setMyRides] = useState(null);
    const [otherRides, setOtherRides] = useState(null);
    const [requestedRides, setRequestedRides] = useState(null)
    const web3 = new Web3(window.ethereum);
    const contractInstance = new web3.eth.Contract(contract.abi, contractAddress);

    const checkWalletConnected = () => {
        const { ethereum } = window;
        if (!ethereum) {
            console.log("Metamask not installed")
            return;
        } else {
            console.log("wallet exists")
        }
    }
    const getAccountBalance = async (address) => {
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

        if (!ethereum) {
            alert("Please install metamask");
        }
        try {
            setAccountListener(ethereum);
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            // console.log("Found an account address: ", accounts);
            setCurrentAccount(accounts[0]);
            getAccountBalance(accounts[0]);
        } catch (err) {
            console.log(err)
        }
    }

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("Make sure you have metamask installed");
            return;
        } else {
            console.log("Wallet exist's");
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
            const account = accounts[0];
            // console.log("Found an account: ", accounts);
            setCurrentAccount(account);
        } else {
            console.log("No autherised account found");
        }
    }

    const createRide = async (driveCost, capacity, originAddress, destAddress, departAt) => {
        //     const nonce = await web3.eth.getTransactionCount(currentAccount,'latest') // get latest nonce
        // console.log(currentAccount.toString())
        await contractInstance.methods.createRide(driveCost, capacity, originAddress, destAddress, departAt).send({ from: currentAccount });
        console.log("Ride created");
    }

    const joinRide = async (rideNumber,rideCost) => {
        console.log("Request to join ride sent.")
        // console.log(typeof amount)

        await contractInstance.methods.joinRide(rideNumber).send({
            from: currentAccount,
            value: web3.utils.toWei(rideCost, 'ether')
          });
        
    }
    const getRideStatus = async (rideNumber) => {
        const rideStatus = await contractInstance.methods.getRideStatus().call();
        console.log(rideStatus)
    }

    const getRide = async (rideNumber) => {
        // const count = await contractInstance.methods.getAvailableRideCount().call();
        const ride = await contractInstance.methods.getRide(rideNumber).call();
        // console.log(ride)
        availableRides.push(ride)
        console.log(availableRides)

    }
    const listAvailableRides = async () => {
        // const count = await contractInstance.methods.getAvailableRideCount().call();
        const count = await contractInstance.methods.getTotalRideCount().call();
        const rides=[]
        for (var rideNumber = 0; rideNumber < count; rideNumber++) {
            const ride = await contractInstance.methods.getRide(rideNumber).call();
            if (ride[7] === "Initial") {
                var dateTime = new Date(Number(ride[6]))
                ride[9] = dateTime.getUTCDate()+"/"+dateTime.getUTCMonth()+"/"+dateTime.getUTCFullYear()
                ride[10] = dateTime.getHours()+":"+dateTime.getMinutes()
                // console.log(ride)
                // console.log("Time:",ride[9])
                rides.push(ride)

            }
        }
        setAvailableRides(rides)
        // console.log(availableRides)

    }

    const listMyRides = async (myAddress) => {
        // const count = await contractInstance.methods.getAvailableRideCount().call();
        const count = await contractInstance.methods.getTotalRideCount().call();
        const myrides=[]
        const otherrides=[]
        const requestedrides=[]
        for (var rideNumber = 0; rideNumber < count; rideNumber++) {
            const ride = await contractInstance.methods.getRide(rideNumber).call();
            ride[12] = []
            var dateTime = new Date(Number(ride[6]))
            for(var i=0;i<ride[8].length; i++){
                ride[12][i] = ride[8][i].toLowerCase() 
            }
            if (ride[0].toLowerCase() === myAddress) {
                
                ride[9] = dateTime.getUTCDate()+"/"+dateTime.getUTCMonth()+"/"+dateTime.getUTCFullYear()
                ride[10] = dateTime.getHours()+":"+dateTime.getMinutes()
                ride[11] = rideNumber
                myrides.push(ride)
            }
            if (ride[0].toLowerCase() !== myAddress && ride[7]==="Initial") {
                // var dateTime = new Date(Number(ride[6]))
                ride[9] = dateTime.getUTCDate()+"/"+dateTime.getUTCMonth()+"/"+dateTime.getUTCFullYear()
                ride[10] = dateTime.getHours()+":"+dateTime.getMinutes()
                ride[11] = rideNumber
                otherrides.push(ride)
            }
            if (((ride[0].toLowerCase() === myAddress || (ride[12].includes(myAddress))) && (ride[7]==="passengerRequested" || ride[7]==="passengerConfirmed" || ride[7]==="enroute" || ride[7]==="completed"))) {
                // var dateTime = new Date(Number(ride[6]))
                ride[9] = dateTime.getUTCDate()+"/"+dateTime.getUTCMonth()+"/"+dateTime.getUTCFullYear()
                ride[10] = dateTime.getHours()+":"+dateTime.getMinutes()
                ride[11] = rideNumber
                requestedrides.push(ride)
            }
        }
        setMyRides(myrides)
        setOtherRides(otherrides)
        setRequestedRides(requestedrides)

        // console.log(availableRides)

    }
    const startRide = async (rideNumber) => {
        const ride = await contractInstance.methods.startRide(rideNumber).send({ from: currentAccount });
        console.log(ride)
    }


    const getAvailableRideCount = async () => {
        const ride = await contractInstance.methods.getAvailableRideCount().call();
        console.log(ride)
    }

    const getTotalRideCount = async () => {
        const count = await contractInstance.methods.getTotalRideCount().call();
        setTotalRideCount(count)
    }

    const passengerInRide = async (rideNumber, passengerAcct) => {
        const ride = await contractInstance.methods.passengerInRide().call();
        console.log(ride)
    }

    const cancelRide = async (rideNumber) => {
        const ride = await contractInstance.methods.cancelRide().call();
        console.log(ride)
    }

    

    const endRide = async (rideNumber) => {
        const ride = await contractInstance.methods.endRide(rideNumber).send({from:currentAccount});
        console.log(ride)
    }

    const acceptPassengerRequest = async (rideNumber, passengerAddress) => {
        const ride = await contractInstance.methods.acceptPassengerRequest(rideNumber,passengerAddress).send({from: currentAccount});
        console.log(ride)
    }
    const getPassengers = async (rideNumber) => {
        const passengers = await contractInstance.methods.getPassengers().call();
        console.log(passengers)
    }



    return (
        <contractContext.Provider value={{
            currentAccount, accountBalance,availableRides,otherRides,listMyRides:listMyRides,myRides, checkWalletIsConnected: checkWalletIsConnected,
            connectWalletHandler: connectWalletHandler, checkWalletConnected: checkWalletConnected, createRide: createRide,
            getTotalRideCount: getTotalRideCount, getRideStatus: getRideStatus, getRide: getRide, totalRideCount, listAvailableRides: listAvailableRides,
            joinRide:joinRide, startRide:startRide,requestedRides, acceptPassengerRequest:acceptPassengerRequest,
            endRide:endRide
        }}>

            {props.children}
        </contractContext.Provider>
    )
}
export default Interact;