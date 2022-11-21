import React, { useState } from "react";
import { data } from "./demodata";
import SliderButton from "./sliderButton";
import TrailerCard from "./trailerCard";
import background from '../images/background.jpg'

export default function Trailer() {
  const [active, setActive] = useState(true);
  const [background, setBackground] = useState(require("../images/background.jpg"));
  const myStyle = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div className="bg-gray-400 bg-cover bg-no-repeat bg-center transition-all duration-300 ease-in-out  " style={myStyle} >
        <div className="bg-gray-800 bg-opacity-75 backdrop-blur-none  pt-6 ">

      <div className="inline-flex space-x-6 pl-8">
        <p className="text-white text-xl font-black pl-4">Latest Trailers</p>
        <div className="bg-transparent outline-1 outline outline-green-300 w-48 h-8 rounded-full  flex flex-row items-center  relative text-md">
          <span
            className={`left-0 -ml-[1px] rounded-full ${
              active
                ? "bg-gradient-to-r from-green-100 via-green-300 to-green-400 text-[#032541] "
                : "text-white"
            } px-4 py-1 w-2/5 text-center  font-black transition-all duration-500 ease-in-out cursor-pointer absolute`}
            onClick={() => setActive(true)}
          >
            On TV
          </span>
          <span
            className={`right-0 -mr-[1px] rounded-full ${
              active
                ? "text-white"
                : "bg-gradient-to-r from-green-100 via-green-300 to-green-400 text-[#032541]"
            } px-4 py-1 w-3/5 text-center font-black  transition-all duration-500 ease-in-out cursor-pointer absolute`}
            onClick={() => setActive(false)}
          >
            In Theatres
          </span>
        </div>
      </div>
    <div className=" pl-10 py-7 flex flex-row space-x-6 overflow-x-scroll w-screen ">
     
        {data.map((item, index)=>{
            return <TrailerCard img={item.img} key={index} setBackground={setBackground}/>
        })}
    </div>
        </div>
    </div>

  );
}
