import {ArrowListItem} from "./arrow-list-item/ArrowListItem";

export const ArrowList = () => {
    const listItems: string[] = [
        'Our vehicles – as demanded by our guests',
        'Our drivers – professionalism personified',
        'Our quality promise – of course reliable',
        'Our planning – relaxed for the event',
        'Our valet service – relaxed for the event',
        'Driving experience – control the adventure'
    ]
    return (
        <div className='z-20 absolute flex flex-wrap top-[50%] left-[50%] w-4/5 h-4/6 -translate-y-1/2 -translate-x-1/2'>
            {
                listItems.map((item: string, index: number) => (
                    <ArrowListItem index={index} description={item} key={item}/>
                ))}
        </div>
    );
};