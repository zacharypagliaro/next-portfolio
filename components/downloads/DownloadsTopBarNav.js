import React from 'react';
import NavigationBar from '../main/NavigationBar';
import headeritems from '../main/NavTerms';


const DownloadsTopBarNav = () => {


  const { title, home, arr, allarr, music, more, dev, blog, con } = headeritems;

  const navhome = {
    text: home,
    link: "/",
    sublinks: [],
    isSelected: false,
    isButton: false,
    sublevel: 0
  };

  const subnavallarr = {
    text: allarr,
    link: "/downloads",
    sublinks: [],
    isSelected: true,
    isButton: false,
    sublevel: 1
  };

  const navarr = {
    text: arr,
    link: "/#arrangements",
    sublinks: [subnavallarr],
    isSelected: false,
    isButton: false,
    sublevel: 0
  };


  const navmusic = {
    text: music,
    link: "/#music",
    sublinks: [],
    isSelected: false,
    isButton: false,
    sublevel: 0
  };

  const subnavcon = {
    text: con,
    link: "/#contact",
    sublinks: [],
    isSelected: false,
    isButton: false,
    sublevel: 1
  };

  const subnavblog = {
    text: blog,
    link: "/blog",
    sublinks: [],
    isSelected: false,
    isButton: false,
    sublevel: 1
  };

  const subnavdev = {
    text: dev,
    link: "/dev",
    sublinks: [],
    isSelected: false,
    isButton: false,
    sublevel: 1
  };

  const navmore = {
    text: more,
    link: "",
    sublinks: [subnavblog, subnavcon],
    isSelected: false,
    isButton: false,
    sublevel: 0
  };

  const navigationdetails = {
    title: "Zachary Pagliaro",
    items: [navhome, navarr, navmusic, navmore],
  };

  return (
    <NavigationBar navdetails={navigationdetails} />
  )
}

export default DownloadsTopBarNav;