import React from 'react'
import { Link } from 'react-scroll'

import FB from '../Image/fb.png'
import Email from '../Image/Email.png'
import Insta from '../Image/instaG.png'
import LinkedIN from '../Image/linkedIn.png'
import GitHub from '../Image/github.png'
import logo from "../Image/image.png";

const Footer = () => {
    const clickHandle = () => {
        window.scroll(0, 0)
    }
    const Data = [
        {
            icon: Email,
            link: "vkarthikeyan@gmail.com",
            name: "email"
        }, {
            icon: LinkedIN,
            link: "https://www.linkedin.com/in/karthi-keyan-43710a215",
            name: "linked In"
        }, {
            icon: Insta,
            link: "https://instagram.com/the_mad__shifter?igshid=YmMyMTA2M2Y=",
            name: "insatgram"
        }, {
            icon: FB,
            link: "https://www.facebook.com/profile.php?id=100006206074892",
            name: "facebook"
        },
        {
            icon: GitHub,
            link: "https://github.com/karthikeyanVG",
            name: "github"
        }
    ]
    return (
        <>
            <footer className='bg-gray-900 h-80 w-full mt-2'>
                <div className='p-10'>
                    <div className='py-6 mx-20'>
                        <div className='flex'>
                            <img className='h-10 object-cover' src={logo} alt="" onClick={() => clickHandle()} />
                            <h1 className='text-2xl pt-2 pl-2'> - Developer & Designer</h1>
                        </div>
                    </div>
                    <div className='bg-gray-500 h-0.5 mx-20'></div>
                    <div className='mx-20'>
                        <ul className='grid grid-rows-3 grid-flow-col gap-2 text-xl font-medium' >
                            <li className='py-3 hover:text-cyan-400 cursor-pointer ease-in-out' key={1}>
                                <Link to="home" spy={true} smooth={true}>
                                    Home
                                </Link></li>
                            <li className='py-3 hover:text-cyan-400 cursor-pointer ease-in-out' key={2}>
                                <Link to="about" smooth={true}>
                                    About
                                </Link>
                            </li>
                            <li className='py-3 hover:text-cyan-400 cursor-pointer ease-in-out' key={3}>
                                <Link to="skills" smooth={true}>
                                    Skills
                                </Link>
                            </li>
                            <li className='py-3 hover:text-cyan-400 cursor-pointer ease-in-out' key={4}>
                                <Link to="service" smooth={true}>
                                    Service
                                </Link>
                            </li>
                            <li className='py-3 hover:text-cyan-400 cursor-pointer ease-in-out' key={5}>
                                <Link to="Projects" smooth={true}>
                                    Projects
                                </Link>
                            </li>
                            <li className='py-3 hover:text-cyan-400 cursor-pointer ease-in-out' key={6}>
                                <Link to="contact" smooth={true}>
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </footer>
            <div className='bg-cyan-500 h-14 opacity-75' >
                <div className="relative flex items-center justify-center space-x-8 w-full pt-4">
                    {Data.map(data => {
                        return (
                            <a href={data.link} target="_blank" rel="noreferrer">
                                <div className="bg-white rounded-full h-10 w-10 animate-bounce flex items-center justify-center cursor-pointer hover:bg-gray-800">
                                    <img className="w-8 rounded-full h-auto " viewBox="0 0 32 32"
                                        src={data.icon} alt={data.name} />
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Footer
