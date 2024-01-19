export const HamburgerMenu = ({isOpen, toggleMenu}: {isOpen: boolean, toggleMenu: Function}) => {
    function onClickHandler(): void {
        toggleMenu();
    }

    return (
        <>
            <div onClick={() => onClickHandler()} className="flex w-8 h-6 flex-wrap items-center cursor-pointer">
            <span className="block h-0.5 w-8 animate-pulse bg-amber-50"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-amber-50"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-amber-50"></span>
            </div>
        </>
    );
};