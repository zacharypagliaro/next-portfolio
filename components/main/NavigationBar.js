import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const NavigationBar = ({ navdetails }) => {
  const [active, setActive] = useState(false);
  const [activeMenus, setActiveMenus] = useState(Array(navdetails.items.length).fill(false));
  const [isHoverAreaActive, setIsHoverAreaActive] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const navigationRef = useRef(null); // Ref for the navigation container

  const handleClick = () => {
    setActive(!active);
  };

  const handleMenuToggle = (index) => {
    setActiveMenus((prevMenus) => prevMenus.map((value, idx) => (idx === index ? !value : false)));
  };

  const handleMouseEnter = (index) => {
    setIsHoverAreaActive(true);
    clearTimeout(hoverTimeout);
    setActiveMenus((prevMenus) => prevMenus.map((value, idx) => (idx === index ? true : value)));
  };

  const handleMouseLeave = (index) => {
    setIsHoverAreaActive(false);
    clearTimeout(hoverTimeout);
    setHoverTimeout(
      setTimeout(() => {
        setActiveMenus((prevMenus) => prevMenus.map((value, idx) => (idx === index ? false : value)));
      }, 200) // Adjust the delay (in milliseconds) as needed
    );
  };

  const handleClickOutside = (event) => {
    if (navigationRef.current && !navigationRef.current.contains(event.target)) {
      setActiveMenus(Array(navdetails.items.length).fill(false));
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the navigation area
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function DisplayMobileLink({ item, level = 0 }) {
    const { text, link, isSelected, sublinks } = item;

    return (
      <div
        className={`pl-${level * 4} pl-4 py-2 text-white font-bold`}
      >
        <Link href={link} className={`m-4 ${isSelected ? 'text-selected-text' : 'hover:text-theme rounded-lg'} `}>
          {text}
        </Link>
        {sublinks.length > 0 && (
          <div className="pl-2">
            {sublinks.map((sublink, subIndex) => (
              <DisplayMobileLink key={subIndex} item={sublink} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  function SubHeaderItem({ navigationdetails, index }) {
    const { text, link, sublinks, isSelected } = navigationdetails;
    const isActive = activeMenus[index];

    return (
      <div
        className={`group relative ${isActive ? 'group-hover:bg-gray-300' : ''}`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
        onClick={() => setActiveMenus((prevMenus) => prevMenus.map((value, idx) => (idx === index ? !value : value)))}
      >
        <Link href={link} className={`${isSelected ? 'text-selected-text' : ''} `}>
          {text}
        </Link>
        {sublinks.length > 0 && isActive && (
          <div className="absolute z-10 bg-black mt-2 shadow-lg rounded min-w-fit">
            <div className="flex flex-col w-full whitespace-nowrap m-2 p-2">
              {sublinks.map((sublink, subIndex) => (
                <HeaderItem
                  key={subIndex}
                  navigationdetails={sublink}
                  index={subIndex}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }





  function HeaderItem({ navigationdetails, index }) {
    const { text, link, sublinks, isSelected, isButton, sublevel } = navigationdetails;

    if (isButton) {
      return (
        <button className="px-6 py-2 bg-theme font-bold">
          <Link href={link} className={`${isSelected ? 'text-selected-text' : ''} `}>
            {text}
          </Link>
        </button>
      );
    }

    if (sublinks.length > 0) {
      return (
        <SubHeaderItem
          navigationdetails={navigationdetails}
          index={index}
        />
      );
    }

    if (sublevel == 1) {
      return (
        <Link href={link} className={`${isSelected ? 'text-selected-text' : ''} `}>
          <div className="p-1">
            {text}
          </div>
        </Link>
      );
    }

    return (
      <Link href={link} className={`${isSelected ? 'text-selected-text' : ''} `}>
        {text}
      </Link>
    );
  }

  return (
    <header className="py-6">
      <div ref={navigationRef} className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="font-bold">{navdetails.title}</div>
        <div className="hidden md:flex space-x-12 items-center">
          {navdetails.items.map((navitem, index) => (
            <div key={index}>
              <HeaderItem navigationdetails={navitem} index={index} />
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <button
            className=' inline-flex p-3 hover:bg-theme rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
          >
            <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white" /></svg>
          </button>
        </div>
      </div>
      <div className={`${active ? '' : 'hidden'} md:hidden place-text-right`}>
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          {navdetails.items.map((navitem, index) => (
            <div key={index} className="pl-4">
              <DisplayMobileLink item={navitem} />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
