import React, {JSX} from "react";

export const Section = ({children, background, backgroundSize = '100%', isBright}: {
    children: JSX.Element,
    background: string,
    backgroundSize?: string,
    isBright?: boolean
}) => {
    return (
        <>
            <section className="w-full min-h-[300px] relative">
                <div key={background} style={{background: `center top / ${backgroundSize} no-repeat ${background}`}}
                     className={'w-screen 2xl:bg-contain h-[90vh] relative grayscale'}>
                    {children}
                    {isBright &&
                        <div
                            className={`h-full w-full ${isBright ? 'bg-white' : 'bg-black'} opacity-70 z-10 absolute top-0`}/>
                    }
                </div>
            </section>
        </>
    );
};