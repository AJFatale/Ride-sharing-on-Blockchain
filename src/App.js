import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navigation from './components/NavbarContent/Navigation';
import Home from './components/Home';
import SearchCabs from './components/SearchCabs';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/SearchCabs' element={<SearchCabs />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
