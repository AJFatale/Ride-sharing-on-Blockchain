import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

function Sidebar(props){
    return(
       <div>
           <div className={ props.sideNav ? 'vertical-nav active' : 'vertical-nav'} id="sidebar">
                <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Dashboard</p>

                <ul className="nav flex-column mb-0">
                    
                    {SidebarData.map((item, index) => {
                        return (
                            <li className={item.cNameLi}>
                                <Link to={item.path} className={item.cNameLink} key={index}>
                                    {item.icon}
                                    <span className={item.cNameSpan}>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}

                </ul>
            </div>
        </div>
    );
}

export default Sidebar;