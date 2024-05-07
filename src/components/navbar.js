import React, { useContext, useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaMoon, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../App";

export default function Navbar() {
  const { setSearchQuery } = useContext(SearchContext);
  const [top, setTop] = useState("");
  const [middle, setMiddle] = useState("bg-white");
  const [bottom, setBottom] = useState("");
  const [mobileMenu, setMobileMenu] = useState("h-0 ");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(false);
  const navigate = useNavigate();
  const theme = localStorage.getItem("theme");

  useEffect(() => {
    if (theme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleClick = (e) => {
    if (menuOpen) {
      setTop("");
      setBottom("");
      setMiddle("bg-white");
      setMobileMenu("h-0 invisible");
      setMenuOpen(false);
    } else {
      setTop("-translate-x-1 translate-y-2 rotate-45");
      setMiddle("-translate-x-5 bg-transparent");
      setBottom("-translate-x-1 -translate-y-1  -rotate-45");
      setMobileMenu("h-72 pt-6 md:h-[18rem] ");
      setMenuOpen(true);
    }
  };
  const linkData = [
    {
      title: "Movies",
      link: "/movies",
    },
    {
      title: "TV",
      link: "/tv",
    },
    {
      title: "Editor's Pick",
      link: "/",
    },
    {
      title: "Login",
      link: "/",
    },
  ];

  return (
    <>
      <nav
        className="pl-3 pr-2 pt-4 pb-4 lg:pb-0  flex bg-[#032541]  -z-50 "
        id="nav-top"
      >
        <a href="/" className=" w-1/6">
          <div className=" inline-flex items-center space-x-2 md:-mt-2 ml-8 ">
            <p className="font-black text-white text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-cyan-500">
              TGMR
            </p>
            <div className="w-16 h-6 bg-cyan-500 rounded-xl"></div>
          </div>
        </a>
        {/* anchor links */}
        <div className=" hidden w-5/6 lg:flex items-start justify-end  pr-8 space-x-6 text-white font-black">
          {linkData.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center space-y-2"
                key={index}
              >
                <Link to={item.link} className="px-3 peer ">
                  {item.title}
                </Link>
                <div className="w-0 peer-hover:w-[80%]  bg-cyan-400 h-[6px] transition-all duration-300"></div>
              </div>
            );
          })}
          <button
            className="pl-1 flex flex-col items-start justify-start"
            id="toggler"
          >
            {dark ? (
              <FaMoon
                className=" text-xl font-normal uppercase"
                onClick={() => {
                  localStorage.setItem("theme", "");
                  setDark(false);
                }}
              />
            ) : (
              <BsSunFill
                className=" text-xl font-normal uppercase"
                onClick={() => {
                  localStorage.setItem("theme", "dark");
                  // document.documentElement.classList.add('dark')
                  setDark(true);
                }}
              />
            )}
          </button>
          <button
            className="self-start pl-4 text-xl text-cyan-400"
            onClick={() => setNumber(!number)}
          >
            {number ? (
              <CgClose className="font-extrabold text-3xl text-white -mt-1"></CgClose>
            ) : (
              <FaSearch />
            )}
          </button>
        </div>
        {/* menu button */}
        <div
          className=" w-5/6 lg:hidden self-center flex flex-col items-end pr-4 space-y-1 "
          onClick={() => handleClick()}
        >
          <div
            className={`w-6 h-[2px] lg:hidden bg-white rounded-md transition-all duration-700 ease-in-out ${top}`}
          ></div>
          <div
            className={`w-6 h-[2px] lg:hidden  rounded-md transition-all duration-700 ease-in-out ${middle}`}
          ></div>
          <div
            className={`w-6 h-[2px] lg:hidden bg-white rounded-md transition-all duration-700 ease-in-out ${bottom}`}
          ></div>
        </div>

        {/* menu button ends */}
      </nav>
      {/* search bar */}
      {number ? (
        <form
          action=""
          className="hidden lg:inline-flex items-center w-full px-8 border-b-[1px] border-gray-300 dark:bg-gray-600 "
        >
          <FaSearch></FaSearch>
          <input
            type="text"
            name=""
            id=""
            className="pl-4  w-full placeholder:italic py-3 focus:outline-none italic text-gray-600 dark:bg-gray-600 dark:text-gray-200 "
            placeholder="Search for a movie, tv show, person..."
            onChange={(e) => {
              navigate("/search-results");
              setSearchQuery(e.target.value);
            }}
          />
        </form>
      ) : (
        ""
      )}

      {/* hamburg menu */}
      <div
        className={` lg:hidden md:text-lg flex flex-col  bg-gradient-to-b from-[#032541] via-[#04355e] to-[#044172] space-y-5 items-center   ${mobileMenu} text-white font-bold transition-all  duration-500 ease-in-out`}
      >
        <Link
          to="/movies"
          className="hover:translate-x-5 transition-all duration-300 ease-in"
          style={menuOpen ? { display: "flex" } : { display: "none" }}
        >
          Movies
        </Link>
        <Link
          to="/tv"
          className="hover:translate-x-5 transition-all duration-300 ease-in"
          style={menuOpen ? { display: "flex" } : { display: "none" }}
        >
          TV
        </Link>
        <Link
          to="/"
          className="hover:translate-x-5 transition-all duration-300 ease-in"
          style={menuOpen ? { display: "flex" } : { display: "none" }}
        >
          Editor's Pick
        </Link>
        <Link
          to="/"
          className="rounded-xl px-3 py-1 bg-white text-[#032541] self-center hover:scale-105 transition-all duration-300 ease-in"
          style={menuOpen ? { display: "flex" } : { display: "none" }}
        >
          Login
        </Link>
        <button style={menuOpen ? { display: "flex" } : { display: "none" }}>
          {dark ? (
            <FaMoon
              className=" text-xl font-normal uppercase"
              onClick={() => {
                localStorage.setItem("theme", "");
                setDark(false);
              }}
            />
          ) : (
            <BsSunFill
              className=" text-xl font-normal uppercase"
              onClick={() => {
                localStorage.setItem("theme", "dark");
                setDark(true);
              }}
            />
          )}
        </button>

        {/* search bar */}
      </div>
    </>
  );
}
