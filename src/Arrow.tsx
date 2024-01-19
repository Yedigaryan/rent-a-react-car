import React from "react";

export const    Arrow = ({ className, onClick }: { className: string, onClick?: () => void }) => {
    return (
        <>
            <div onClick={onClick} className={` ${className} `}>
                     <span
                         className='top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 rotate-45 w-[50px] border-b border-2 border-black absolute'></span>
                <span
                    className='top-[61%] left-[50%] -translate-x-1/2 -translate-y-1/2 -rotate-45 w-[50px] border-b border-2 border-black absolute'></span>
            </div>
        </>
    );
};