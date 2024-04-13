import React from 'react'
import Link from 'react-scroll/modules/components/Link';
import Me from '../Image/ARJUN3.webp'
import logo from "../Image/arjulogoo.svg";
import Ring_1 from '../Image/ring1.png';
import Ring_2 from '../Image/ring2.png';

const Home = () => {

    return (
        <div className='flex justify-around gap-24'>

        <div className='flex gap-28 pt-32' id='home'>
            <div className='m-auto' data-aos='fade-right'>
                <img src={Ring_1} className="absolute h-4 left-[70%] animate-ping" />
                <img src={Ring_2} className="absolute h-8 top-[90%] left-[20%] animate-ping" />
                <div className='flex'>
                    <img className='h-10 object-cover' src={logo} alt="" />
                    <h1 className='text-2xl pt-2'> - Developer </h1>
                </div>
                <p className='py-6'>Hi, I'm Gowsikarjun. Nice to meet you!
    <br /> With over two years of experience in React.js development,
    <br /> I've contributed to various projects for clients and companies, honing my skills along the way.
    <br /> I've collaborated with teams remotely and have gained valuable insights during my journey.
    <br /> I'm passionate about creating elegant solutions to complex problems and constantly strive to enhance my expertise.
</p>

                <div className=' space-x-20' >
                    <Link smooth={true} to='skills' className="bg-transparent hover:bg-cyan-400 text-cyan-400 font-semibold hover:text-white py-2 px-4 border border-cyan-400 hover:border-transparent rounded">
                        Skills
                    </Link>
                    <a href="https://drive.google.com/file/d/1kyknI7NCRifjofgLGUYPnTDOR_-92VzT/view?usp=drive_link" target="_blank" rel="noreferrer">
                        <button className="bg-transparent hover:bg-cyan-400 text-cyan-400 font-semibold hover:text-white py-0.5 px-4 border border-cyan-400 hover:border-transparent rounded">
                            Resume
                        </button>
                    </a>
                </div>
            </div>
            <div className='rounded-full h-96 w-96 mr-20' data-aos='fade-left'>
                <img src={Ring_2} className="absolute left-[10%] animate-ping" />
                <img src={Ring_1} className="absolute h-5 bottom-[10%] right-[10%] animate-ping" />
                <img className='rounded-full h-96 w-96 object-cover' src={Me} alt="" />
            </div>
        </div>
        </div>

    )
}

export default Home
