import React from 'react'

import Ring_1 from '../Image/ring1.png';
import Ring_2 from '../Image/ring2.png';

const Skills = () => {

    return (
        <div className=' relative' id='skills'>
            <img src={Ring_2} className="absolute top-[52%] right-[10%] animate-ping" />
            <img src={Ring_1} className="absolute h-7 bottom-[10%] right-[30%] animate-ping" />
            <img src={Ring_1} className="absolute h-5 top-[20%] left-[30%] animate-ping" />
            <div className='flex justify-center text-3xl font-semibold mb-20' data-aos='fade-up'>Skills</div>
            <div className=' relative flex justify-center '>
                <div>
                    <div className='flex justify-center mb-6' data-aos='fade-right'>
                        <div className='h-10 w-36' />
                        <span className='bg-gray-500 z-10 border-4 border-gray-700 h-6 w-6 rounded-full'></span>
                        <div className='h-10 w-36'>
                            <h1 className='ml-3 text-cyan-400 font-bold'>HTML5</h1>
                            <p className='ml-4'></p>
                        </div>
                    </div>
                    <div className='flex justify-center mb-6' data-aos='fade-left'>
                        <div className='h-10 w-36'>
                            <h1 className='text-right mr-3 text-cyan-400 font-bold'>CSS3</h1>
                            <p className='mr-4'></p>
                        </div>
                        <span className='bg-gray-500 z-10 border-4 border-gray-700 h-6 w-6 rounded-full'></span>
                        <div className='h-10 w-36' />
                    </div>
                    <div className='flex justify-center mb-6' data-aos='fade-right'>
                        <div className='h-10 w-36' />
                        <span className='bg-gray-500 z-10 border-4 border-gray-700 h-6 w-6 rounded-full'></span>
                        <div className='h-10 w-36'>
                            <h1 className='ml-3 text-cyan-400 font-bold'>Java Script</h1>
                            <p className='ml-4'></p>
                        </div>
                    </div>
                    <div className='flex justify-center mb-6' data-aos='fade-left'>
                        <div className='h-10 w-36'>
                            <h1 className='text-right mr-3 text-cyan-400 font-bold'>React Js</h1>
                            <p className='mr-4'></p>
                        </div>
                        <span className='bg-gray-500 z-10 border-4 border-gray-700 h-6 w-6 rounded-full'></span>
                        <div className='h-10 w-36' />
                    </div>
                    <div className='flex justify-center mb-6' data-aos='fade-right'>
                        <div className='h-10 w-36' />
                        <span className='bg-gray-500 z-10 border-4 border-gray-700 h-6 w-6 rounded-full'></span>
                        <div className='h-10 w-36'>
                            <h1 className='ml-3 text-cyan-400 font-bold'>Node Js</h1>
                            <p className='ml-4'></p>
                        </div>
                    </div>
                    <div className='flex justify-center mb-6' data-aos='fade-left'>
                        <div className='h-10 w-36'>
                            <h1 className='text-right mr-3 text-cyan-400 font-bold'>Express Js</h1>
                            <p className='mr-4'></p>
                        </div>
                        <span className='bg-gray-500 z-10 border-4 border-gray-700 h-6 w-6 rounded-full'></span>
                        <div className='h-10 w-36' />
                    </div>
                    <div className='flex justify-center mb-6' data-aos='fade-right'>
                        <div className='h-10 w-36' />
                        <span className='bg-gray-500 z-10 border-4 border-gray-700 h-6 w-6 rounded-full'></span>
                        <div className='h-10 w-36'>
                            <h1 className='ml-3 text-cyan-400 font-bold'>Mongo DB</h1>
                            <p className='ml-4'></p>
                        </div>
                    </div>
                    <div className='flex justify-center mb-6' data-aos='fade-left'>
                        <div className='h-10 w-36'>
                            <h1 className='text-right mr-3 text-cyan-400 font-bold'>React Native</h1>
                            <p className='mr-4'></p>
                        </div>
                        <span className='bg-gray-500 z-10 border-4 border-gray-700 h-6 w-6 rounded-full'></span>
                        <div className='h-10 w-36' />
                    </div>
                    <div className='flex justify-center mb-6' data-aos='fade-right'>
                        <div className='h-10 w-36' />
                        <span className='bg-gray-500 z-10 border-4 border-gray-700 h-6 w-6 rounded-full'></span>
                        <div className='h-10 w-36'>
                            <h1 className='ml-3 text-cyan-400 font-bold'>Mysql</h1>
                            <p className='ml-4'></p>
                        </div>
                    </div>
                    <div className='flex justify-center mb-6' data-aos='fade-left'>
                        <div className='h-10 w-36'>
                            <h1 className='text-right mr-3 text-cyan-400 font-bold'>Tailwind Css</h1>
                            <p className='mr-4'></p>
                        </div>
                        <span className='bg-gray-500 z-10 border-4 border-gray-700 h-6 w-6 rounded-full'></span>
                        <div className='h-10 w-36' />
                    </div>
                </div>
                <div className='border-gray-500 border-l-4 z-0 absolute w-0.5 h-[37rem] top-0'></div>
            </div>
        </div>
    )
}

export default Skills
