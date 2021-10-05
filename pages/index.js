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

    const createGetBackgroundImageWidthFunction = () => {
        let reverseWidth = false;

        return index => {
            if ((index % 8 === 0 || index === 2) && index !== 0) {
                reverseWidth = !reverseWidth;
            }

            console.log(index, reverseWidth)

            if (index % 6 === 0 || index === 0) {
                if (reverseWidth) return '41%';

                return '56%';
            } else if (index % 7 === 0 || index === 1) {
                if (reverseWidth) return '56%';

                return '41%';
            }
        }
    }

    const getBackgroundImageWidth = createGetBackgroundImageWidthFunction();

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

                <div className="articles-container d-none-desktop">
                    { posts.length ? (posts.slice(0, 2).map(post => {
                        const options = { year: 'numeric', month: 'long', day: 'numeric' };
                        const formatDate = new Date(post.fields.published).toLocaleDateString('en-US', options);
                        return (
                            <Link
                                key={ post.sys.id }
                                href={`news/${ post.sys.id }`}>
                                <a className="article mb-2">
                                    <div
                                        className="article__thumbnail"
                                        style={{ backgroundImage: `url(${ post.fields.image.fields.file.url })`}}>
                                    </div>
                                    <div className="p-2 font-thick">
                                        <div className="text-medium letter-spacing-normal text-light-blue">
                                            { formatDate }
                                        </div>

                                        <h2 className="m-0 text-large line-height-1">
                                            { post.fields.title }
                                        </h2>
                                    </div>
                                </a>
                            </Link>
                        );
                    })) : (null) }

                    <CarouselMobile elements={ posts.length ? (posts.slice(2).map(post => {
                        const options = { year: 'numeric', month: 'long', day: 'numeric' };
                        const formatDate = new Date(post.fields.published).toLocaleDateString('en-US', options);
                        return (
                            <Link
                                key={ post.sys.id }
                                href={`news/${ post.sys.id }`}>
                                <a className="article">
                                    <div
                                        className="article__thumbnail"
                                        style={{ backgroundImage: `url(${ post.fields.image.fields.file.url })`}}>
                                    </div>
                                    <div className="p-1 mb-2 font-thick">
                                        <div className="text-medium letter-spacing-normal text-light-blue">
                                            { formatDate }
                                        </div>

                                        <h2 className="m-0 text-large line-height-1">
                                            { post.fields.title }
                                        </h2>
                                    </div>
                                </a>
                            </Link>
                        );
                    })) : (null) } />
                </div>

                <div className="articles-container px-8 flex-desktop justify-content-between flex-wrap d-none">
                    { posts.length ? (posts.map((post, index) => {
                        const options = { year: 'numeric', month: 'long', day: 'numeric' };
                        const formatDate = new Date(post.fields.published).toLocaleDateString('en-US', options);
                        let valueOfBackgroundImageWidth = getBackgroundImageWidth(index);
                        
                        if (valueOfBackgroundImageWidth) {
                            return (
                                <Link
                                    key={ post.sys.id }
                                    href={`news/${ post.sys.id }`}>
                                    <a
                                        className="article flex align-items-end"
                                        style={{ height: "600px", width: valueOfBackgroundImageWidth }}>
                                        <div
                                            className="article--background-image"
                                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .2)), url(${ post.fields.image.fields.file.url })` }}>
                                        </div> 
                                        <div className="position-relative p-1 mb-2 font-thick text-white">
                                            <div className="text-medium letter-spacing-normal">
                                                { formatDate }
                                            </div>

                                            <h2 className="m-0 text-extra-large">
                                                { post.fields.title }
                                            </h2>
                                        </div>
                                    </a>
                                </Link>
                            );
                        }

                        return (
                            <Link
                                key={ post.sys.id }
                                href={`news/${ post.sys.id }`}>
                                <a className="article my-2">
                                    <div className="article__thumbnail">
                                        <div
                                            className="article--background-image"
                                            style={{ backgroundImage: `url(${ post.fields.image.fields.file.url })`}}></div>
                                    </div>
                                    <div className="p-1 mb-2 font-thick">
                                        <div className="text-medium letter-spacing-normal text-light-blue">
                                            { formatDate }
                                        </div>

                                        <h2 className="m-0 text-large line-height-1">
                                            { post.fields.title }
                                        </h2>
                                    </div>
                                </a>
                            </Link>
                        );
                    })) : (null) }
                </div>

                <div className="text-center py-8">
                    <Link href="all-news">
                        <a className="py-05 px-3 text-4 font-thick text-center button-white text-uppercase">
                            all news
                        </a>
                    </Link>
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
