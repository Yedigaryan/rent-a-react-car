import React, {useEffect, useState} from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
import {Section} from "./components/section/Section";
import {Carousel} from "./components/carousel/Carousel";
import {ArrowList} from "./components/arrow-list/ArrowList";
import {Footer} from "./components/footer/Footer";
import {Input} from "./components/input/Input";
import {Select} from "./components/select/Select";
import {ButtonWithArrow} from "./components/button-with-arrow/ButtonWithArrow";
import {CarLogo} from "./components/CarLogo";

function App() {
    const pictures: string[] = ['url(./assets/images/lady_in_a_car.webp)', 'url(./assets/images/woman_with_notebook.webp)', 'url(./assets/images/lady_in_a_car.webp)', 'url(./assets/images/woman_with_notebook.webp)']
    const [sliderIndex, setSliderIndex] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval((): void => {
    //         setSliderIndex((prevIndex: number): number => {
    //             if (prevIndex >= pictures.length - 1) {
    //                 return 0
    //             } else return ++prevIndex
    //         });
    //     }, 5000);
    //
    //     return () => clearInterval(intervalId);
    // }, []);

    const sliderPicture = pictures[sliderIndex];

    return (
        <>
            <div className='relative'>
                <Header/>
                <Section background={"url(./assets/images/girl_with_phone.webp)"}>
                    <div className='pt-[50vh] px-[10vw]'>
                        <h1 className='text-white 2xl:text-7xl font-extrabold decoration-from-font mb-10'>
                            WE MOVE <br/>
                            PROFESSIONALLY</h1>
                        <div className='w-full flex justify-between flex-nowrap'>
                            <Input/>
                            <Select/>
                            <Select/>
                            <div className='w-32 h-16 bg-gray-100 py-3 flex items-center'>
                                <img className='mx-auto w-3/5 h-3/5' src="./assets/images/car_icon.webp"
                                     alt="car_icon"/>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section isBright={true} background={"url(./assets/images/woman_with_notebook.webp)"}>
                    <>
                        <div
                            className='absolute z-20 top-[35vh] left-[10vw] text-black 2xl:text-6xl font-bold '>
                            <h3 className='leading-normal'>
                                Driving service <br/>
                                Limousine service <br/>
                                Airport transfer
                            </h3>
                            <p className='2xl:text-5xl font-medium leading-normal tracking-wider'>
                                Enrich your mobility with our
                                <br/>high-quality shuttle service.
                            </p>
                        </div>
                    </>
                </Section>
                <Section background={"url(./assets/images/black_BMW.webp)"}>
                    <div className='flex w-full h-full justify-center items-center flex-wrap flex-col'>
                        <h2 className='2xl:text-[7rem] lg:text-[6rem] text-white font-extrabold leading-tight text-center w-full'>
                            BOOK YOUR <br/>
                            PROFESSIONAL RIDE
                        </h2>
                        <ButtonWithArrow textClassName='p-20' className='2xl:text-4xl' buttonText='Request an exclusive transport service now'/>
                    </div>
                </Section>
                <Section background={'#d6d6d6'}>
                    <Carousel/>
                </Section>
                <Section backgroundSize={'cover'} background={"url(./assets/images/girl_with_macbook.webp)"}>
                    <div
                        className='flex w-full h-full justify-center items-start flex-wrap flex-col pl-[10vw] pt-[25vh]'>
                        <h1 className='text-[10rem] lg:text-[7rem] text-white font-extrabold leading-tight tracking-tight text-left w-full'>
                            BOOK EXCLUSIVE <br/>
                            CHAUFFER SERVICES
                        </h1>
                        <ButtonWithArrow textClassName='p-20' className='text-5xl' buttonText='Request an exclusive LimoX now'/>
                    </div>
                </Section>
                <Section isBright={true} background={"url(./assets/images/door_with_hand.webp)"}>
                    <ArrowList/>
                </Section>
                <Section key={`slide-${sliderIndex}`} background={sliderPicture}>
                    <div className='relative px-[8vw] py-10 h-full w-full'>
                        <h2 className='text-9xl lg:text-8xl font-bold w-full text-white tracking-tighter leading-tight mb-3'>
                            We move special guests <br/>
                            and famous people for <br/>
                            the big events
                        </h2>
                        <div className='absolute flex w-60 left-[50%] bottom-10'>
                            {pictures.map((picture: string, index: number) => (
                                <div
                                    className={` rounded-full w-8 h-8 mx-3
                                    ${index === sliderIndex ? 'bg-white' : 'bg-gray-500'} `}
                                    key={index}>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
                <Section background={'#ffffff'}>
                    <div className='flex w-full h-full items-center flex-wrap flex-col justify-center '>
                        <h2 className='text-9xl lg:text-8xl font-bold w-full text-center tracking-tighter leading-tight mb-3'>
                            AT LimoX WE HAVE
                            <br/>
                            THE BEST FLEET OPTIONS
                        </h2>
                        <p className='text-7xl lg:text-5xl font-medium w-full text-center leading-tight mb-16'>
                            Not only customers from Europe but from <br/>
                            all over the world trust LimoX service
                        </p>
                        <div className=' flex w-full h-1/5 justify-center flex-wrap'>
                            <CarLogo logo='./assets/images/logos/volkswagen_logo.webp'/>
                            <CarLogo logo='./assets/images/logos/bmw_logo.webp'/>
                            <CarLogo logo='./assets/images/logos/audi_logo.webp'/>
                            <CarLogo hasBorderRight={true} logo='./assets/images/logos/mersedes_logo.webp'/>
                        </div>
                    </div>
                </Section>
                <Section background={"url(./assets/images/car_interior.webp)"}>
                    <div
                        className='flex w-full h-full items-start pb-36 pl-60 tracking-tighter justify-end text-white text-8xl lg:text-7xl flex-wrap flex-col font-extrabold leading-normal'>
                        <h3 className='w-full'>
                            We are happy to hear from you.
                            <br/> Limousine service, airport transfer,
                            <br/> shuttle service
                        </h3>
                        <ButtonWithArrow textClassName='p-20' className='text-5xl' buttonText='Request an exclusive LimoX now'/>
                    </div>
                </Section>
                <Footer/>
            </div>
        </>
    );
}

export default App;
