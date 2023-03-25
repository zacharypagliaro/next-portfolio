import React, { useState } from 'react';
import Link from 'next/link'



const NavigationBar = ({ navdetails }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  function DisplayMobileLink({ item }) {
    return (
      <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-theme hover:text-white '>
        <Link
          href={item.link}
          className={`${item.isSelected ? 'text-selected-text' : ''} `}
        >
          {item.text}
        </Link>
      </div>
    );
  }

  function NormalHeaderItem({ item }) {
    return (
      <Link
        href={item.link}
        className={`${item.isSelected ? 'text-selected-text' : ''} `}
      >
        {item.text}
      </Link>
    );
  }

  function ButtonHeaderItem({ item }) {

    return (
      <button className="px-6 py-2 bg-theme font-bold">
        <Link
          href={item.link}
          className={`${item.isSelected ? 'text-selected-text' : ''} `}
        >
          {item.text}
        </Link>
      </button>
    );
  }

  function HeaderItem({ navigationdetails }) {
    const { text, link, isSelected, isButton } = navigationdetails;
    return isButton
      ? <ButtonHeaderItem item={{ text, link, isSelected }} />
      : <NormalHeaderItem item={{ text, link, isSelected }} />;
  }


  return (
    <header className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="font-bold">{navdetails.title}</div>
        <div className="hidden md:flex space-x-12 items-center">

          {navdetails.items.map((navitem, index) => (
            <div key={index}>

              <HeaderItem navigationdetails={navitem} />

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
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="md:hidden place-text-right">

          <div
            className={`${active ? '' : 'hidden'
              }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              {navdetails.items.map((navitem, index) => (
                <div key={index}>
                  <DisplayMobileLink item={navitem} />
                </div>
              ))}

            </div>
          </div>
        </div>


      </div>

    </header >
  )
}

export default NavigationBar;