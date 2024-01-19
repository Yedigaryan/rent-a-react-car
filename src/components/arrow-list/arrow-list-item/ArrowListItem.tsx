export const ArrowListItem = ({description, index}: { description: string, index: number }) => {
    return (
        <div className={`${index === 0 && 'border-t-2'} border-b-2 border-black w-full p-6 flex justify-between items-center hover:bg-white`}>
            <p className='text-7xl lg:text-5xl'>{description}</p>
            <img className='w-18 h-14' src="./assets/images/arrow.webp" alt="arrow"/>
        </div>
    );
};