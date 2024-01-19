import {CarouselCardInterface} from "../../interfaces/carousel-card.interface";
import {CarouselCard} from "./CarouselCard";
import React, {useEffect, useState} from "react";
import {Arrow} from "../../Arrow";

export const Carousel = () => {
    const cards: CarouselCardInterface[] = [
        {
            header: 'Luxury Van',
            headerImage: './assets/images/logos/logo_header_dark.svg',
            description: <span>up to 5 Guests <br/> Conference seating <br/> available upon request</span>,
            image: './assets/images/mercedes_suv.webp',
        }, {
            header: 'Van Standart',
            headerImage: './assets/images/logos/logo_header_dark.svg',
            description: <span>up to 8 Guests <br/> Row seating. We are happy to organize for groups of 9 or more guests</span>,
            image: './assets/images/mercedes_van.webp',
        }, {
            header: 'Limousine',
            headerImage: './assets/images/a_25.svg',
            description: <span>up to 3 Guests</span>,
            image: './assets/images/mercedes_s_class.webp',
        },
    ]
    const [focusIndex, setFocusIndex] = useState(1)

    const leftClickHandler = () => {
        setFocusIndex(prevState => prevState === 0 ? cards.length - 1 : prevState - 1)
        console.log('left click')
    }
    const rightClickHandler = () => {
        setFocusIndex(prevState => prevState === cards.length - 1 ? 0 : prevState + 1)
        console.log('right click')
    }

    useEffect(() => {

    })

    return (
        <>
            <div className='relative h-full w-full'>
                <Arrow onClick={leftClickHandler}
                       className={'rotate-180 w-40 h-40 left-[10%] top-[50%] absolute -translate-x-1/2 -translate-y-1/2'}/>
                <CarouselCard isLeftCard={true} {...cards[focusIndex <= 0 ? cards.length - 1 : (focusIndex - 1)]}/>
                <CarouselCard isFocused={true} {...cards[focusIndex]}/>
                <CarouselCard isRightCard={true} {...cards[focusIndex >= cards.length - 1 ? 0 : (focusIndex + 1)]}/>
                <Arrow onClick={rightClickHandler}
                       className={'w-40 h-40 left-[90%] top-[50%] absolute -translate-x-1/2 -translate-y-1/2'}/>
            </div>
        </>
    );
};