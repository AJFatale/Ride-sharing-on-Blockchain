import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/NavbarContent/Navigation';
import Home from './components/Home';
import SearchCabs from './components/SearchCabs';
import Dashboard from './components/UserDashboard/Dashboard';
import CreateRide from './components/UserDashboard/CreateRide';
import AvailableRides from './components/UserDashboard/AvailableRides';
import RequestedRide from './components/UserDashboard/RequestedRide';
import MyRides from './components/UserDashboard/MyRides';
import UserAccount from './components/UserDashboard/UserAccount';
import { useState, useEffect } from "react";
import Interact from "./utils/interact";

function App() {
  const [user, setLoginUser] = useState({})
  // const [userAccount, setUserAccount] = useState({}); 

  // useEffect(() => {
  //     //  console.log(userAccount);
  //      console.log(user)
  //     //  props.setUserAccount(data)
  //     },[userAccount]);

  return (
    <div className="App">
      <Interact>
      <Router>
        <Navigation setLoginUser={setLoginUser} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/SearchCabs' element={<SearchCabs />} />
          <Route exact path='/userDashboard' element={<Dashboard user={user} />} />
          <Route exact path='/create_ride' element={<CreateRide  user={user}/>} />
          <Route exact path='/available_rides' element={<AvailableRides  user={user} />} />
          <Route exact path='/requested_ride' element={<RequestedRide  user={user}/>} />
          <Route exact path='/user_account' element={<UserAccount  user={user}/>} />
          <Route exact path='/my_rides' element={<MyRides  user={user} />} />
        </Routes>
        {/* </Interact> */}
      </Router>
      </Interact>
    </div>
  );
}

export default App;
