import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import NavMenu from './NavMenu';

import epicGamesLogo from '/public/assets/epic-games-logo.png';
import fortniteLogo from '/public/assets/fortnite-logo.png';

const links = [
    {
        id: 1,
        link: '/',
        text: 'battle pass'
    },
    {
        id: 2,
        link: '/',
        text: 'crew'
    },
    {
        id: 3,
        link: '/',
        text: 'v-bucks'
    },
    {
        id: 4,
        link: '/',
        text: 'competitive'
    },
    {
        id: 5,
        link: '/',
        text: 'news'
    },
    {
        id: 6,
        link: '/',
        text: 'merch'
    },
    {
        id: 7,
        link: '/',
        text: 'cosplay'
    },
    {
        id: 8,
        link: '/',
        text: 'help'
    }
];

const Nav = () => {
    const [ isHamburgerMenuOpen, setIsHamburgerMenuOpen ] = useState(false);
    const handleHamburgerMenuClick = () => {
        setIsHamburgerMenuOpen(previousIsHamburgerMenuOpen => !previousIsHamburgerMenuOpen);
    }

    const [ isSearching, setIsSearching ] = useState(false);
    const toggleIsSearching = () => {
        setIsSearching(previousIsSearching => !previousIsSearching);
    }

    return (
        <nav className="nav flex align-items-center justify-content-between pl-2">
            <div className="flex align-items-center h-100">
                <Link href="/">
                    <a title="epic games logo">
                        <Image
                            src={ epicGamesLogo }
                            width={ 34 }
                            height={ 40 }
                            alt="epic games logo" />
                    </a>
                </Link>

                <Link href="/">
                    <a
                        className="ml-2"
                        title="fortnite logo">
                        <Image
                            src={ fortniteLogo }
                            width={ 100 }
                            height={ 32 }
                            alt="fortnite logo" />
                    </a>
                </Link>

                { isSearching === false ? (
                    <ul className="nav-links-desktop ml-2 h-100">
                        <li className="nav-link-desktop position-relative">
                            <div className="text-small cursor-pointer text-uppercase text-gray py-1 px-2 h-100 flex justify-content-center align-items-center">
                                modes
                            </div>
                            <div className="yellow-rectangle"></div>
                        </li>
                        { links.map(link => {
                            return (
                                <li
                                    key={ link.id }
                                    className="nav-link-desktop position-relative">
                                    <a
                                        className="text-small text-uppercase text-gray py-1 px-2 h-100 flex justify-content-center align-items-center" 
                                        href={ link.link }>
                                        { link.text }
                                    </a>
                                    <div className="yellow-rectangle"></div>
                                </li>
                            );
                        }) }
                    </ul>
                ) : (null) }
            </div>

            <div className="flex h-100">
                <div className="position-relative flex align-items-center">
                    <form className={`flex align-items-center justify-content-center desktop-nav-search ${ isSearching ? ("desktop-nav-search--animate") : ("") }`}>
                        <label className="d-none" htmlFor="search">
                            search
                        </label>
                        <input
                            className="nav-menu__input p-1"
                            type="text"
                            autoComplete="off"
                            placeholder="Search..." />

                        <button className="nav-menu__button background-black-4-hover w-10">
                            <i className="las la-search text-light-gray text-large rotate-90deg"></i>
                        </button>

                        <button
                            type="button"
                            onClick={ toggleIsSearching }
                            className="nav-menu__button background-black-4-hover w-10">
                            <i class="las la-times text-light-gray text-large"></i>
                        </button>
                    </form>
                </div>
                <div className="nav-links-desktop">
                    { isSearching === false ? (
                        <div
                            onClick={ toggleIsSearching }
                            className="flex justify-content-center align-items-center cursor-pointer hover-rectangle position-relative px-1">
                            <i className="las la-search rotate-90deg"></i>

                            <div className="yellow-rectangle"></div>
                        </div>
                    ) :(null) }

                    <div className="flex justify-content-center align-items-center mx-3 cursor-pointer">
                        <i className="las la-globe"></i>
                    </div>

                    <div className="flex justify-content-center align-items-center cursor-pointer mr-2">
                        <div className="position-relative">
                            <i className="las la-user"></i>
                            <div className="user-status"></div>
                        </div>

                        <span className="text-small text-gray text-uppercase ml-1">sign in</span>
                    </div>
                </div>
                <Link href="/">
                    <a className="download-link flex">
                        download
                    </a>
                </Link>

                <svg
                    onClick={ handleHamburgerMenuClick }
                    className={`${ isHamburgerMenuOpen ? "animate-hamburger-menu" : "" } px-1 hamburger-menu`}>
                    <rect className="hamburger-menu__rectangle"></rect>
                    <rect className="hamburger-menu__rectangle"></rect>
                    <rect className="hamburger-menu__rectangle"></rect>
                </svg> 
            </div>

			<NavMenu isNavMenuOpen={ isHamburgerMenuOpen } />
        </nav>
    );
}

export default Nav;