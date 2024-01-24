import {HamburgerMenu} from "../HamburgerMenu";
import React from "react";
import {AnimatePresence, motion} from "framer-motion";

export const Header = ({isMenuOpen, setIsMenuOpen}: {
    isMenuOpen: boolean,
    setIsMenuOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void
}) => {

    function toggleMenuHandler(): void {
        setIsMenuOpen((prevState: boolean) => {
            if (!prevState) {
                document.body.classList.add("overflow-hidden")
            } else {
                document.body.classList.remove("overflow-hidden")
            }
            return !prevState;
        })
    }

    return (
        <>
            <div className='h-16 w-full p-20 bg-black flex justify-between items-center px-10.2 fixed z-50'>
                <img src="./assets/images/logos/logo_header.svg" alt="Limox logo"/>
                <div className="justify-between flex w-60 items-center">
                    <p className='text-2xl text-white '>QUICK BOOKING</p>
                    <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenuHandler}/>
                </div>
            </div>
            <div className='p-10 h-[120px] w-full'></div>
            <AnimatePresence>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: isMenuOpen ? 1 : 0, display: isMenuOpen ? 'block' : 'none'}}
                    transition={{duration: 0.5, ease: "easeInOut", delay: 0.1}}
                    exit={{opacity: 0}}
                    className='fixed w-[100vw] h-[90vh] bg-white z-10 pt-10 flex flex-wrap justify-center align-middle'>
                    <h1 className='uppercase w-full text-center text-black text-6xl'>Our Menu</h1>

                    <ul className='text-center text-black text-4xl'>
                        <li>menu item</li>
                        <li>menu item</li>
                        <li>menu item</li>
                    </ul>
                </motion.div>
            </AnimatePresence>
        </>
    );
};