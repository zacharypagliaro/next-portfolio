import React from 'react';
import NavigationBar from '../components/NavigationBar';


const DownloadsTopBarNav = () => {


  const navhome = {
    text: "Home",
    link: "/",
    sublinks: [],
    isSelected: false,
    isButton: false,
  };

  const navarr = {
    text: "Arrangements",
    link: "#arrangements",
    sublinks: [],
    isSelected: true,
    isButton: false,
  };

  const navmusic = {
    text: "Music",
    link: "/#music",
    sublinks: [],
    isSelected: false,
    isButton: false,
  };

  const navcon = {
    text: "Contact",
    link: "/#contact",
    sublinks: [],
    isSelected: false,
    isButton: true,
  };

  const navigationdetails = {
    title: "Zachary Pagliaro",
    items: [navhome, navarr, navmusic, navcon],
  };

  return (
    <NavigationBar navdetails={navigationdetails} />
  )
}

export default DownloadsTopBarNav;