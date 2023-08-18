import React from 'react'

const Card = ({title, imgSrc, category, timeToRead}) => {
  return (
    <div className='flex flex-col justify-center rounded-md   bg-slate-700 text-white'>
        <div className=' w-full'>
            <img src={imgSrc} alt="" className='h-[250px] w-full object-cover rounded-md'/>
        </div>
        <div className='flex flex-col h-28 p-2'>
            <h1 className=' text-lg'>{title}</h1>
            <p className='font-light text-slate-200'>{category} <span>&middot; {timeToRead} min</span></p>
        </div>
    </div>
  )
}

export default Card