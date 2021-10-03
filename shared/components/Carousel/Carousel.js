import { useRef, useState } from 'react';

import classes from './Carousel.module.scss';

const Carousel = ({ elements }) => {
    const carouselRef = useRef(null);
    
    const [ activeNavigationItem, setActiveNavigationItem ] = useState(0);
    const handleCarouselNavigationClick = (index) => {
        const widthOfCarousel = document.body.clientWidth;
        const setCarouselTo = index * widthOfCarousel;
        carouselRef.current.style.transform = `translateX(-${ setCarouselTo }px)`;
        setActiveNavigationItem(index);
    }
    
    return (
        <div className="position-relative">
            <div
                ref={ carouselRef }
                className={ classes["carousel"] }>
                { elements.map((element, index) => {
                    return (
                        <div
                            key={ index }
                            className={ classes["carousel__item"] }>
                            { element }
                        </div>
                    );
                }) }
            </div>

            <div className={ classes["carousel__navigation-container"] }>
                { elements.map((element, index) => {
                    return (
                        <div
                            onClick={ () => handleCarouselNavigationClick(index) }
                            className={`${ classes["carousel__navigation-item"] } ${ activeNavigationItem === index ? (classes["carousel__navigation-item--active"]) : ("")  }`}></div>
                    );
                }) }
            </div>
        </div>
    );
}

export default Carousel;