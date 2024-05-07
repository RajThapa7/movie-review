import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Description from "./components/description";
import Footer from "./components/footer";
import FullCrew from "./components/fullCrew";
import Home from "./components/home";
import MovieList from "./components/movieList";
import Navbar from "./components/navbar.js";
import SearchResults from "./components/searchResults";
import TvList from "./components/tvList";
import "./dist/output.css";
import "./input.css";

export const SearchContext = createContext();

function App() {
  const [searchQuery, setSearchQuery] = useState();
  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      <Navbar></Navbar>

      <Routes>
        <Route exact path="/crew" element={<FullCrew />}></Route>
        <Route exact path="/search-results" element={<SearchResults />}></Route>
        <Route exact path="/tv" element={<TvList />}></Route>
        <Route exact path="/movies" element={<MovieList />}></Route>
        <Route exact path="/description" element={<Description />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
    </SearchContext.Provider>
  );
}

export default App;
