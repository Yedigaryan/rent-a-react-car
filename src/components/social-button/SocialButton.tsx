import {imageAltExtractor} from "../../helpers/image-alt-extractor";
import React from "react";

export const SocialButton = ({image, link}: { image: string, link: string }) => {

    return (
        <>
            <div className="rounded-full bg-gray-200 w-[50px] h-[50px] flex items-center justify-center mx-4">
                <a href={link} target='_blank'>
                    <img className='w-7 h-7' src={image} alt={imageAltExtractor(image)}/>
                </a>
            </div>
        </>
    );
};