import { useEffect, useRef, useState } from 'react';

import classes from './Carousel.module.scss';

const Carousel = ({ elements }) => {
    const carouselRef = useRef(null);
    
    const [ activeNavigationItem, setActiveNavigationItem ] = useState(0);
    const handleCarouselNavigationClick = (moveTo) => {
        if (intervalIDRef.current) {
            clearInterval(intervalIDRef.current);
            moveCarouselInterval();
        }

        const widthOfCarousel = document.body.clientWidth;
        const setCarouselTo = moveTo * widthOfCarousel;
        carouselRef.current.style.transform = `translateX(-${ setCarouselTo }px)`;
        setActiveNavigationItem(moveTo);
    }

    const intervalIDRef = useRef();
    const moveCarouselInterval = () => {
        const intervalID = setInterval(() => {
            setActiveNavigationItem(previousActiveNavigationItem => {
                if (previousActiveNavigationItem < elements.length-1) {
                    handleCarouselNavigationClick(previousActiveNavigationItem + 1)
                } else if (previousActiveNavigationItem === elements.length-1) {
                    handleCarouselNavigationClick(0)
                }

                return previousActiveNavigationItem;
            });    
        }, 5000);

        intervalIDRef.current = intervalID;

        return intervalID;
    }

    useEffect(() => {
        const intervalID = moveCarouselInterval();

        return () => clearInterval(intervalID);
    }, []);

    
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
                            key={ index }
                            onClick={ () => handleCarouselNavigationClick(index) }
                            className={`${ classes["carousel__navigation-item"] } ${ activeNavigationItem === index ? (classes["carousel__navigation-item--active"]) : ("")  }`}></div>
                    );
                }) }
            </div>
        </div>
    );
}

export default Carousel;