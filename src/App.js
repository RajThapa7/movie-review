import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleCard from './components/singleCard';
import './input.css'
import './dist/output.css'
import List from './components/list';
import SearchSection from './components/searchSection';
import Navbar from './components/navbar.js'
import Trailer from './components/trailer.js'
import TrailerCard from './components/trailerCard.js'
import Home from './components/home';
import Description from './components/description';
import Footer from './components/footer';
import SingleCastCard from './components/singleCastCard';
import MovieList from './components/movieList';
import TvList from './components/tvList';
import SearchResults from './components/searchResults';
import { createContext } from 'react';
import { useState } from 'react';
import FullCrew from './components/fullCrew';
export const SearchContext = createContext();

function App() {
  const [searchQuery, setSearchQuery] = useState();
  return (
<SearchContext.Provider value={{searchQuery, setSearchQuery}}>
<Navbar></Navbar>

<Routes>
<Route exact path='/crew' element={<FullCrew/>}></Route>
<Route exact path='/search-results' element={<SearchResults/>}></Route>
<Route exact path='/tv' element={<TvList/>}></Route>
  <Route exact path='/movies' element={<MovieList/>}></Route>
  <Route exact path='/description' element={<Description/>}></Route>
  <Route exact path='/' element={<Home/>}></Route>

</Routes>
<Footer></Footer>
</SearchContext.Provider>
  );
}

export default App;
