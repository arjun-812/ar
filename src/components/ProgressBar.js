import React, { useState } from 'react'

const ProgressBar = ({ value, img, name, percentage }) => {

  return (
    <div className='relative hover:scale-110 '>
      <div className='m-5  '>
        <div
          style={{ background: `conic-gradient(#0C93AD ${value}deg, #1F2937 0deg)` }}
          className='h-[110px] w-[110px] rounded-full flex justify-center items-center'
        >
          <div className='bg-gray-800 h-[95px] w-[95px] rounded-full p-7 flex flex-col justify-center items-center'>
            <img src={img} />
            <p>{name}</p>
          </div>
        </div>
        <div className='absolute top-[10%] left-[32%]'>
          <p className=' text-xs'>{`${percentage}%`}</p>
        </div>
      </div>
    </div >
  )
}

export default ProgressBar