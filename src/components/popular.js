import React, { useEffect } from 'react'
import { useState } from 'react';
import tmdb from '../api/tmdb';
import SingleCard from './singleCard'
import SliderButton from './sliderButton'
export default function Popular() {
  const [media, setMedia] = useState('tv');
  const [popular, setPopular] = useState([])
  const [time, setTime] = useState('day')

  useEffect(() => {
    tmdb
      .get(`${media}/popular`)
      .then((res) => {
        setPopular(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [media]);
  return (
   <div className='dark:bg-gray-800 dark:text-gray-300'>
   <div className='flex flex-row items-end pl-12 '>
<p className='hidden md:flex font-semibold text-2xl'>What's Popular</p>
<p className=' md:hidden font-semibold text-2xl'>&nbsp;Popular</p>

   <SliderButton title1='On TV' title2="In Theatres" setMedia={setMedia} setTime={setTime}></SliderButton>
   </div>
    <div className='flex flex-row overflow-x-scroll space-x-8 pl-12 '>
    
    {popular.map((item) => {
          const { title, release_date, poster_path, id } = item;
          const img = `https://image.tmdb.org/t/p/original${poster_path}`;
          return (
            <SingleCard
              key={id}
              title={title}
              releaseDate={release_date}
              img={img}
              movie_id={id}
            />
          );
        })
        }
    </div>
   </div>
  )
}
