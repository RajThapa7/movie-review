import React, { useState } from 'react'
export default function SliderButton({title1, title2, setTime, setMedia}) {
    const [active, setActive] = useState(true);
  return (
    <>
    <div className='bg-transparent outline-1 outline outline-[#032541] dark:outline-[#1d3d55] w-48 h-8 rounded-full  flex flex-row items-center mt-10 ml-10 relative text-md'>
        <span className={`left-0 -ml-[1px] rounded-full ${active?'bg-[#032541] text-green-300 ':'text-[#032541] dark:text-[#99C3E6]'} px-4 py-1 w-2/5 text-center  font-black transition-all duration-500 ease-in-out cursor-pointer absolute`} onClick={()=>{
          setActive(true)
          setTime('day')
          setMedia('tv')
          }}>{title1}</span>
        <span className={`right-0 -mr-[1px] rounded-full ${active?'text-[#032541] dark:text-[#99C3E6]':'bg-[#032541]  text-green-300'} px-4 py-1 w-3/5 text-center font-black  transition-all duration-500 ease-in-out cursor-pointer absolute`} onClick={()=>{
            setActive(false)
           setTime('week')
           setMedia('movie')
         }}>{title2}</span>
    </div>
    </>
  )
}
