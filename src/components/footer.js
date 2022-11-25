import React from 'react'
import { BsFacebook } from "react-icons/bs";
import {MdLocationPin } from "react-icons/md";
import {BsTelephoneFill } from "react-icons/bs";
import {GrMail } from "react-icons/gr";
import {FaTiktok } from "react-icons/fa";
import {AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='w-full bg-gradient-to-br from-[#032541] via-[#04355e] to-[#044172]  px-8 py-6 clip-left-curved '>
        <div className='flex mb-4'>
        <a href="/" className=" w-1/6">
        <div className=" inline-flex items-center space-x-2 md:-mt-2 md:ml-8">
          <p className="font-black text-white text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-cyan-500">TGMR</p>
          <div className="w-16 h-6 bg-cyan-500 rounded-xl"></div>
        </div>
        </a>
            <div className='w-5/6 flex justify-end self-center space-x-4 md:w-5/6 lg:w-11/12 md:pr-6 lg:pr-12'>
                <a href="#" className='self-center text-3xl text-white hover:scale-110 transition-all ease-in-out duration-500 hover:opacity-70'><BsFacebook/></a>
                <a href="#" className='self-center text-3xl text-white hover:scale-110 transition-all ease-in-out duration-500 hover:opacity-70'><FaTiktok/></a>
                <a href="#" className='self-center text-3xl text-white hover:scale-110 transition-all ease-in-out duration-500 hover:opacity-70'><AiFillInstagram/></a>

            </div>
        </div>
        {/* second row */}
        <div className='flex flex-col  space-y-6 divide-y-2 md:flex-row md:space-y-0 md:divide-y-0 '>

        <div className='flex flex-col space-y-4 mt-4 md:w-1/3 text-white font-semibold' >
            <p className='inline-flex'><MdLocationPin className='bg-cyan-600 text-white rounded-full w-7 h-7 p-1 mr-3'/> Kapan, Budhanilkantha-12, Kathmandu, Nepal</p>
            <p className='inline-flex'><BsTelephoneFill className='bg-cyan-600 text-white rounded-full w-7 h-7 p-1 mr-3'/> 9848741130</p>
            <p className='inline-flex'><GrMail className='bg-cyan-600 text-white rounded-full w-7 h-7 p-1 mr-3'/>tgmr@gmail.com</p>
        </div>
        <div className='md:w-1/3 md:flex md:flex-col text-white font-semibold' >
    <p className='text-lg mt-4 mb-4 md:mt-0 md:self-center font-bold'>Links</p>
        <div className='grid grid-cols-2 md:grid-cols-1 md:self-center space-y-2'>
          <Link to="/" className='hover:text-cyan-400 transition-all  ease-in duration-300'>Home</Link>
          <Link to="/movies" className='hover:text-cyan-400 transition-all  ease-in duration-300'>Movies</Link>
          <Link to="/tv" className='hover:text-cyan-400 transition-all  ease-in duration-300'>TV</Link>
          <Link to="/" className='hover:text-cyan-400 transition-all  ease-in duration-300'>Editor's Pick</Link>

        </div>
        </div>
        {/* contact us */}
        <div className='md:w-1/3 md:flex md:flex-col'>
        <p className='text-lg mt-4 md:mt-0 md:text-center text-white font-bold mb-3' >Send a Message</p>
        <form action="" className='md:self-center md:items-center flex flex-col space-y-3  '>
          <input type="email" name="email" id="email" placeholder="Your email address" pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$" className='dark:bg-gray-800 dark:text-gray-300 border-2 rounded-md border-slate-400 p-2  valid:border-yellow-600  focus:outline-blue-400 [&:not(:placeholder-shown)]:focus:invalid:outline-red-500 [&:not(:placeholder-shown)]:focus:invalid:text-red-500 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:invalid:text-red-500 self-start md:w-full' required />
          <textarea name="message" id="message" cols="24" rows="3" placeholder='Message here...' className='dark:bg-gray-800 dark:text-gray-300 resize-none border-2 rounded-md border-slate-400 p-2  [&:not(:placeholder-shown)]:valid:border-yellow-600  focus:outline-blue-400 [&:not(:placeholder-shown)]:focus:invalid:outline-red-500 [&:not(:placeholder-shown)]:focus:invalid:text-red-500 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:invalid:text-red-500 self-start'></textarea>
          <button  className=' self-start mt-2 bg-cyan-600 p-1 px-3 rounded-lg text-white font-bold hover:opacity-60 transition-all duration-500' >Send</button>
        </form>
        </div>
        {/* contact us ends */}
        </div>

        <div className='w-full border-[1px] border-white rounded-full bg-white mt-8'>
        </div>
        <div className='text-center mt-4 text-white font-bold' > The Great Movie Review © 2022 - All Rights Reserved</div>

    </div>
  )
}
