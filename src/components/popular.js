import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import tmdb from "../api/tmdb";
import SingleCard from "./singleCard";
import SliderButton from "./sliderButton";

export default function Popular() {
  const [media, setMedia] = useState("tv");
  const [popular, setPopular] = useState([]);
  const [time, setTime] = useState("day");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    tmdb
      .get(`${media}/popular`)
      .then((res) => {
        setPopular(res.data.results);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [media]);

  return (
    <div className="dark:bg-gray-800 dark:text-gray-300">
      <div className="flex flex-row items-end pl-12 ">
        <p className="hidden md:flex font-semibold text-2xl">What's Popular</p>
        <p className=" md:hidden font-semibold text-2xl">&nbsp;Popular</p>

        <SliderButton
          title1="On TV"
          title2="In Theatres"
          setMedia={setMedia}
          setTime={setTime}
        ></SliderButton>
      </div>
      <div className="flex flex-row overflow-x-scroll space-x-8 pl-12 ">
        {loading ? (
          <BeatLoader
            color="#277BD2"
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            className=" mx-auto py-24"
          />
        ) : (
          popular.map((item) => {
            const { poster_path, id, vote_average } = item;
            let title;
            let release_date;
            media === "tv" ? (title = item.name) : (title = item.title);
            media === "tv"
              ? (release_date = item.first_air_date)
              : (release_date = item.release_date);

            const img = `https://image.tmdb.org/t/p/original${poster_path}`;

            return (
              <SingleCard
                key={id}
                title={title}
                releaseDate={release_date}
                img={img}
                movie_id={id}
                media_type={media}
                rating={vote_average}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
