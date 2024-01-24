import {motion} from "framer-motion";
import React from "react";
import {Arrow} from "../../Arrow";

export const ButtonWithArrow = ({buttonText, className, textClassName}: {
    buttonText: string,
    className?: string,
    textClassName?: string
}) => {
    return (
        <>
            <motion.div whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        className={'cursor-custom-pointer'}>
                <div className={`flex flex-wrap mt-2  ${className} `}>
                    <div className={`bg-black h-40 2xl:h-40 sm:h-20 flex items-center p-10 lg:p-20 ${textClassName}`}>
                        <p className='text-white font-serif lx:text-5xl lg:text-3xl'>{buttonText}</p>
                    </div>
                    <div
                        className='bg-white w-2/12 h-40 lg:w-40 lg:h-40 sm:w-20 sm:h-20 flex items-center justify-center'>
                        <Arrow className='w-1/2 h-1/2'/>
                    </div>
                </div>
            </motion.div>
        </>
    );
};