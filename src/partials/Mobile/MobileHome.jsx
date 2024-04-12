import React from 'react'
import Link from 'react-scroll/modules/components/Link';
// import Me from '../../Image/Karthikeyan.jpg'
import logo from "../../Image/image.png";
import Ring_1 from '../../Image/ring1.png';
import Ring_2 from '../../Image/ring2.png';
const Home = () => {

    return (
        <div className='flex flex-row justify-center items-center py-20  leading-loose' id='home'>
            <div className='m-auto p-8' data-aos='fade-right'>
                <img src={Ring_1} className="absolute h-4 left-[70%] animate-ping" />
                <img src={Ring_2} className="absolute h-8 top-[90%] left-[20%] animate-ping" />
                <div className='flex'>
                    <img className='h-8 object-cover' src={logo} alt="" />
                    <h1 className='text-xl pt-[6px]'> - Developer & Designer</h1>
                </div>
                <p className='pt-8'>Hi, I'm Karthikeyan Nice to meet you..
                    <br /> Since beginning my journey as a developer nearly one year
                    <br /> I've done remote work for agencies and finished my internship
                    <br />Iam quietly confident,naturally curious, and perpetually working on
                    <br /> improving my chops one design problem at a time.. </p>
                <div className=' space-x-20 pt-4'>
                    <Link smooth={true} to='skills' className="bg-transparent hover:bg-cyan-400 text-cyan-400 font-semibold hover:text-white py-2 px-4 border border-cyan-400 hover:border-transparent rounded">
                        Skills
                    </Link>
                    <a href="https://drive.google.com/file/d/15Fkrq8XoS5cQuxJ6MIXYzW1b2xxUVdQy/view?usp=share_link" target="_blank" rel="noreferrer">
                        <button className="bg-transparent hover:bg-cyan-400 text-cyan-400 font-semibold hover:text-white py-0.5 px-4 border border-cyan-400 hover:border-transparent rounded">
                            Resume
                        </button>
                    </a>
                </div>
            </div>
            {/* <div className='rounded-full h-20 w-20 mr-4'>
                <img className='rounded-full h-20 w-20 object-cover' src={Me} alt="" />
            </div> */}
            <img src={Ring_2} className="absolute left-[10%] animate-ping" />
            <img src={Ring_1} className="absolute h-5 bottom-[10%] right-[10%] animate-ping" />
        </div>
    )
}

export default Home
