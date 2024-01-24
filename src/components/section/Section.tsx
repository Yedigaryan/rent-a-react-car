import { motion } from "framer-motion";
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
                <motion.div initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.4, delay: 0.2, ease: "easeInOut"}} key={background} style={{backgroundImage: `${background}`}}
                     className={'w-screen 2xl:bg-cover h-[90vh] relative grayscale md:bg-cover sm:bg-cover bg-center bg-no-repeat'}>
                    {children}
                    {isBright &&
                        <div
                            className={`h-full w-full ${isBright ? 'bg-white' : 'bg-black'} opacity-70 z-10 absolute top-0`}/>
                    }
                </motion.div>
            </section>
        </>
    );
};