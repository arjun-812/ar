import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    return (
        <div className='p-4' id='contactUs' >
            <div className='flex justify-center text-3xl font-semibold my-10'>Contact Us</div>
            <InputBox />

        </div>
    )
}

function InputBox() {

    var className = 'px-3 h-20 w-full placeholder-gray-400 text-gray-600 relative bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring'

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
        <div className='flex flex-col justify-center' id='contact'>
            <div className=''>
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={() => onChangeName()}
                        className="px-3 py-4 w-full placeholder-gray-400 text-gray-600 relative bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={() => onChangeEmail()}
                        className="px-3 py-4 w-full placeholder-gray-400 text-gray-600 relative bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"

                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={subject}
                        onChange={() => onChangeSubject()}
                        className="px-3 py-4 w-full placeholder-gray-400 text-gray-600 relative bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"

                    />
                </div>

            </div>
            <div>
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Leave A Message"
                        name="description"
                        value={description}
                        onChange={(e) => onChangeDescription()}
                        className={className}
                    />
                </div>
            </div>
            <div className="mb-3 pt-0">
                <button className='px-3 py-4 w-full bg-cyan-500 rounded-md text-white' onClick={() => onSubmit()}>
                    {Alert ?
                        'Loading...'
                        : ' Send Email'}
                </button>
            </div>
        </div>
    )
}


export default ContactMe

