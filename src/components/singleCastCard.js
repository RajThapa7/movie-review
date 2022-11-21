import React from 'react'
// import img from '../images/perry.jpg'
export default function SingleCastCard({name, character, img}) {
  return (
    <div className='flex flex-col rounded-lg shadow-md shadow-gray-400  min-w-[10rem] w-40 h-[17.5rem] dark:shadow-gray-900 dark:border-gray-800'>
        <img src={img} alt="Profile Image" className='rounded-t-lg object-cover w-40 h-44' />
        <div className='flex flex-col px-3 py-2'>

        <p className='font-black dark:text-gray-300'>{name}</p>
        <p className='text-gray-900 text-sm dark:text-gray-400'>{character}</p>
        </div>
    </div>
  )
}
