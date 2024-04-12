import React from 'react'
import ProgressBar from '../../components/ProgressBar';
import Data from '../../skills.json'

const Skill = () => {
    return (
        <div className=' relative' id='skills'>
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




