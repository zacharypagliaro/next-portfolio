import React from 'react';
import TopBarNav from "./TopBarNav";
import HeaderContent from "./HeaderContent"
import GuitarArr from "./GuitarArr"
import MusicClients from "./MusicClients"
import ContactInfo from "./ContactInfo"
import FooterDisplay from "./FooterDisplay"

const MainContent = () => {

    return (
        <>

            <TopBarNav />

            <HeaderContent />

            <GuitarArr />

            <MusicClients />

            <ContactInfo />
            <FooterDisplay />
        </>
    )
}

export default MainContent;