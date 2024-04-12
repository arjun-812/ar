import React from 'react'

import Me from '../Image/ARJUN4.webp'
import Ring_1 from '../Image/ring1.png';
import Ring_2 from '../Image/ring2.png';

const About = () => {
    return (
        <div className=' p-32 relative' id='about'>
            <img src={Ring_2} className="absolute h-6 top-[90%] left-[20%] animate-ping" />
            <img src={Ring_2} className="absolute h-4 top-[52%] right-[10%] animate-ping" />
            <img src={Ring_1} className="absolute right-[30%] animate-ping" />
            <div className='flex justify-center text-3xl font-semibold mb-20' data-aos='fade-up'>About Me</div>
            <div className='flex justify-center' data-aos='fade-right'>
                <div className='relative p-10'>
                    <div className=' border-4 border-cyan-400 h-96 w-80' />
                    <div className=' absolute bottom-20 left-20'>
                        <img className='h-96 w-80 object-cover' src={Me} alt="" />
                    </div>
                </div>
                <div className='p-16' data-aos='fade-left'>
                    <ul data-aos='fade-left'>
                        <li>I love working on new and exciting technologies emerging nowadays.
                            I have good work experience as a MERN Stack Developer in startup(s)
                            where I was core member of the development team and done quite some
                            contribution to open source as well.
                        </li>&nbsp;
                        <li> To get an opportunity where I can make the best of my
                            potential and contribute to the organization’s growth.
                        </li>
                    </ul>
                    <h1 data-aos='fade-left' className='text-cyan-400 font-medium mt-10 mb-4'>Education</h1>
                    <span className='text-xs'>PSG College of Arts and Science( 2021 — 2023 ) </span>
                    <p data-aos='fade-left '>  MCA (Master of Computer Application) </p>
                    <div className='mt-5'>
                    <span className='text-xs mt-5'> Hindustan college of arts and science (2017 — 2020)</span> 
                    <p data-aos='fade-left'> Bsc-Mathematics (Bachelors's in Mathematics)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
