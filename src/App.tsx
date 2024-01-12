import React from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
import {Section} from "./components/section/Section";
import {Carousel} from "./components/carousel/Carousel";
import {ArrowList} from "./components/arrow-list/ArrowList";
import {Slider} from "./components/slider/Slider";

function App() {
    return (
        <>
            <Header/>
            <Section>
                <h1>WE MOVE PROFESSIONALLY</h1>
            </Section>
            <Section>
                <h2>Driving service
                    Limousine service
                    Airport transfer</h2>
            </Section>
            <Section>
                <h1>BOOK YOUR PROFESSIONAL RIDE</h1>
            </Section>
            <Section>
                <Carousel/>
            </Section>
            <Section>
                <h1>BOOK EXCLUSIVE CHAUFFER SERVICES</h1>
            </Section>
            <Section>
                <ArrowList/>
            </Section>
            <Section>
                <Slider/>
            </Section>
            <Section>
                <h2>AT LimoX WE HAVE THE BEST FLEET OPTIONS</h2>
            </Section>
            <Section>
                <h2>We are happy to hear from you. Limousine service, airport transfer, shuttle service</h2>
            </Section>
        </>
    );
}

export default App;
