import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Nav from '../shared/components/Nav';
import Carousel from '../shared/components/Carousel/Carousel';

import seasonLogo from '../public/assets/carousel/season-logo.png';

export default function Home () {
    return (
        <div>
            <Head>
                <title>fortnite</title>
                <meta name="description" content="fortnite" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Nav />

                <Carousel elements={
                    [
                        <div className="carousel__background-image carousel__background-image-1">
                            <div className="carousel__season-logo">
                                <Image
                                    src={ seasonLogo }
                                    height={ 50 }
                                    width={ 50 }
                                    alt="season logo" />
                            </div>
                            <div className="h-100 flex flex-direction-column justify-content-between align-items-center carousel__item-padding justify-content-end-desktop font-thick text-uppercase color-white text-large">
                                <div className="w-100 text-center drop-shadow-pink">
                                    <div className="font-italic mb-1">
                                        season 8
                                    </div>
                                    <img
                                        className="carousel__cubed-logo"
                                        src="/assets/carousel/cubed-logo.png"
                                        alt="cubed logo" /> 
                                </div>
                                <div className="flex flex-direction-column align-items-center flex-direction-row-desktop mt-1">
                                    <div className="flex align-items-center">
                                        <div>
                                            watch trailer
                                        </div>
                                        <button className="play-video-circle">
                                            <i className="las la-play"></i>
                                        </button>
                                    </div>
                                    <Link href="/">
                                        <a className="yellow-polygon">
                                            play free now!
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>,
                        <div className="carousel__background-image carousel__background-image-2">
                            <div className="carousel__season-logo">
                                <Image
                                    src={ seasonLogo }
                                    height={ 50 }
                                    width={ 50 }
                                    alt="season logo" /> 
                            </div>

                            <div className="drop-shadow-pink h-100 flex flex-direction-column justify-content-center align-items-end font-thick text-uppercase color-white carousel-padding">
                                <div className="text-center carousel__second-wrapper">
                                    <div className="font-italic text-large mb-1">
                                        season 8
                                    </div>
                                    <img
                                        className="carousel__cubed-logo"
                                        src="/assets/carousel/cubed-logo.png"
                                        alt="cubed logo" /> 
                                    <div className="mt-1">
                                        <div className="font-italic text-dark-gray text-extra-large">
                                            battle pass
                                        </div>
                                        <Link href="/">
                                            <a className="yellow-polygon">
                                                play free now!
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ]
                } />
            </div>
        </div>
    );
}
