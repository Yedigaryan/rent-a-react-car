import React from "react";

export const    Arrow = ({ className, onClick }: { className?: string, onClick?: () => void }) => {
    return (
        <>
            <img onClick={onClick} className={className} src="./assets/images/arrow.svg" alt="arrow"/>
        </>
    );
};