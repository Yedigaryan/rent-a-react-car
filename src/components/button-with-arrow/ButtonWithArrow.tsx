import React from "react";
import {Arrow} from "../../Arrow";

export const ButtonWithArrow = ({buttonText , className, textClassName}: {buttonText: string, className?: string, textClassName?: string}) => {
    return (
        <>
            <div className={`flex flex-wrap mt-2 ${className}`}>
                <div className={`bg-black h-40 flex items-center ${textClassName}`}>
                    <p className='text-white font-serif'>{buttonText}</p>
                </div>
                <div className='bg-white w-40 h-40 relative'>
                    <Arrow className={'w-full h-full'}/>
                </div>
            </div>
        </>
    );
};