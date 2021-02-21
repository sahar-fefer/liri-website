// import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

// export const Header = () => {
//     return (
//         <header id={'header'} className={'container-fluid'}>
//             <nav className={'row'}>
//                 <div className="justify-content-start col-auto">
//                     <div className={'link-wrapper'}>
//                         <Link to="/">logo</Link>
//                     </div>
//                 </div>
//                 <div className="row justify-content-end col">
//                     <div className={'link-wrapper col-auto'}>
//                         <Link to="/">מי אני</Link>
//                     </div>
//                     <div className={'link-wrapper col-auto'}>
//                         <Link to="/">תכנים</Link>
//                     </div>
//                     <div className={'link-wrapper col-auto'}>
//                         <Link to="/">המלצות</Link>
//                     </div>
//                     <div className={'link-wrapper col-auto'}>
//                         <Link to="/">צור קשר</Link>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     )
// }


import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
// import { Link } from "react-scroll";
import { IoIosArrowDropup } from 'react-icons/io';

const Header = () => {
    const [showHeader, setShowHeader] = useState(false)
    const [headerBackground, setHeaderBackground] = useState(false)
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)

    const checkHeaderBackground = () => {
        if (!headerBackground && window.scrollY >= (window.innerHeight - 80)) {
            setHeaderBackground(true)
        } else if (headerBackground && window.scrollY <= (window.innerHeight - 80)) {
            setHeaderBackground(false)
        }
    };

    const checkScrollTop = () => {
        if (!showHeader && window.pageYOffset > window.innerHeight / 2) {
            setShowHeader(true)
            setHeaderBackground(true)
        } else if (showHeader && window.pageYOffset <= window.innerHeight / 2) {
            setShowHeader(false)
            setHeaderBackground(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsBurgerOpen(false)
    };

    window.addEventListener('scroll', checkHeaderBackground)
    window.addEventListener('scroll', checkScrollTop)

    return (
        <header id={'header'} className={'container-fluid'}>
            <div className={'scroll-up-button'}>
                <IoIosArrowDropup
                    className={"scrollTop"}
                    onClick={scrollTop}
                    style={{ height: 40, display: showHeader ? 'flex' : 'none' }} />
            </div>
            <div className={`burger-nav ${isBurgerOpen ? 'open' : ''}`}
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`nav-bar ${headerBackground && 'nav-bar-scroll'}`}>
                <div className={`regular-header row ${headerBackground && 'header-scroll'}`}>
                    <div className={`col`}>
                        <div className={`logo ${headerBackground && 'logo-scroll'}`}
                            onClick={scrollTop}>
                            לירי פנחס
                        </div>
                    </div>
                    <div className={'link-wrapper col-auto'}>
                        <Link to="/">
                            מי אני
                        </Link>
                    </div>
                    <div className={'link-wrapper col-auto'}>
                        <Link to="/">
                            תכנים
                        </Link>
                    </div>
                    <div className={'link-wrapper col-auto'}>
                        <Link to="/">
                            העשייה שלי
                        </Link>
                    </div>
                    <div className={'link-wrapper col-auto'}>
                        <Link to="/">
                            צור קשר
                        </Link>
                    </div>
                </div>
            </nav >
            <div className={`mobile-bar ${isBurgerOpen ? 'open-screen' : 'close-screen'}`}>
                <div className={'bar'}>
                    <div className={'section'}>
                        <Link to="/"
                            onSetActive={() => setIsBurgerOpen(false)}>
                            מי אני
                        </Link>
                    </div>
                    <div className={'section'}>
                        <Link to="/"
                            onSetActive={() => setIsBurgerOpen(false)}>
                            תכנים
                        </Link>
                    </div>
                    <div className={'section'}>
                        <Link to="/"
                            onSetActive={() => setIsBurgerOpen(false)} >
                            העשייה שלי
                        </Link>
                    </div>
                    <div className={'section'}>
                        <Link to="/"
                            onSetActive={() => setIsBurgerOpen(false)} >
                            צור קשר
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;