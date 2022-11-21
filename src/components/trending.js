import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import tmdb from "../api/tmdb";
import SingleCard from "./singleCard";
import SliderButton from "./sliderButton";

export default function Trending() {
  const [trending, setTrending] = useState([]);
  const [media, setMedia] = useState('tv');
  const [time, setTime] = useState('day')
  useEffect(() => {
    tmdb
      .get(`/trending/all/${time}`)
      .then((res) => {
        setTrending(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [time]);
  return (
    <div className="dark:bg-gray-800 dark:text-gray-300">
      <div className="flex flex-row items-end pl-12">
        <p className="font-semibold text-2xl">Trending</p>
        <SliderButton title1="Today" title2="This Week" setTime={setTime} setMedia={setMedia}></SliderButton>
      </div>
      <div className="flex flex-row overflow-x-scroll space-x-8 pl-12">
        {trending.map((item) => {
          const { title, release_date, poster_path, id } = item;
          const img = `https://image.tmdb.org/t/p/original${poster_path}`;
          return (
            <SingleCard
              key={item.id}
              title={title}
              releaseDate={release_date}
              img={img}
              movie_id={id}
            />
          );
        })}
      </div>
    </div>
  );
}
