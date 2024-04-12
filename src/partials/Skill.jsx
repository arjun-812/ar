import React from 'react'
import Ring_1 from '../Image/ring1.png';
import Ring_2 from '../Image/ring2.png';
import ProgressBar from '../components/ProgressBar';
import Data from '../skills.json'

const Skill = () => {
    return (
        <div className=' relative' id='skills'>
            <img src={Ring_2} className="absolute top-[62%] right-[20%] animate-ping" />
            <img src={Ring_1} className="absolute h-7 bottom-[10%] right-[40%] animate-ping" />
            <img src={Ring_1} className="absolute h-5 top-[20%] left-[30%] animate-ping" />
            <div className='flex justify-center text-3xl font-semibold mb-20' data-aos='fade-up'>Skills</div>
            <div className=' relative flex justify-center flex-wrap '>
                {
                    Data.map((e, index) => (
                        <ProgressBar key={index} value={e.value} img={e.image} name={e.name} percentage={(e.value / 360 * 100)} />
                    ))
                }
            </div>
        </div>
    )
}

export default Skill




