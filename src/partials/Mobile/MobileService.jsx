import React from 'react'

import front from '../../Image/frontend.webp'
import back from '../../Image/backend.webp'
import ui from '../../Image/ui.webp'

const data = [
    {
        image: front,
        title: "Front-End",
        discretion: "I am a front-end Web Developer (React js) and have quite some experience in it as well.",
    }, {
        image: back,
        title: "Back-End",
        discretion: "And also a Back-end Developer (Node js) also have quite some experience in it as well.",

    }, {
        image: ui,
        title: "Ui & ux Designer",
        discretion: "I love designs and it's the first step before creating any website as I can give layout to my imagination.",
    },

]
const Service = () => {

    return (
        <div className=' p-4' id='service' >
            <div className='flex justify-center text-3xl font-semibold my-10' data-aos='fade-up'>Services</div>
            <div className='flex flex-col justify-center'>
                {data.map((data) => (
                    <div className="shadow-2xl rounded-md bg-gray-600 max-w-sm text-center m-8 p-8 "  >
                        < >
                            <img className=" object-fill h-60 w-60" src={data.image} alt={data.title} />
                        </>
                        <div className="p-6">
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
