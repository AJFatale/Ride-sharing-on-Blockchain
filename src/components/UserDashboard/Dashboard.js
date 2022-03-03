import React,{ useState } from 'react';
import DashNav from './DashNav';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

function Dashboard() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sidebarNav">
        <DashNav sidebar={sidebar} showSidebar={showSidebar} />
        <Sidebar sideNav={sidebar} />
        <DashboardContent sideNav={sidebar} />
    </div>
  );
}

export default Dashboard;