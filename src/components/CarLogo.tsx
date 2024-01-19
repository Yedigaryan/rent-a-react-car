import React from "react";
import {imageAltExtractor} from "../helpers/image-alt-extractor";

export const CarLogo = ({logo, hasBorderRight}: {logo: string, hasBorderRight?: boolean}) => {
    return (
        <div className={`w-1/6 p-10 flex items-center justify-center border-l ${hasBorderRight && 'border-r'} border-gray-500`}>
            <img src={logo} alt={imageAltExtractor(logo)}/>
        </div>
    );
};