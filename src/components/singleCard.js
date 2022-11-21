import React, { useState } from "react";
import img1 from "../images/spidey.jpg";
import { BsPlusLg, BsThreeDots } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import RatingCircle from "./ratingCircle";
import { dateModifier } from "./dateModifier";
import { Link } from "react-router-dom";

export default function SingleCard({ title, releaseDate, img, movie_id }) {
  const date = { releaseDate }.releaseDate;
  const [visible, setVisible] = useState(false);
  const handleMouseEnter = () => {
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="flex flex-col  w-[12.25rem] relative my-12 border-2 border-solid shadow-lg shadow-gray-300  rounded-xl dark:shadow-gray-900 dark:border-gray-800 ">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div>
            <div className="w-48 object-fill mx-auto">
              <img src={img} alt="" className=" rounded-t-xl h-72 w-48" />
              <div className="lg:hidden absolute top-1 right-3 text-white text-3xl font-bold">
                <BsThreeDots />
              </div>
            </div>
          </div>

          <div
            className={`flex rounded-t-xl flex-row text-gray-100  space-x-14 text-3xl w-48 absolute top-0 left-0  items-center justify-center bg-white bg-opacity-20 backdrop-blur-md  drop-shadow-lg ${
              visible ? "h-72" : "h-0"
            } transition-all duration-300 ease-in-out`}
          >
            <FaHeart
              className={`${
                visible ? "" : "hidden"
              } hover:text-red-400 transition-all duration-300 ease-in-out`}
              title="Add to favourite"
            ></FaHeart>
            <BsPlusLg
              className={`${
                visible ? "" : "hidden"
              } hover:text-sky-400 transition-all duration-300 ease-in-out`}
              title="Add to List"
            ></BsPlusLg>
          </div>
        </div>
        <RatingCircle inlineStyle="-top-7"></RatingCircle>

        <div className="w-44 mx-auto -mt-3          ">
          <Link
            to="/description"
            className="font-bold text-md hover:text-cyan-600 transition-all duration-150 ease-in-out"
            onClick={() => {
              localStorage.setItem("movie_id", movie_id);
            }}
          >
            {title}
          </Link>
          <p className="text-gray-600 text-sm ">{dateModifier(date)}</p>
        </div>
      </div>
    </>
  );
}
