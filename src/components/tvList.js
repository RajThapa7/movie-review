import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import tmdb from "../api/tmdb";
import SingleCard from "./singleCard";

export default function TvList() {
  const [filter, setFilter] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    tmdb
      .get(`/tv/${filter}`)
      .then((res) => {
        setMovieList(res.data.results);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [filter]);
  const [movieListTitle, setMovieListTitle] = useState();
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);
  return (
    <div className="py-10 dark:bg-gray-800 dark:text-gray-300">
      <form
        action=""
        className="px-10 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 font-medium"
      >
        <div className="inline-flex space-x-2">
          <input
            type="radio"
            name="movie_type"
            id="Airing Today"
            value="airing_today"
            onChange={(e) => {
              setFilter(e.target.value);
              setMovieListTitle(e.target.id);
            }}
          />
          <label htmlFor="now_playing">Airing Today</label>
        </div>
        <div className="inline-flex space-x-2">
          <input
            type="radio"
            name="movie_type"
            id="On Air"
            value="on_the_air"
            onChange={(e) => {
              setFilter(e.target.value);
              setMovieListTitle(e.target.id);
            }}
          />
          <label htmlFor="upcoming">On Air</label>
        </div>

        <div className="inline-flex space-x-2">
          <input
            type="radio"
            name="movie_type"
            id="Popular"
            value="popular"
            onChange={(e) => {
              setFilter(e.target.value);
              setMovieListTitle(e.target.id);
            }}
          />
          <label htmlFor="popular">Popular</label>
        </div>
        <div className="inline-flex space-x-2">
          <input
            type="radio"
            name="movie_type"
            id="Top Rated"
            value="top_rated"
            onChange={(e) => {
              setFilter(e.target.value);
              setMovieListTitle(e.target.id);
            }}
          />
          <label htmlFor="top_rated">Top Rated</label>
        </div>
      </form>
      <div className="bg-black w-full h-[1px] my-5 dark:bg-gray-600"></div>
      {filter ? (
        <div className="">
          <h2 className="text-2xl font-semibold px-10 md:px-20 ">
            {movieListTitle}
          </h2>
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
            <div className="md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  justify-items-center">
              {movieList.map((item) => {
                const { name, first_air_date, poster_path, id } = item;
                const img = `https://image.tmdb.org/t/p/original${poster_path}`;
                return (
                  <SingleCard
                    key={id}
                    title={name}
                    releaseDate={first_air_date}
                    img={img}
                    movie_id={id}
                    media_type="tv"
                  />
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <p className=" px-10 pb-2 text-red-500 font-bold text-lg">
          {" "}
          * Select a filter to generate a list
        </p>
      )}
    </div>
  );
}
