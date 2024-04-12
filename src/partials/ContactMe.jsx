import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    return (
        <div className='p-20' id='contactUs' >
            <div className='flex justify-center text-3xl font-semibold mb-20' data-aos='fade-up'>Contact Us</div>
            <InputBox />

        </div>
    )
}

function InputBox() {

    var className = 'px-3 h-[20.6rem] placeholder:pl-[140px] w-96 placeholder-gray-400 text-gray-600 relative bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring'

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [description, setDescription] = useState();
    const [Alert, setAlert] = useState(false);

    const onChangeName = (e) => {
        var value = e.target.value
        setName(value)
    }
    const onChangeEmail = (e) => {
        var value = e.target.value
        setEmail(value)
    }
    const onChangeSubject = (e) => {
        var value = e.target.value
        setSubject(value)
    }
    const onChangeDescription = (e) => {
        var value = e.target.value
        setDescription(value)
    }

    const onSubmit = () => {

        let emailData
        emailData = { name, email, subject, description }

        if (!name || !email || !subject || !description) {
            alert("Please enter details")
        }
        else {
            setAlert(true)
            emailjs.send('service_5ozer8j',
                'template_m5uct43',
                emailData,
                '0wYOf-JgONHWxYif0')
                .then(res => {
                    console.log(res)
                    setAlert(false)
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='flex justify-center' id='contact'>
            <div className=' space-y-10 mr-10' data-aos='fade-right'>

                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e) => onChangeName(e)}
                        className="px-3 py-4 w-96 placeholder-gray-400 text-gray-600 relative bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"

                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => onChangeEmail(e)}
                        className="px-3 py-4 w-96 placeholder-gray-400 text-gray-600 relative bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"

                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={subject}
                        onChange={(e) => onChangeSubject(e)}
                        className="px-3 py-4 w-96 placeholder-gray-400 text-gray-600 relative bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"

                    />
                </div>
                <div className="mb-3 pt-0">
                    <button className='px-3 py-4 w-96 bg-cyan-500 rounded-md text-white' onClick={() => onSubmit()}>
                        {Alert ?
                            'Loading...'
                            : ' Send Email'}
                    </button>
                </div>
            </div>
            <div data-aos='fade-left'>
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Leave A Message"
                        name="message"
                        value={description}
                        onChange={(e) => onChangeDescription(e)}
                        className={className}

                    />
                </div>
            </div>
        </div>
    )
}


export default ContactMe

