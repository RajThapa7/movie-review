import React, { useEffect, useState } from "react";

export default function RatingCircle({ inlineStyle, rating }) {
  const [color, setColor] = useState();
  const dashOffset = (10 - rating) * 13.5;

  useEffect(() => {
    if (dashOffset >= 0 && dashOffset <= 40.5) {
      setColor("stroke-[#46b987]");
    } else if (dashOffset >= 40.51 && dashOffset <= 94.5) {
      setColor("stroke-[#daeb49]");
    } else {
      setColor("stroke-red-400");
    }
  }, [dashOffset]);

  return (
    <>
      <div className={`w-14 h-14 relative  left-3  ${inlineStyle}`}>
        <div className="w-14 h-14   rounded-full px-[6px] py-[6px] bg-[#081C22]">
          <div className="w-10 h-10 rounded-full flex flex-col items-center justify-center  font-black bg-[#081C22] text-white ">
            <p className="text-center mt-1 ml-2">
              {Math.floor(rating * 10)}
              <sup>%</sup>
            </p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="64px"
          height="64px"
          className="absolute top-0 left-0 "
        >
          <circle
            cx="28"
            cy="28"
            r="22"
            strokeLinecap="round"
            className={`fill-transparent ${color} stroke-[5px] bg-red-100 `}
            style={{
              strokeDasharray: "135",
              strokeDashoffset: `${dashOffset} `,
            }}
          />
        </svg>
      </div>
    </>
  );
}
