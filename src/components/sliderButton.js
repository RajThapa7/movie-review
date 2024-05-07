import React, { useState } from "react";
export default function SliderButton({ title1, title2, options, setValue }) {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className="bg-transparent outline-1 outline outline-[#032541] dark:outline-[#1d3d55] w-fit rounded-full flex flex-row mt-10 ml-10 relative text-md">
        <span
          className={`rounded-full transition-smooth ${
            active
              ? "bg-[#032541] text-green-300 "
              : "text-[#032541] dark:text-[#99C3E6]"
          } px-4 w-fit py-2 text-center font-black cursor-pointer `}
          onClick={() => {
            setActive(true);
            setValue(options[0]);
          }}
        >
          {title1}
        </span>
        <span
          className={`rounded-full transition-smooth ${
            active
              ? "text-[#032541] dark:text-[#99C3E6]"
              : "bg-[#032541]  text-green-300"
          } px-4 w-fit text-center py-2 font-black  cursor-pointer `}
          onClick={() => {
            setActive(false);
            setValue(options[1]);
          }}
        >
          {title2}
        </span>
      </div>
    </>
  );
}
