import React from 'react'
import Me from '../../Image/ARJUN4.webp'

const About = () => {
    return (
        <div className='p-4' id='about'>
            <div className='flex justify-center text-3xl font-semibold mb-20' data-aos='fade-up'>About Me</div>
            <div className='flex flex-col justify-center'>
                <div className='relative p-4'>
                    <div className=' border-4 border-cyan-400 h-96 w-80' />
                    <div className=' absolute bottom-10 left-10'>
                        <img className='h-96 w-80 object-cover' src={Me} alt="" />
                    </div>
                </div>
                <div className='p-4'>
                    <ul>
                        <li>I love working on new and exciting technologies emerging nowadays.
                            I have good work experience as a MERN Stack Developer in startup(s)
                            where I was core member of the development team and done quite some
                            contribution to open source as well.
                        </li>&nbsp;
                        <li> To get an opportunity where I can make the best of my
                            potential and contribute to the organization’s growth.
                        </li>
                    </ul>
                    <h1 className='text-cyan-400 font-medium mt-10 mb-4'>Education</h1>
                    <span className='text-xs'>RVS College of Arts and Science( 2020 — 2022 ) </span>
                    <p data-aos='fade-left '>  MCA (Master of Computer Application) </p>
                    <div className='mt-5'>
                    <span className='text-xs mt-5'> Rvs college of arts and science (2017 — 2020)</span> 
                    <p data-aos='fade-left'> BCA (Bachelors's in Computer Application)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
