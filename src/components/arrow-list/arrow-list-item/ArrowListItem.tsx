import {motion} from "framer-motion";

export const ArrowListItem = ({description, index}: { description: string, index: number }) => {
    return (
        <div
            className={`${index === 0 && 'border-t-2'} border-b-2 cursor-custom-pointer border-black w-full 2xl:p-6 xl:p-3 lg:p-2 p-1 flex justify-between items-center hover:bg-white`}>
            <p className='text-xs xl:text-3xl lg:text-2xl md:text-xl sm:text-lg'>{description}</p>
            <motion.img whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        className='2xl:w-18 2xl:h-14 xl:w-16 xl:h-12 lg:w-14 lg:h-10 md:w-12 md:h-8 sm:w-10 sm:h-6 w-8 h-4'
                        src="./assets/images/arrow.webp" alt="arrow"/>
        </div>
    );
};