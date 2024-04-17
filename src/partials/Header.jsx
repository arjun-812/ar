import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../Image/arjulogoo.png'
const Header = () => {
    const [top, setTop] = useState(true)

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
        <div className={`fixed bg-gray-900 h-14 w-full flex flex-row items-center my-1 justify-between px-8 ${!top} z-50`}>
            <div>
                <img className=' h-36 object-cover' src={logo} alt="" onClick={() => clickHandle()}style={{height:"50px",width:"150px"}} />
            </div>
            <div className='flex flex-grow'>
                <ul className='flex flex-grow justify-end flex-wrap items-center'>
                    <li className='px-5 py-3 hover:text-cyan-400 cursor-pointer ease-in-out'>
                        <Link to="home" spy={true} smooth={true}>
                            Home
                        </Link>
                    </li>
                    <li className='px-5 py-3 hover:text-cyan-400 cursor-pointer ease-in-out'>
                        <Link to="about" smooth={true}>
                            About
                        </Link>
                    </li>
                    <li className='px-5 py-3 hover:text-cyan-400 cursor-pointer ease-in-out'>
                        <Link to="skills" smooth={true}>
                            Skills
                        </Link>
                    </li>
                    <li className='px-5 py-3 hover:text-cyan-400 cursor-pointer ease-in-out'>
                        <Link to="service" smooth={true}>
                            Service
                        </Link>
                    </li>
                    <li className='px-5 py-3 hover:text-cyan-400 cursor-pointer ease-in-out'>
                        <Link to="Projects" smooth={true}>
                            Projects
                        </Link>
                    </li>
                    <li className='px-5 py-3 hover:text-cyan-400 cursor-pointer ease-in-out'>
                        <Link to="contact" smooth={true}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
