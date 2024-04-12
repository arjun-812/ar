import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../../Image/logokarthik.png'

const Header = () => {
    const [top, setTop] = useState(true)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 2 ? setTop(false) : setTop(true)
        }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])
    const clickHandle = () => {
        window.scroll(0, 0)
    }
    return (
        <div className={`fixed bg-gray-900 h-14 w-screen flex flex-row items-center justify-between ${!top} z-50`}>
            <div>
                <img className='h-20 mt-[35%] object-cover' src={logo} alt="" onClick={() => clickHandle()} />
            </div>
            <div >
                <div onClick={() => setOpen(!open)} className='text-3xl mr-4 cursor-pointer'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`items-center pb-12 absolute bg-gray-900 z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in ${open ? 'top-14 ' : 'top-[-490px]'}`} onClick={() => setOpen(!open)}>
                    <li className='px-5 py-3 hover:text-cyan-400 cursor-pointer ease-in-out' >
                        <Link to="home" spy={true} smooth={true} onClick={() => setOpen(!open)}>
                            Home
                        </Link>
                    </li>
                    <li className='px-5 py-3 hover:text-cyan-400 cursor-pointer ease-in-out'>
                        <Link to="about" smooth={true} onClick={() => setOpen(!open)}>
                            About
                        </Link>
                    </li>
                    <li className='px-5 py-3 hover:text-cyan-400 cursor-pointer ease-in-out'>
                        <Link to="skills" smooth={true} onClick={() => setOpen(!open)}>
                            Skills
                        </Link>
                    </li>
                    <li className='px-5 py-3 hover:text-cyan-400 cursor-pointer ease-in-out'>
                        <Link to="service" smooth={true} onClick={() => setOpen(!open)}>
                            Service
                        </Link>
                    </li>
                    <li className='px-5 py-3 hover:text-cyan-400 cursor-pointer ease-in-out'>
                        <Link to="Projects" smooth={true} onClick={() => setOpen(!open)}>
                            Projects
                        </Link>
                    </li>
                    <li className='px-5 py-3 hover:text-cyan-400 cursor-pointer ease-in-out'>
                        <Link to="contact" smooth={true} onClick={() => setOpen(!open)}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
