import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import tmdb from '../api/tmdb';
import SingleCard from './singleCard';
import { SearchContext } from "../App";
import { useContext } from 'react';
import { BeatLoader } from "react-spinners";

export default function SearchResults() {
    const {searchQuery} = useContext(SearchContext)
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([])  
    useEffect(()=>{
      setLoading(true)
        tmdb.get('/search/multi',{params:{query: `${searchQuery}`}}).then((res)=>{
          setData(res.data.results)
          setLoading(false)
        }).catch((error) => console.log(error));
      },[searchQuery]);
  return (
    <div className="dark:bg-gray-800 dark:text-gray-200">
    <h2 className="text-2xl font-semibold px-10 md:px-20 pt-8">
      Search Results for : {searchQuery}
    </h2>
    {loading?<div className="w-full h-[calc(100vh-20rem)] flex flex-col justify-center items-center">
          
          <BeatLoader
            color="#277BD2"
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            className=" mx-auto  absolute "

          />
          </div>:
          
    <div className="md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  justify-items-center">
      {data.map((item) => {
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
          }
  </div>
  )
}
