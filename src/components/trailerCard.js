import React, { useEffect, useRef, useState } from "react";
import { BsPlayFill, BsThreeDots } from "react-icons/bs";
import { FaHeart, FaListUl } from "react-icons/fa";

export default function TrailerCard({ img, setBackground }) {
  // const [background, setBackground] = useState('');
  const menuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current != null) {
        if (!menuRef.current.contains(e.target)) {
          setVisible(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  const [visible, setVisible] = useState(false);
  const myStyle = {
    backgroundImage: `url(${img})`,
  };
  return (
    <>
      <div className="w-80  min-w-[20rem] relative">
        <div
          className="w-80 h-44 min-w-[20rem] rounded-xl bg-black flex flex-col items-center justify-center  bg-cover bg-no-repeat relative hover:scale-105 transition-all duration-300 group"
          style={myStyle}
          onMouseEnter={() => setBackground(img)}
        >
          <BsPlayFill className="text-white text-7xl font-bold group-hover:scale-125 transition-all duration-300 "></BsPlayFill>
          <BsThreeDots
            onClick={() => setVisible(true)}
            className="text-white text-2xl  absolute top-1 right-3 font-black hover:text-cyan-400 transition-all duration-300"
          ></BsThreeDots>
        </div>
        {visible && (
          <div
            ref={menuRef}
            className="flex flex-col  bg-white rounded-lg w-36 items-center  ml-20 py-1 absolute top-7 -right-6 shadow-sm shadow-gray-300"
          >
            <div className="inline-flex items-center space-x-3 border-b-[1px] border-gray-300  w-full py-2 pl-4 hover:bg-cyan-500  transition-all duration-100 ease-in-out group">
              <FaListUl></FaListUl>
              <p className="text-gray-600 group-hover:text-white transition-all duration-100 ease-in-out">
                Add to list
              </p>
            </div>
            <div className="inline-flex items-center space-x-3 w-full py-2 pl-4 hover:bg-cyan-500 transition-all duration-100 ease-in-out group   ">
              <FaHeart></FaHeart>

              <p className="text-gray-600 group-hover:text-white transition-all duration-100 ease-in-out">
                Favorite
              </p>
            </div>
          </div>
        )}
        <div className=" text-center mt-3 text-white ">
          <p className="font-bold text-lg">Black Panther</p>
          <p className="">official teaser</p>
        </div>
      </div>
    </>
  );
}
