import React from 'react';
import Hero from '../Components/Hero';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';


const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Education/>
            <Projects/>
        </div>
    );
};

export default Home;