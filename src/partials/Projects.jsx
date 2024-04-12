import React from 'react'
import whistle from '../Image/whistle.webp'
import Next from '../Image/nextapp.webp'
import Flames from '../Image/flamesapp.webp'

const Projects = () => {


    const projectData = [
        {
            img: Next,
            name: "Pokemon",
            details: "A next js website using pokemon api ",
            link: "https://main--pokemon-nextapp.netlify.app/"
        },
        {
            img: "https://www.itln.in/h-upload/2022/05/27/1600x960_26062-myntra-introduces-under-48-hour-delivery.jpg",
            name: "Myntra-clone",
            details: "A Myntra clone website built on the MERN stack would be a comprehensive e-commerce platform that allows users to browse and purchase clothing and fashion items. The MongoDB database would be used to store product information, such as images, descriptions, and pricing.",
            link: "https://github.com/karthikeyanVG/Myntra-clone"
        },
        {
            img: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?w=740&t=st=1674366718~exp=1674367318~hmac=3335e299a38a9397e37d994370eeb3779f4236275fb676d3e4e4024d68b2233e",
            name: "Native App",
            details: "A mobile app built with React Native and Node.js is a cross-platform app that can run on both iOS and Android. React Native is used for the front-end and Node.js for the back-end. The app can have features such as user authentication, data storage and retrieval from a database and real-time communication through web sockets.",
            link: "https://github.com/karthikeyanVG/ReactNative-App"
        },
        {
            img: "https://img.freepik.com/premium-vector/flat-illustration-concept-men-work-from-home-using-laptop-while-texting-with-smartphone-landing-page-template_11197-244.jpg?w=740",
            name: "Employee Details ",
            details: "A Employee Details web application built on the MERN stack (MongoDB, Express.js, React.js, and Node.js) would be a full-stack web application that allows users to manage and view information about employees.",
            link: "https://github.com/karthikeyanVG/Employe-details-WebSite"
        }, {
            img: whistle,
            name: "Whistle Freights ",
            details: "Instant truck booking, Fast payment, Fare negotiation, Live - Shipment, Truck and Driver management and more..",
            link: "https://whistlefreights.com/"
        },
        {
            img: Flames,
            name: "Flames app ",
            details: "Flames App, built with React JS, offers a fun way to check relationship compatibility. Its dynamic interface and real-time updates make it engaging for users.",
            link: "https://illthakkasaiya.netlify.app/"
        },
    ]

    return (
        <>
            <div className='flex justify-center text-3xl font-semibold mb-20' data-aos='fade-up'>Project</div>
            <div className='flex justify-center flex-wrap gap-10'>
                {projectData.map((value) => (
                    <div className=''>
                        <div className="relative group rounded-lg w-96 h-96 overflow-hidden bg-gray-700 m-auto ">
                            <img className=" object-contain w-full h-full transform duration-700 backdrop-opacity-100 "
                                src={value.img} />
                            <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                            <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                                <div className="absolute w-full flex place-content-center">
                                    <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">{value.name}</p>
                                </div>
                                <div className="absolute w-full flex place-content-center mt-20">
                                    <p className="font-sans text-center w-4/5 text-white mt-5">{value.details}</p>
                                </div>
                                <a className="absolute left-1/4 bottom-4 bg-white text-center text-black font-bold pt-2 rounded-lg h-10 w-48" href={value.link} target="_blank" >Source Code</a>
                            </div>
                        </div>
                    </div >
                ))}
            </div>
        </>
    )
}

export default Projects
