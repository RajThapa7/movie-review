import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../App";

export default function SearchSection() {
  const { setSearchQuery } = useContext(SearchContext);
  // const [searchQuery, setSearchQuery] = useState();
  const navigate = useNavigate();

  return (
    <div className=" px-12 md:px-14 pt-16 pb-16 search w-screen bg-cover bg-no-repeat overflow-x-hidden">
      <div className="flex flex-col text-white">
        <span className="font-black text-4xl md:text-5xl tracking-wide">
          Welcome.
        </span>
        <span className="mt-2 font-black text-xl md:text-3xl tracking-wide">
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
      </div>
      <div className="mt-12 flex flex-row relative">
        <form action="">
          <input
            type="text"
            name=""
            id=""
            className="bg-white text-lg text-gray-500  rounded-full py-3 px-6 w-full md:w-[80vw] lg:w-[85vw] focus:outline-none dark:bg-gray-700 dark:text-gray-300"
            placeholder="Search for a movie, tv show, person.... "
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <button
          className=" -ml-12 bg-gradient-to-r from-green-400  to-cyan-500 py-3 px-6 rounded-full font-black text-white hover:text-black transition-all duration-200 ease-in-out "
          onClick={() => navigate("/search-results")}
        >
          Search
        </button>
      </div>
    </div>
  );
}
