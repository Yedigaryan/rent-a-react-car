import React from "react";
import {MenuButton} from "./MenuButton";

export const HamburgerMenu = ({isOpen, toggleMenu}: { isOpen: boolean, toggleMenu: Function }) => {

    const menuButtonStyle = {
        marginLeft: '0'
    };
    function onClickHandler(): void {
        toggleMenu();
    }

    return (
        <>
            <MenuButton
                isOpen={isOpen}
                onClick={() => onClickHandler()}
                style={menuButtonStyle}
            />
        </>
    );
};