import React from 'react';
import Hero from '../Components/Hero';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';


const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Education/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;