import React, { useState, useEffect } from 'react';
import Link from 'next/link'



const NavDots = () => {

    // replacement css variables for the selectors
    const [subCSSHome, setSubCSSHome] = useState('bg-theme');
    const [subCSSArr, setSubCSSArr] = useState('bg-body');
    const [subCSSMusic, setSubCSSMusic] = useState('bg-body');
    const [subCSSContact, setSubCSSContact] = useState('bg-body');


    const [offset, setOffset] = useState(0);
    var titles = null
    var sectionnumber = null

    // make sure our document exists
    if (typeof document !== 'undefined') {
        titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
            return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
        });

        sectionnumber = ([...document.querySelectorAll('h1, h2')].indexOf(titles[0]));
    }

    // access whenever the user scrolls
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);

        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // alter the dots when sectionnumber changes. uses section number to determine which dot to highlight
    useEffect(() => {
        if (sectionnumber == 3) {
            setSubCSSContact('bg-theme')
        }
        else {
            setSubCSSContact('bg-body')
        }

        if (sectionnumber == 2) {
            setSubCSSMusic('bg-theme')
        }
        else {
            setSubCSSMusic('bg-body')
        }

        if (sectionnumber == 1) {
            setSubCSSArr('bg-theme')
        }
        else {
            setSubCSSArr('bg-body')
        }

        if (sectionnumber == 0) {
            setSubCSSHome('bg-theme')
        }
        else {
            setSubCSSHome('bg-body')
        }

        if (sectionnumber == null) {
            setSubCSSHome('bg-theme')
        }

    }, [sectionnumber])

    //for debugging
    //console.log(sectionnumber);


    return (
        <>
            <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">

                <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                    {/* each circle contains the nav-dot and selected-circle elements */}
                    <Link href="#" className={`nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav ${subCSSHome}`}>
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                    </Link>
                    <Link href="#arrangements" className={`nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav ${subCSSArr}`}>
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Arrangements</span>
                    </Link>
                    <Link href="#music" className={`nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav ${subCSSMusic}`}>
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Music</span>
                    </Link>

                    <Link href="#contact" className={`nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav ${subCSSContact}`}>
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Contact</span>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default NavDots;