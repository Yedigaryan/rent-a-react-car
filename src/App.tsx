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
import {motion} from "framer-motion"
import {DatePicker} from "./components/date-picker/DatePicker";


function App() {
    const pictures: string[] = ['url(./assets/images/lady_in_a_car.webp)', 'url(./assets/images/woman_with_notebook.webp)', 'url(./assets/images/lady_in_a_car.webp)', 'url(./assets/images/woman_with_notebook.webp)']
    const [sliderIndex, setSliderIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const intervalId = setInterval((): void => {
            setSliderIndex((prevIndex: number): number => {
                if (prevIndex >= pictures.length - 1) {
                    return 0
                } else return ++prevIndex
            });
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const sliderPicture = pictures[sliderIndex];

    return (
        <div className='relative'>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <Section background={"url(./assets/images/girl_with_phone.webp)"}>
                <div className='pt-[50vh] md:pt-[30vw] px-[10vw]'>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.4, delay: 0.7, ease: "easeInOut"}}
                        viewport={{once: true}}
                    >
                        <h1 className='text-white font-extrabold decoration-from-font mb-10
                            2xl:text-7xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-2xl
                            '>
                            WE MOVE <br/>
                            PROFESSIONALLY</h1>
                    </motion.div>
                    <div className='w-full flex justify-between flex-nowrap'>
                        <Input/>
                        <DatePicker/>
                        <Select/>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className='w-32 h-16 bg-gray-100 py-3 flexF items-center cursor-custom-pointer'>
                            <img className='mx-auto w-3/5 h-3/5' src="./assets/images/car_icon.webp"
                                 alt="car_icon"/>
                        </motion.div>
                    </div>
                </div>
            </Section>
            <Section isBright={true} background={"url(./assets/images/woman_with_notebook.webp)"}>
                <>
                    <div
                        className='absolute z-20 top-[35vh] left-[10vw] text-black 2xl:text-6xl text-5xl lg:text-[3rem] md:text-4xl sm:text-3xl font-bold '>
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 0.4, delay: 0.7, ease: "easeInOut"}}
                            viewport={{once: true}}
                        >
                            <h3 className='leading-normal'>
                                Driving service <br/>
                                Limousine service <br/>
                                Airport transfer
                            </h3>
                            <p className='2xl:text-5xl font-medium leading-normal tracking-wider'>
                                Enrich your mobility with our
                                <br/>high-quality shuttle service.
                            </p>
                        </motion.div>
                    </div>
                </>
            </Section>
            <Section background={"url(./assets/images/black_BMW.webp)"}>
                <motion.div initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 0.4, delay: 0.7, ease: "easeInOut"}}
                            viewport={{once: true}}
                            className='flex w-full h-full justify-center items-center flex-wrap flex-col'>
                    <h2 className='2xl:text-[7rem] xl:text-[6rem] lg:text-7xl md:text-6xl sm:text-5xl text-white font-extrabold leading-tight text-center w-full'>
                        BOOK YOUR <br/>
                        PROFESSIONAL RIDE
                    </h2>
                    <ButtonWithArrow className='2xl:text-4xl'
                                     buttonText='Request an exclusive transport service now'/>
                </motion.div>
            </Section>
            <Section background={'#d6d6d6'}>
                <Carousel/>
            </Section>
            <Section backgroundSize={'cover'} background={"url(./assets/images/girl_with_macbook.webp)"}>
                <motion.div
                    className='flex w-full h-full justify-center items-start sm:items-center md:items-start flex-wrap flex-col pl-[10vw] pt-[25vh]'>
                    <h1 className='2xl:text-[8rem] xl:text-[6rem] lg:text-7xl md:text-5xl sm:text-4xl text-white font-extrabold
                        leading-tight tracking-tight text-left w-full mb-3'>
                        BOOK EXCLUSIVE <br/>
                        CHAUFFER SERVICES
                    </h1>
                    <ButtonWithArrow className='2xl:text-5xl md:text-2xl sm:text-xl text-xl'
                                     buttonText='Request an exclusive LimoX now'/>
                </motion.div>
            </Section>
            <Section isBright={true} background={"url(./assets/images/door_with_hand.webp)"}>
                <ArrowList/>
            </Section>
            <Section key={`slide-${sliderIndex}`} background={sliderPicture}>
                <div className='relative px-[8vw] py-10 h-full w-full'>
                    <motion.h2
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.4, delay: 0.4, ease: "easeInOut"}}
                        viewport={{once: true}}
                        className='2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl font-bold w-full text-white tracking-tighter leading-tight mb-3'>
                        We move special guests <br/>
                        and famous people for <br/>
                        the big events
                    </motion.h2>
                    <div className='absolute flex w-60 left-[50%] bottom-10 xl:bottom-20 lg:bottom-32'>
                        {pictures.map((picture: string, index: number) => (
                            <div
                                className={` rounded-full w-8 h-8 mx-3
                                ${index === sliderIndex ? 'bg-white' : 'bg-gray-500'}`}
                                key={index}>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
            <Section background={'#ffffff'}>
                <motion.div initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 0.4, delay: 0.7, ease: "easeInOut"}}
                            viewport={{once: true}}
                            className='flex w-full h-full items-center flex-wrap flex-col justify-center '>
                    <h2 className='2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl font-bold w-full text-center tracking-tighter leading-tight mb-3'>
                        AT LimoX WE HAVE
                        <br/>
                        THE BEST FLEET OPTIONS
                    </h2>
                    <p className='2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-medium w-full text-center leading-tight mb-16'>
                        Not only customers from Europe but from <br/>
                        all over the world trust LimoX service
                    </p>
                    <div className=' flex w-full h-1/5 justify-center flex-wrap'>
                        <CarLogo logo='./assets/images/logos/volkswagen_logo.webp'/>
                        <CarLogo logo='./assets/images/logos/bmw_logo.webp'/>
                        <CarLogo logo='./assets/images/logos/audi_logo.webp'/>
                        <CarLogo hasBorderRight={true} logo='./assets/images/logos/mersedes_logo.webp'/>
                    </div>
                </motion.div>
            </Section>
            <Section background={"url(./assets/images/car_interior.webp)"}>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.4, delay: 0.7, ease: "easeInOut"}}
                    viewport={{once: true}}
                    className='flex w-full flex-nowrap h-full pb-52   md:pb-20 tracking-tighter justify-end text-white
                         2xl:text-7xl lx:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl sm:items-center md:items-start items-center
                         2xl:pl-60 xl:pl-52 lg:pl-40 md:pl-32 sm:pl-24 pl-32
                        flex-col font-extrabold leading-normal'>
                    <h3 className='w-full'>
                        We are happy to hear from you.
                        <br/> Limousine service, airport transfer,
                        <br/> shuttle service
                    </h3>
                    <ButtonWithArrow className='2xl:text-5xl xl:text-4xl lg:text-2xl md:text-xl sm:text-lg text-xs mt-3'
                                     buttonText='Request an exclusive LimoX now'/>
                </motion.div>
            </Section>
            <Footer/>
        </div>
    );
}

export default App;
