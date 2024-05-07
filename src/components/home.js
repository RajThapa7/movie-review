import React from "react";
import Popular from "./popular";
import SearchSection from "./searchSection";
import Trailer from "./trailer";
import Trending from "./trending";

export default function Home() {
  return (
    <>
      <SearchSection></SearchSection>
      <Popular></Popular>
      <Trailer></Trailer>
      <Trending></Trending>
    </>
  );
}
