import React from 'react'

import front from '../Image/frontend.webp'
import back from '../Image/backend.webp'
import ui from '../Image/ui.webp'
import Ring_1 from '../Image/ring1.png';
import Ring_2 from '../Image/ring2.png';


const data = [
    {
        image: front,
        title: "Front-End",
        discretion: "I am a front-end Web Developer (React js) and have quite some experience in it as well.",
    }, {
        image: back,
        title: "Back-End",
        discretion: "And also a Back-end Developer (Node js) also have quite some experience in it as well.",

    }, 

]
const Service = () => {

    return (
        <div className='p-20 relative' id='service' >
            <img src={Ring_2} className="absolute bottom-[52%] left-[10%] animate-ping" />
            <img src={Ring_1} className="absolute bottom-[10%] right-[30%] animate-ping" />
            <img src={Ring_1} className="absolute top-[18%] right-[15%] animate-ping" />
            <div className='flex justify-center text-3xl font-semibold mb-20' data-aos='fade-up'>Services</div>
            <div className='flex justify-center'>
                {data.map((data) => (
                    <div className="shadow-2xl rounded-md bg-gray-600 max-w-sm text-center m-8 p-8 hover:scale-125"  >
                        < >
                            <img className=" m-auto object-fill h-60 w-60" src={data.image} alt={data.title} data-aos='fade-down' />
                        </>
                        <div className="p-6" data-aos='fade-up'>
                            <h5 className=" text-xl font-medium mb-2">{data.title}</h5>
                            <p className=" text-base mb-4 ">
                                {data.discretion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service
