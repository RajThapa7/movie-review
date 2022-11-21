import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import tmdb from '../api/tmdb';
import SingleCard from './singleCard';
import { SearchContext } from "../App";
import { useContext } from 'react';
export default function SearchResults() {
    const {searchQuery} = useContext(SearchContext)

    const [data, setData] = useState([])  
    useEffect(()=>{
        tmdb.get('/search/multi',{params:{query: `${searchQuery}`}}).then((res)=>{
          setData(res.data.results)
        }).catch((error) => console.log(error));
      },[searchQuery]);
  return (
    <div className="dark:bg-gray-800 dark:text-gray-200">
    <h2 className="text-2xl font-semibold px-10 md:px-20 pt-8">
      Search Results for : {searchQuery}
    </h2>
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
  </div>
  )
}
