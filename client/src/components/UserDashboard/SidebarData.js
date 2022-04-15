import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/userDashboard',
    icon: <AiIcons.AiFillHome className="text-white"/>,
    cNameLi: 'nav-item py-1',
    cNameLink: 'nav-link text-decoration-none sideNavLink',
    cNameSpan: 'ms-3 text-white'
  },
  {
    title: 'Create Ride',
    path: '/create_ride',
    icon: <AiIcons.AiFillCar className="text-white"/>,
    cNameLi: 'nav-item py-1',
    cNameLink: 'nav-link text-decoration-none sideNavLink',
    cNameSpan: 'ms-3 text-white'
  },
  {
    title: 'Requested Rides',
    path: '/requested_ride',
    icon: <MdIcons.MdRequestPage className="text-white"/>,
    cNameLi: 'nav-item py-1',
    cNameLink: 'nav-link text-decoration-none sideNavLink',
    cNameSpan: 'ms-3 text-white'
  },
  {
    title: 'Available Rides',
    path: '/available_rides',
    icon: <MdIcons.MdOutlineBusAlert className="text-white"/>,
    cNameLi: 'nav-item py-1',
    cNameLink: 'nav-link text-decoration-none sideNavLink',
    cNameSpan: 'ms-3 text-white'
  },
  {
    title: 'My Rides',
    path: '/my_rides',
    icon: <RiIcons.RiMotorbikeFill className="text-white"/>,
    cNameLi: 'nav-item py-1',
    cNameLink: 'nav-link text-decoration-none sideNavLink',
    cNameSpan: 'ms-3 text-white'
  },
  {
    title: 'Account',
    path: '/user_account',
    icon: <BsIcons.BsFillPersonFill className="text-white"/>,
    cNameLi: 'nav-item py-1',
    cNameLink: 'nav-link text-decoration-none sideNavLink',
    cNameSpan: 'ms-3 text-white'
  }
  // {
  //   title: 'Log out',
  //   path: '/',
  //   icon: <FiIcons.FiLogOut className="text-white"/>,
  //   cNameLi: 'nav-item logout',
  //   cNameLink: 'nav-link text-decoration-none sideNavLink',
  //   cNameSpan: 'ms-3 text-white'
  // }
];