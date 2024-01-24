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
        <div className={`2xl:py-10  2xl:px-20 xl:py-8  xl:px-16 lg:py-6  lg:px-12 md:py-4  md:px-8 py-2  px-6
        absolute min-w-[200px]  w-[60vw] -translate-y-1/2 -translate-x-1/2 top-[50%] 
        flex flex-wrap flex-col justify-between items-center
        ${isFocused && ' h-[80vh] bg-gray-100 left-[50%] z-10'}
        ${!isFocused && 'h-[60vh]'}
        ${isLeftCard && 'left-[35%] lx:left-[40%] '}
        ${isRightCard && 'left-[65%] lx:left-[70%]'}
        `}>
            <div>
                <div className='flex flex-wrap justify-start items-center mb-3'>
                    <img src={headerImage} alt={imageAltExtractor(headerImage)}/>
                    <h3 className='2xl:text-4xl ml-3'>{header}</h3>
                </div>
                <div className='2xl:text-2xl w-full overflow-ellipsis'>{description}</div>
            </div>
            <div className='w-full h-3/6 flex justify-center items-center'>
                <img className='w-5/6  h-full sm:w-1/2 sm:h-2/3 mx-auto' src={image} alt={imageAltExtractor(image)}/>
            </div>
            {isFocused && <ButtonWithArrow
                textClassName='px-5 2xl:w-min-[600px]'
                className='flex-nowrap 2xl:text-2xl'
                buttonText='Request an exclusive LimoX now'/>}
            {!isFocused && <div
                className='h-full w-full opacity-70 z-10 absolute top-0 bg-black'/>
            }
        </div>
    );
};