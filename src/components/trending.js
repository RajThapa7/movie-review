import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import tmdb from "../api/tmdb";
import SingleCard from "./singleCard";
import SliderButton from "./sliderButton";
import { BeatLoader } from "react-spinners";

export default function Trending() {
  const [trending, setTrending] = useState([]);
  const [media, setMedia] = useState('tv');
  const [time, setTime] = useState('day')
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    tmdb
      .get(`/trending/all/${time}`)
      .then((res) => {
        setTrending(res.data.results);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [time]);
  console.log(trending)
  return (
    <div className="dark:bg-gray-800 dark:text-gray-300">
      <div className="flex flex-row items-end pl-12">
        <p className="font-semibold text-2xl">Trending</p>
        <SliderButton title1="Today" title2="This Week" setTime={setTime} setMedia={setMedia}></SliderButton>
      </div>
      <div className="flex flex-row overflow-x-scroll space-x-8 pl-12">
        {loading?<BeatLoader
            color="#277BD2"
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            className=" mx-auto py-24"

          />:trending.map((item) => {
            let title;
            let release_date;
            const {   poster_path, id, media_type, vote_average } = item;
         media_type == 'movie' ? title = item.title: title = item.name;
          media_type == 'movie' ? release_date = item.release_date:  release_date= item.first_air_date;

          const img = `https://image.tmdb.org/t/p/original${poster_path}`;
          return (
            <SingleCard
              key={item.id}
              title={title}
              releaseDate={release_date}
              img={img}
              movie_id={id}
              media_type={media_type}
              rating={vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
