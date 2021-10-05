import { useRef, useState } from 'react';

import classes from './CarouselMobile.module.scss';

const CarouselMobile = ({ elements }) => {
    const carouselRef = useRef(null);
    const widthOfCarouselElementRef = useRef(null);
    
    const [ amountMovedBy, setAmountMovedBy ] = useState(0);
    const handleCarouselNavigation = (moveBy) => {
        const carouselElementWidth = widthOfCarouselElementRef.current.getBoundingClientRect().width;
        let setCarouselTo = 0; 
        if (moveBy === 1) {
            setCarouselTo = amountMovedBy - carouselElementWidth;

            if (amountMovedBy === 0) {
                setCarouselTo -= 30;
            } else {
                setCarouselTo -= 20;
            }
        } else if (moveBy === -1) {
            setCarouselTo = amountMovedBy + carouselElementWidth;

            if (amountMovedBy === -(carouselElementWidth + 30)) {
                setCarouselTo += 30;
            } else {
                setCarouselTo += 20;
            }
        }

        carouselRef.current.style.transform = `translateX(${ setCarouselTo }px)`;
        setAmountMovedBy(setCarouselTo);
    }

    const disableRightNavigationButton = () => {
        if (widthOfCarouselElementRef.current === null) return undefined;

        const carouselElementWidth = widthOfCarouselElementRef.current.getBoundingClientRect().width;
        let maxTranslateX = carouselElementWidth * (elements.length - 1);

        // add margin
        maxTranslateX += 20 * (elements.length - 2);
        maxTranslateX += 30;

        return amountMovedBy === -(maxTranslateX);
    }
    
    return (
        <div>
            <div className={ classes["carousel__navigation"] }>
                <button
                    disabled={ amountMovedBy === 0 ? (true): (undefined) }
                    onClick={ () => handleCarouselNavigation(-1) }
                    className={ classes["carousel__navigation-button"] }>
                    <i className="las la-arrow-left"></i>
                </button>
                <button
                    disabled={ disableRightNavigationButton() }
                    onClick={ () => handleCarouselNavigation(1) }
                    className={ classes["carousel__navigation-button"] }>
                    <i className="las la-arrow-right"></i>
                </button>
            </div>

            <div
                ref={ carouselRef }
                className={ classes["carousel"] }>
                { elements.map((element, index) => {
                    return (
                        <div
                            ref={ index === 0 ? ( widthOfCarouselElementRef ) : (undefined) }
                            key={ index }
                            className={ classes["carousel__item"] }>
                            { element }
                        </div>
                    );
                }) }
            </div>
        </div>
    );
}

export default CarouselMobile;