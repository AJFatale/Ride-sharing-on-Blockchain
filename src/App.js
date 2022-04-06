import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navigation from './components/NavbarContent/Navigation';
import Home from './components/Home';
import SearchCabs from './components/SearchCabs';
import Dashboard from './components/UserDashboard/Dashboard';
import CreateRide from './components/UserDashboard/CreateRide';
import AvailableRides from './components/UserDashboard/AvailableRides';
import RequestedRide from './components/UserDashboard/RequestedRide';
import MyRides from './components/UserDashboard/MyRides';
import UserAccount from './components/UserDashboard/UserAccount';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/SearchCabs' element={<SearchCabs />} />
            <Route exact path='/userDashboard' element={<Dashboard />} />
            <Route exact path='/create_ride' element={<CreateRide />} />
            <Route exact path='/available_rides' element={<AvailableRides />} />
            <Route exact path='/requested_ride' element={<RequestedRide />} />
            <Route exact path='/user_account' element={<UserAccount />} />
            <Route exact path='/my_rides' element={<MyRides />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
