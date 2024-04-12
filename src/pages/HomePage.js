import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../partials/Header';
import Home from '../partials/Home';
import About from '../partials/About'
import Skills from '../partials/Skills';
import Service from '../partials/Service';
import Projects from '../partials/Projects';
import ContactMe from '../partials/ContactMe';
import Footer from '../partials/Footer';
import Skill from '../partials/Skill';



const HomePage = () => {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 2000,
            easing: 'ease-out-cubic',
        });
    });
    return (
        <div className='bg-gray-800 text-white tracking-wide'>
            <Header />
            <Home />
            <About />
            {/* <Skills /> */}
            <Skill />
            <Service />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default HomePage
