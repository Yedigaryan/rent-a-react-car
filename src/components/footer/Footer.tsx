import {motion} from "framer-motion";
import {SocialButton} from "../SocialButton";

export const Footer = () => {
    return (
        <>
            <div className="bg-white w-full min-h-[30vh] px-20 pt-10 pb-5 flex justify-center flex-wrap text-gray-500">
                <div className="border-b w-full h-fit p-7 flex items-center flex-wrap justify-center">
                    <div className='lg:w-1/5 h-full flex items-center sm:items-start mr-4'>
                        <img className="mx-auto" src="./assets/images/logos/logo_footer.svg" alt="LimoX logo"/>
                    </div>
                    <div
                        className='2xl:w-2/4 lg:w-fit md:w-fit sm:w-full sm:flex-wrap  h-full flex flex-nowrap md:flex-wrap md:justify-center justify-between items-center'>
                        <p className="border-gray-500 h-full border-l-2 p-4 text-lg min-w-[220px]">P.O. Box 4621
                            Arlington, <br/> VA 2220</p>
                        <p className="border-gray-500 h-full border-l-2 p-4 text-lg min-w-[240px]">
                            <a href="tel:+12022324440">D.C. (202) 232-4440 </a> <br/>
                            <a href="tel:+12027796054">Dispatch: (202) 779-6054 </a> <br/>
                            <a href="tel:+17039796664">Virginia: (703) 979-6664</a>
                        </p>
                        <div className="border-gray-500 h-full border-l-2 p-4 min-w-[280px]">
                            <p className="text-xs mb-3">Join our list to receive free offerings, discounts, coupons &
                                our
                                useful newsletter.</p>
                            <div className='w-full relative border-black border rounded-full px-12 py-2 '>
                                <input id='emailId' placeholder='Your email ID' type="text"/>
                                <motion.img whileHover={{zoom: 1.1}}
                                            whileTap={{zoom: 0.9}}
                                            className='cursor-custom-pointer absolute w-8 -translate-y-1/2 -translate-x-1/2 top-[50%] left-[90%]'
                                            src="./assets/images/arrow.webp" alt="arrow"/>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-gray-500 border-l-2 p-4 h-full min-h-[118px] flex flex-nowrap items-center w-1/4 min-w-[424px]">
                        <SocialButton link='https://www.facebook.com/' image='./assets/images/logos/facebook_logo.svg'/>
                        <SocialButton link='https://www.twitter.com//'
                                      image={'./assets/images/logos/twitter_logo.svg'}/>
                        <SocialButton link='https://www.linkedin.com/'
                                      image={'./assets/images/logos/linkedin_logo.svg'}/>
                        <SocialButton link='https://web.whatsapp.com/'
                                      image={'./assets/images/logos/whatsapp_logo.svg'}/>
                        <SocialButton link='https://www.youtube.com' image={'./assets/images/logos/youtube_logo.svg'}/>
                    </div>
                </div>
                <div className="w-full h-1/2 flex flex-wrap justify-center">
                    <div className="w-full p-10">
                        <p className="text-center text-lg">We would be happy to send you a detailed offer for our
                            extensive driving
                            service immediately. Let
                            yourself be inspired – <br/>
                            whether by the airport transfer, shuttle service, valet parking or our
                            LimoX service. We look forward to your call.
                        </p>
                    </div>
                    <div className="w-full mb-2">
                        <p className="text-center text-lg">Imprint Data protection declaration</p>
                    </div>
                    <div className="w-full">
                        <p className="text-center text-xs">Copyright © 2023 LimoX. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};