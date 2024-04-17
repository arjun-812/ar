import React from 'react'

import FB from '../../Image/fb.png'
import Email from '../../Image/Email.png'
import Insta from '../../Image/instaG.png'
import LinkedIN from '../../Image/linkedIn.png'
import GitHub from '../../Image/github.png'
import logo from "../../Image/arjulogoo.png";

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
            <footer className='bg-gray-900 h-60 w-full mt-2'>
                <div className='p-4'>
                    <div className='py-6 mx-2'>
                        <div className='flex'>
                            <img className='h-8 object-cover' src={logo} alt="" onClick={() => clickHandle()} />
                            <h1 className='text-xl pl-2 pt-2'>- Connect You Soooon! </h1>
                        </div>
                    </div>
                    <div className='bg-gray-500 h-0.5 mx-4'></div>
                </div>
                <div className='pt-8 opacity-75'>
                    <div className="relative flex items-center justify-center space-x-8 w-full py-2">
                        {Data.map(data => {
                            return (
                                <a href={data.link} target="_blank" rel="noreferrer">
                                    <div className=" bg-white rounded-full h-10 w-10 animate-bounce flex items-center justify-center cursor-pointer hover:bg-gray-800">
                                        <img className="w-8 rounded-full h-auto " viewBox="0 0 32 32"
                                            src={data.icon} alt={data.name} />
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
