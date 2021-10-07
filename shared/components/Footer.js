import Link from 'next/link';

const links = [
    {
        id: 0,
        link: '/',
        text: 'Home'
    },
    {
        id: 1,
        link: '/',
        text: 'Battle Pass'
    },
    {
        id: 2,
        link: '/',
        text: 'Watch'
    },
    {
        id: 3,
        link: '/',
        text: 'Get Fortnite'
    },
    {
        id: 4,
        link: '/',
        text: 'News'
    },
    {
        id: 5,
        link: '/',
        text: 'FAQ'
    },
    {
        id: 6,
        link: '/',
        text: 'EULA'
    },
    {
        id: 7,
        link: '/',
        text: 'Competitive'
    },
    {
        id: 8,
        link: '/',
        text: 'V-Bucks Card'
    },
    {
        id: 9,
        link: '/',
        text: 'Help'
    },
    {
        id: 10,
        link: '/',
        text: 'Safety and Security'
    },
    {
        id: 11,
        link: '/',
        text: 'Community Rules'
    },
];

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <footer className="footer">
            <div className="flex justify-content-between align-items-center">
                <div className="socials text-light-gray">
                    <Link href="/">
                        <a>
                            <i className="lab la-facebook-square color-yellow-hover"></i>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <i className="lab la-twitter color-yellow-hover"></i>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <i className="lab la-twitch color-yellow-hover"></i>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <i className="lab la-youtube color-yellow-hover"></i>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <i className="lab la-instagram color-yellow-hover"></i>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <i className="lab la-snapchat-ghost color-yellow-hover"></i>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <i className="lab la-vk color-yellow-hover"></i>
                        </a>
                    </Link>
                </div>
                <button
                    onClick={ scrollToTop }
                    className="footer__scroll-up b-yellow-hover">
                    <i className="las la-angle-up color-yellow-hover"></i>
                </button>
            </div>
            <div className="flex-desktop justify-content-between-desktop align-items-center-desktop">
                <div className="flex flex-wrap w-50 mt-2">
                    <ul className="mr-2 mb-1 text">
                        { links.slice(0, 4).map(link => {
                            return (
                                <li key={ link.id }>
                                    <a
                                        className="text text-gray letter-spacing-normal color-yellow-hover footer__link " 
                                        href={ link.link }>
                                        { link.text }
                                    </a>
                                </li>
                            );
                        }) }
                    </ul>

                    <ul className="mr-2-desktop">
                        { links.slice(4, 8).map(link => {
                            return (
                                <li key={ link.id }>
                                    <a
                                        className="text text-gray letter-spacing-normal color-yellow-hover footer__link" 
                                        href={ link.link }>
                                        { link.text }
                                    </a>
                                </li>
                            );
                        }) }
                    </ul>

                    <ul className="mr-2-desktop">
                        { links.slice(8).map(link => {
                            return (
                                <li key={ link.id }>
                                    <a
                                        className="text text-gray letter-spacing-normal color-yellow-hover footer__link" 
                                        href={ link.link }>
                                        { link.text }
                                    </a>
                                </li>
                            );
                        }) }
                    </ul>
                </div>
                <div className="w-50 m-0-auto mt-2 text-center w-20-desktop mx-0-desktop">
                    <div className="text-small text-yellow font-thick text-uppercase letter-spacing-normal mb-1">
                        us/canada
                    </div>
                    <img
                        className="w-100"
                        src="/assets/rating.png" 
                        alt="rating" />
                </div>
            </div>

            <div className="mt-1 bt-1-dark-gray">
                <div className="pt-2 w-50-desktop text-light-gray text letter-spacing-normal line-height-2">
                    © 2021, Epic Games, Inc. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine 4 and UE4 are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. All rights reserved.
                </div>
            </div>

            <div className="flex flex-direction-column align-items-center mt-2 flex-direction-row-desktop">
                <Link href="/">
                    <a className="text-light-gray text letter-spacing-normal mb-1 mr-1-desktop mb-0-desktop color-yellow-hover">
                        Terms of Service
                    </a>
                </Link>

                <Link href="/">
                    <a className="text-light-gray text letter-spacing-normal color-yellow-hover">
                        Privacy Policy
                    </a>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;