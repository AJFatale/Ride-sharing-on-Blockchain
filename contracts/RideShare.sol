// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <=0.9.0;
// import "./Transfer.sol";

contract Rideshare {
    struct Ride{
        address driver;
        uint drivingCost;
        uint capacity;
        string originAddress;
        string destAddress;
        uint createdAt;
        uint departAt;
        string rideStatus;
        // mapping (address => string) rideStatus;
        address[] passengerAccts;
    }

    Ride[]  rides;
    // uint public rideCount;

    // points will be given on successful completition of ride as a reputation
    mapping (address => uint) reputationPoints;

    // user can create ride  ---- called by driver
    function createRide( uint _driverCost, uint _capacity, string memory _originAddress, string memory _destAddress, uint _departAt) public
    {
       address[] memory _passengerAccts;
       rides.push(Ride(msg.sender, _driverCost, _capacity, _originAddress, _destAddress, block.timestamp, _departAt,"Initial", _passengerAccts));
    }

    // called by passenger to send request to join ride --- called by passenger
    function joinRide(uint rideNumber) public payable{
        Ride memory curRide = rides[rideNumber];

        //ride should not be started to join ride by passenger
        require(keccak256(bytes(curRide.rideStatus)) == keccak256(bytes("Initial")));
        require(msg.value >= curRide.drivingCost);
        rides[rideNumber].passengerAccts.push(msg.sender);
        rides[rideNumber].rideStatus = "passengerRequested";

    }
   

    // get list of all passenger in given ride
    function getPassengers(uint rideNumber) view public returns(address[] memory) {
        return rides[rideNumber].passengerAccts;
    }
    
    // get ride status of given ride
    function getRideStatus(uint rideNumber) view public returns(string memory) {
    return rides[rideNumber].rideStatus;
    }

    // get rides from all ride by id of rides
    function getRide(uint rideNumber) public view returns ( address, uint, uint, string memory, string memory, uint, uint, string memory, address[] memory) {
    Ride memory ride = rides[rideNumber];
    return (
      ride.driver,
      ride.drivingCost,
      ride.capacity,
      ride.originAddress,
      ride.destAddress,
      ride.createdAt,
      ride.departAt,
      ride.rideStatus,
      ride.passengerAccts

      );
    }

    // get total available ride count
    function getAvailableRideCount() public view returns(uint) {
        uint rideCount=0;
        for (uint i=0;i<rides.length;i++){
                Ride memory curRide = rides[i];
                if(keccak256(bytes(curRide.rideStatus)) == keccak256(bytes("Initial"))){
                    rideCount++;
                } 

        }
    return rideCount;
    }
    function getEnrouteRideCount() public view returns(uint) {
        uint rideCount=0;
        for (uint i=0;i<rides.length;i++){
                Ride memory curRide = rides[i];
                if(keccak256(bytes(curRide.rideStatus)) == keccak256(bytes("enroute"))){
                    rideCount++;
                } 

        }
    return rideCount;
    }
    function getCompletedRideCount() public view returns(uint) {
        uint rideCount=0;
        for (uint i=0;i<rides.length;i++){
                Ride memory curRide = rides[i];
                if(keccak256(bytes(curRide.rideStatus)) == keccak256(bytes("completed"))){
                    rideCount++;
                } 

        }
    return rideCount;
    }
    
    // get total ride count
    function getTotalRideCount() public view returns(uint){
        return rides.length;
    }

    // check is passenger is in ride or not 
    function passengerInRide(uint rideNumber, address passengerAcct) public view returns (bool) {
    Ride memory curRide = rides[rideNumber];
    for(uint i = 0; i < curRide.passengerAccts.length; i++) {
      if (curRide.passengerAccts[i] == passengerAcct) {
        return true;
        }
      }
    return false;
    }

    //ride cancelled by the driver, transfer money back to all account ---- called by driver
    function cancelRide(uint _rideNumber) public{
        Ride memory curRide = rides[_rideNumber];
        require(msg.sender == curRide.driver);
        require(keccak256(bytes(curRide.rideStatus)) != keccak256(bytes("enroute")));
        require(curRide.passengerAccts.length*curRide.drivingCost <= address(this).balance);
        for(uint i=0; i < curRide.passengerAccts.length; i++) {
            uint256 amount = curRide.drivingCost*1000000000000000000;
            payable(curRide.passengerAccts[i]).transfer(amount);
        }
        rides[_rideNumber].rideStatus = "Cancelled";

    }

    

    //create function to start ride and change ride status to enRoute ----- called by driver
    function startRide(uint _rideNumber) public{
        Ride memory curRide = rides[_rideNumber];
        require(msg.sender == curRide.driver);
        rides[_rideNumber].rideStatus = "enroute";
    }
    
    //  When ride is completed, passenger will call the function and change ride status to completed and amount from contract to driver account will be transferred.
    function endRide(uint _rideNumber) public returns(bool){
        Ride memory curRide = rides[_rideNumber];
        if (curRide.passengerAccts.length>0){
        require(msg.sender != curRide.driver);
        }
        require(keccak256(bytes(curRide.rideStatus)) == keccak256(bytes("enroute")));
        require(address(this).balance>=curRide.passengerAccts.length*curRide.drivingCost);
        uint256 amount = curRide.passengerAccts.length*curRide.drivingCost*1000000000000000000;
        payable(curRide.driver).transfer(amount);
        rides[_rideNumber].rideStatus = "completed";
        return true;
    }

    
    

   // accept passenger's request to ride --- called by driver
    function acceptPassengerRequest(uint rideNumber, address passengerAddress) public {
    Ride memory curRide = rides[rideNumber];
    require(keccak256(bytes(curRide.rideStatus)) == keccak256(bytes("passengerRequested")));
    require(msg.sender == curRide.driver);
    for(uint i=0; i < curRide.passengerAccts.length; i++) {
       if ( curRide.passengerAccts[i] == passengerAddress) {
        rides[rideNumber].rideStatus = "passengerConfirmed";
        }
      }
    }

    // reject passenger's request to ride --- called by driver
    function rejectPassengerRequest(uint rideNumber, address passengerAddress) public {
    Ride memory curRide = rides[rideNumber];
    require(keccak256(bytes(curRide.rideStatus)) == keccak256(bytes("passengerRequested")));
    require(msg.sender == curRide.driver);
    for(uint i=0; i < curRide.passengerAccts.length; i++) {
       if ( curRide.passengerAccts[i] == passengerAddress) {
        rides[rideNumber].rideStatus = "Initial";
        uint256 amount = curRide.drivingCost*1000000000000000000;
        payable(curRide.passengerAccts[i]).transfer(amount);
        rides[rideNumber].passengerAccts[i] = rides[rideNumber].passengerAccts[rides[rideNumber].passengerAccts.length - 1];
        rides[rideNumber].passengerAccts.pop();        }
      }
    }


}






