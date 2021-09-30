import Link from 'next/link';
import Image from 'next/image';

import epicGamesLogo from '/public/assets/epic-games-logo.png';
import fortniteLogo from '/public/assets/fortnite-logo.png';

const Nav = () => {
    return (
        <nav className="nav flex align-items-center justify-content-between pl-2">
            <div>
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
            </div>

            <div className="flex h-100">
                <Link href="/">
                    <a className="download-link flex">
                        download
                    </a>
                </Link>

                <svg className="px-1 hamburger-menu">
                    <rect className="hamburger-menu__rectangle" />
                    <rect className="hamburger-menu__rectangle" />
                    <rect className="hamburger-menu__rectangle" />
                </svg> 
            </div>
        </nav>
    );
}

export default Nav;