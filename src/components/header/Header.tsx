import {HamburgerMenu} from "../HamburgerMenu";
import {useState} from "react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenuHandler(): void {
            setIsMenuOpen(prevState => !prevState)
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
        </>
    );
};