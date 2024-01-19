import {imageAltExtractor} from "../../helpers/image-alt-extractor";
import {ButtonWithArrow} from "../button-with-arrow/ButtonWithArrow";
import {CarouselCardInterface} from "../../interfaces/carousel-card.interface";

export const CarouselCard = ({
                                 header,
                                 headerImage,
                                 description,
                                 image,
                                 isFocused,
                                 isLeftCard,
                                 isRightCard
                             }: CarouselCardInterface) => {
    return (
        <div className={`py-10 px-20 absolute 2xl:min-w-[200px]  2xl:w-[38vw] -translate-y-1/2 -translate-x-1/2 top-[50%] flex flex-wrap justify-center items-center
        ${isFocused && ' h-[70vh] bg-gray-100 left-[50%] z-10'}
        ${!isFocused && 'h-[60vh]'}
        ${isLeftCard && 'left-[40%]'}
        ${isRightCard && 'left-[60%]'}
        `}>
            <div>
                <div className='flex flex-wrap justify-start items-center mb-3'>
                    <img src={headerImage} alt={imageAltExtractor(headerImage)}/>
                    <h3 className='2xl:text-4xl ml-3'>{header}</h3>
                </div>
                <div className='2xl:text-2xl w-full overflow-ellipsis'>{description}</div>
            </div>
            <img className='w-5/6 h-3/6 mx-auto' src={image} alt={imageAltExtractor(image)}/>
            <ButtonWithArrow
                textClassName='px-10 2xl:w-[450px]'
                className='scale-50 flex-nowrap 2xl:text-2xl'
                buttonText='Request an exclusive LimoX now'/>
            {!isFocused && <div
                className='h-full w-full opacity-70 z-10 absolute top-0 bg-black'/>
            }
        </div>
    );
};