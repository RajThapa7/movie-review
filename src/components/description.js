import React, { useState } from "react";
import spider from "../images/spidey.jpg";
import RatingCircle from "./ratingCircle";
import { BsArrowRight, BsPlusLg, BsThreeDots, BsTwitter } from "react-icons/bs";
import {
  FaHeart,
  FaListUl,
  FaLongArrowAltRight,
  FaLongArrowAltLeft,
  FaGenderless,
} from "react-icons/fa";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { BiExpand } from "react-icons/bi";
import SingleCastCard from "./singleCastCard";
import { data } from "./demoCast";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import axios from "axios";
import tmdb from "../api/tmdb";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { dateFormatter, moneyFormatter, runTime, yearExtractor } from "./functions";
import { BeatLoader } from "react-spinners";
export default function Description() {
  const [loading, setLoading] = useState(false);
  const shadowStyle = {};
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState({});
  const [castData, setCastData] = useState([]);
  const [crewData, setCrewData] = useState([]);
  const [background, setBackground] = useState(
    require("../images/spider.webp")
  );
  const [images, setImages] = useState([]);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const modalImage = [];
  const movie_id = localStorage.getItem("movie_id");
  const yearExtract = (date) => {
    return date.substr(0, 4);
  };
  useEffect(() => {
    setLoading(true);
    tmdb
      .get(`/movie/${movie_id}`)
      .then((res) => {
        setDescription(res.data);
      })
      .catch((error) => console.log(error));
    tmdb
      .get(`/movie/${movie_id}/credits`)
      .then((res) => {
        setCastData(res.data.cast);
        setCrewData(res.data.crew);
      })
      .catch((error) => console.log(error));
    tmdb
      .get(`/movie/${movie_id}/images`)
      .then((res) => {
        setImages(res.data.backdrops);
      })
      .catch((error) => console.log(error));

    setLoading(false);
  }, []);
  console.log(crewData);

  const {
    title,
    release_date,
    status,
    budget,
    revenue,
    original_language,
    tagline,
    poster_path,
    backdrop_path,
    runtime,
    genres,
  } = description;
  const img = `https://image.tmdb.org/t/p/original${poster_path}`;
  const backgroundImg = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const myStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };
  return (
    <div>
      {loading ? (
        <div className="w-full h-[calc(100vh-20rem)] flex flex-col justify-center items-center">
          <BeatLoader
            color="#277BD2"
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            className=" mx-auto  absolute "
          />
        </div>
      ) : (
        <div className="bg-top bg-cover bg-no-repeat" style={myStyle}>
          <div className="py-12 flex flex-col space-y-8 bg-gray-900 bg-opacity-75 backdrop-blur-none lg:flex-row">
            <div className="group w-72 h-[27rem] mx-auto ">
              <div className="object-contain relative">
                <img src={img} alt="" className="rounded-lg " />
                <div
                  className="group-hover:opacity-100 opacity-0 absolute  flex flex-row  items-center top-0 justify-center w-72 h-[27rem] space-x-1 bg-gray-900 bg-opacity-20 backdrop-blur-md  drop-shadow-lg rounded-lg transition-all duration-300 ease-in-out"
                  onClick={() => setModal(true)}
                >
                  <BiExpand className="text-3xl text-white"></BiExpand>
                  <p className="text-2xl text-gray-200 ">Expand</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center px-10 md:px-28 space-y-5 text-white lg:w-[68%] lg:px-0 lg:pr-20  lg:items-start">
              <div className="">
                <h2 className="font-black text-2xl">
                  {title}&nbsp;({yearExtractor(release_date)})
                </h2>
              </div>
              <div className="inline-flex items-center">
                <p className="border-[2px] border-white p-[1px] px-1">PG</p>
                &nbsp;
                <p>{dateFormatter(release_date)} (US)</p>
                &nbsp;
                <p className="w-[6px] h-[6px] bg-white rounded-full "></p>
                &nbsp;
                {/* Genres */}
                <div className="inline-flex first:text-blue-900">
                  {genres &&
                    genres.map((item) => {
                      return <p>{item.name},&nbsp;</p>;
                    })}
                </div>
                &nbsp;
                <p className="w-[6px] h-[6px] bg-white rounded-full "></p>
                &nbsp;
                <p className="">{runTime(runtime)}</p>
              </div>
              <div className="inline-flex items-center space-x-4 relative">
                <RatingCircle inlineStyle="top-0 left-0"></RatingCircle>
                <div className="">
                  <div className="peer w-12 h-12  bg-[#043056] rounded-full flex items-center justify-center">
                    <FaListUl className=" text-white "></FaListUl>
                  </div>
                  <div className="hidden peer-hover:flex flex-col transition-all duration-1000 ease-in-out">
                    <div className="bg-[#043056] w-3 h-3 absolute left-[5.7rem] top-[58px] rounded-sm rotate-45"></div>
                    <p className=" absolute bg-[#043056] text-white font-semibold px-2 py-1 rounded-md left-14 top-16 ">
                      Add to list
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="peer w-12 h-12  bg-[#043056] rounded-full flex items-center justify-center">
                    <FaHeart className=" text-white "></FaHeart>
                  </div>
                  <div className="hidden peer-hover:flex flex-col transition-all duration-1000 ease-in-out">
                    <div className="bg-[#043056] w-3 h-3 absolute left-[9.6rem] top-[58px] rounded-sm rotate-45"></div>
                    <p className=" absolute bg-[#043056] text-white font-semibold px-2 py-1 rounded-md left-24 top-16 ">
                      Mark as Favorite
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="peer w-12 h-12  bg-[#043056] rounded-full flex items-center justify-center">
                    <AiFillStar className=" text-white "></AiFillStar>
                  </div>
                  <div className="hidden peer-hover:flex flex-col transition-all duration-1000 ease-in-out">
                    <div className="bg-[#043056] w-3 h-3 absolute left-[13.7em] top-[58px] rounded-sm rotate-45"></div>
                    <p className=" absolute bg-[#043056] text-white font-semibold px-2 py-1 rounded-md left-[12.5rem] top-16 ">
                      Rate!
                    </p>
                  </div>
                </div>
                <a className="inline-flex items-center hover:opacity-70 transition-all duration-300 cursor-pointer">
                  <BsPlayFill className="text-2xl"></BsPlayFill>
                  <p className="font-bold ">Trailer</p>
                </a>
              </div>
              <div>
                <p className="italic text-lg text-justify text-gray-200">
                  {tagline}
                </p>
              </div>
              <div>
                <p className="text-xl font-bold ">Overview</p>
                <p className="text-justify">{description.overview}</p>
              </div>
              {/* producers, directors etc.. */}
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4	">
                {crewData
                  .filter((item) => 
                    item.job == "Director"|| item.job == "Producer" || item.job == "Screenplay" || item.job == "Characters"  
                  )
                  .map((item) => {
                    return (
                      <div>
                        <p className="font-bold">{item.name} </p>
                        <p>{item.job}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* casting list */}
      <div className="py-6 dark:bg-gray-800 dark:text-gray-300">
        <p className="text-xl font-bold pl-8 ">Top cast</p>
        <div className="lg:flex flex-row">
          <div className="lg:w-3/4">
            <div
              className="flex flex-row space-x-5 overflow-x-scroll py-5 pl-8  "
              style={shadowStyle}
            >
              {castData.slice(0, 9).map((item) => {
                const { name, character, profile_path } = item;
                const img = `https://image.tmdb.org/t/p/original${profile_path}`;
                return (
                  <SingleCastCard name={name} character={character} img={img} />
                );
              })}
              <div className="min-w-[10rem] w-40 h-[17.5rem]  justify-self-center relative">
                <Link
                  to="#"
                  className="inline-flex items-center space-x-4 font-bold absolute top-32 left-5 hover:text-cyan-900 transition-all duration-200 ease-in-out"
                >
                  View More <FaLongArrowAltRight></FaLongArrowAltRight>
                </Link>
              </div>
            </div>
            <div className="py-5 pl-8 ">
              <Link
                to="/crew"
                className="font-bold text-lg hover:text-gray-500 transition-all duration-200 text-[#003968] dark:text-blue-500"
              >
                Full Cast & Crew
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4">
            <div className="h-[1px] bg-gray-400 ml-8 w-[calc(100vw-15%)] mb-6 lg:hidden"></div>
            <div className="space-y-5 pl-8 ">
              {/* social links */}
              <div className="inline-flex space-x-4 text-3xl">
                <a href="#">
                  <BsFacebook></BsFacebook>
                </a>
                <a href="#">
                  <BsTwitter></BsTwitter>
                </a>
                <a href="#">
                  <AiFillInstagram></AiFillInstagram>
                </a>
              </div>
              {/* movie datas */}
              <div className="space-y-4">
                <div className="flex flex-col ">
                  <p className="font-bold">Status</p>
                  <p>{status}</p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Original Language</p>
                  <p>{original_language}</p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Budget</p>
                  <p>${moneyFormatter(budget)}</p>
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">Revenue</p>
                  <p>${moneyFormatter(revenue)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <div
        style={{ display: modal ? "flex" : "none" }}
        className="w-full h-screen bg-gray-900 bg-opacity-80 fixed top-0 left-0 flex-col items-center justify-center transition-all duration-300 ease-in-out "
      >
        {images.map((item) => {
          const img = `https://image.tmdb.org/t/p/original${item.file_path}`;
          modalImage.push(img);
        })}
        <img
          src={modalImage[modalImageIndex]}
          alt=""
          className="w-full opacity-100"
        />
        <AiOutlineClose
          className=" text-white text-4xl absolute right-5 top-5 "
          onClick={() => setModal(false)}
        ></AiOutlineClose>
        <FaLongArrowAltRight
          className="text-white text-4xl absolute top-1/2 right-0 md:right-20 hover:text-cyan-500 transition-all duration-200 ease-in-out"
          onClick={() => {
            setModalImageIndex(
              modalImageIndex === modalImage.length - 1
                ? 0
                : modalImageIndex + 1
            );
          }}
        ></FaLongArrowAltRight>
        <FaLongArrowAltLeft
          className="text-white text-4xl absolute top-1/2 left-0 md:left-20 hover:text-cyan-500 transition-all duration-200 ease-in-out"
          onClick={() => {
            setModalImageIndex(
              modalImageIndex === 0
                ? modalImage.length - 1
                : modalImageIndex - 1
            );
          }}
        ></FaLongArrowAltLeft>
      </div>
    </div>
  );
}
