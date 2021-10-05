import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Nav from '../shared/components/Nav';
import Carousel from '../shared/components/Carousel/Carousel';
import YouTubePlayerModal from '../shared/components/YouTubePlayerModal/YouTubePlayerModal';
import CarouselMobile from '../shared/components/CarouselMobile/CarouselMobile';

import seasonLogo from '../public/assets/carousel/season-logo.png';

import client from '../shared/contentful/contentful';

export async function getStaticProps() {
    const response = await client.getEntries();

    return {
        props: { posts: response.items }
    }
}

export default function Home ({ posts }) {
    const [ isYouTubePlayerModalOpen, setIsYouTubePlayerModalOpen ] = useState(false);
    const toggleYoutubePlayerModal = (event) => {
        event.stopPropagation();
        setIsYouTubePlayerModalOpen(previousIsYoutubePlayerModalOpen => !previousIsYoutubePlayerModalOpen);
    }

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
                                    <div
                                        onClick={ toggleYoutubePlayerModal }
                                        className="flex align-items-center">
                                        <div className="cursor-pointer">
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

                <div className="articles-container">
                    { posts.length ? (posts.slice(0, 2).map((post, index) => {
                        const options = { year: 'numeric', month: 'long', day: 'numeric' };
                        const formatDate = new Date(post.fields.published).toLocaleDateString('en-US', options);
                        return (
                            <Link href={`news/${ post.sys.id }`}>
                                <a className="article">
                                    <div
                                        key={ post.sys.id }
                                        className="article__thumbnail"
                                        style={{ backgroundImage: `url(${ post.fields.image.fields.file.url })`}}>
                                    </div>
                                    <div className="p-1 mb-2 font-thick">
                                        <div className="text-small letter-spacing-normal text-light-blue">
                                            { formatDate }
                                        </div>

                                        <h2 className="m-0 text-medium line-height-1">
                                            { post.fields.title }
                                        </h2>
                                    </div>
                                </a>
                            </Link>
                        );
                    })) : (null) }

                    <CarouselMobile elements={ posts.length ? (posts.slice(2).map((post, index) => {
                        const options = { year: 'numeric', month: 'long', day: 'numeric' };
                        const formatDate = new Date(post.fields.published).toLocaleDateString('en-US', options);
                        return (
                            <Link href={`news/${ post.sys.id }`}>
                                <a className="article">
                                    <div
                                        key={ post.sys.id }
                                        className="article__thumbnail"
                                        style={{ backgroundImage: `url(${ post.fields.image.fields.file.url })`}}>
                                    </div>
                                    <div className="p-1 mb-2 font-thick">
                                        <div className="text-small letter-spacing-normal text-light-blue">
                                            { formatDate }
                                        </div>

                                        <h2 className="m-0 text-medium line-height-1">
                                            { post.fields.title }
                                        </h2>
                                    </div>
                                </a>
                            </Link>
                        );
                    })) : (null) } />
                </div>

                { isYouTubePlayerModalOpen ? (
                    <YouTubePlayerModal
                        toggleYoutubePlayerModal={ toggleYoutubePlayerModal }
                        link="https://www.youtube-nocookie.com/embed/2lBFoxLvYHs" />
                ) : (null) } 
            </div>
        </div>
    );
}
