import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import tmdb from "../api/tmdb";
import SingleCard from "./singleCard";

export default function MovieList() {
  const [filter, setFilter] = useState();
  useEffect(() => {
    tmdb
      .get(`/movie/${filter}`)
      .then((res) => {
        setMovieList(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [filter]);
  const [movieListTitle, setMovieListTitle] = useState();
  const [movieList, setMovieList] = useState([]);
  console.log(filter);

  return (
    <div className="py-10">
      <form
        action=""
        className="px-10 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 font-medium"
      >
        <div className="inline-flex space-x-2">
          <input
            type="radio"
            name="movie_type"
            id="Now Playing"
            value="now_playing"
            onChange={(e) => {
              setFilter(e.target.value);
              setMovieListTitle(e.target.id);
            }}
          />
          <label htmlFor="now_playing">Now Playing</label>
        </div>
        <div className="inline-flex space-x-2">
          <input
            type="radio"
            name="movie_type"
            id="Upcoming"
            value="upcoming"
            onChange={(e) => {
              setFilter(e.target.value);
              setMovieListTitle(e.target.id);
            }}
          />
          <label htmlFor="upcoming">Upcoming</label>
        </div>
        {/* <div className="inline-flex space-x-2">
          <input
            type="radio"
            name="movie_type"
            id="Latest"
            value="latest"
            onChange={(e) => {
              setFilter(e.target.value);
              setMovieListTitle(e.target.id);
            }}
          />
          <label htmlFor="latest">Latest</label>
        </div> */}

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
      <div className="bg-black w-full h-[1px] my-5"></div>
      {filter ? (
        <div className="">
          <h2 className="text-2xl font-semibold px-10 md:px-20 ">
            {movieListTitle}
          </h2>
          <div className="md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  justify-items-center">
            {movieList.map((item) => {
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
            })}
          </div>
        </div>
      ) : (
        <p className=" px-10 pb-2 text-red-500 font-bold text-lg"> * Select a filter to generate a list</p>
      )}
    </div>
  );
}
