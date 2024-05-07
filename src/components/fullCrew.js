import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import tmdb from "../api/tmdb";
import ScrollToTop from "./scroll2Top";
import SingleCastCard from "./singleCastCard";

export default function FullCrew() {
  const [castData, setCastData] = useState([]);
  const [crewData, setCrewData] = useState([]);
  const [loading, setLoading] = useState(false);

  const _id = localStorage.getItem("id");
  const id = _id.split("_")[0];
  const media_type = _id.split("_")[1];

  useEffect(() => {
    setLoading(true);
    tmdb
      .get(`/${media_type}/${id}/credits`)
      .then((res) => {
        setCastData(res.data.cast);
        setCrewData(res.data.crew);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, [id, media_type]);

  return (
    <>
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
        <div className="px-10 py-8 pb-16 dark:bg-gray-800 dark:text-gray-200">
          <ScrollToTop></ScrollToTop>
          <h2 className="text-2xl font-bold pb-6  md:px-16 lg:px-20">
            Full Cast
          </h2>
          <div className="md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6  justify-items-center pb-12">
            {castData.map((item) => {
              const { name, character, profile_path } = item;
              const img = `https://image.tmdb.org/t/p/original${profile_path}`;
              return (
                <SingleCastCard name={name} character={character} img={img} />
              );
            })}
          </div>
          <div className="bg-black w-[calc(100vw-15%)] h-[1px] dark:bg-gray-600 mx-auto"></div>
          <h2 className="text-2xl font-bold pb-6 pt-10  md:px-16 lg:px-20">
            Full Crew
          </h2>
          {crewData.filter((item) => item.known_for_department === "Production")
            .length !== 0 ? (
            <h2 className="text-xl font-bold pb-6 pt-4 md:px-16 lg:px-20">
              Production
            </h2>
          ) : (
            ""
          )}

          <div className="md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6  justify-items-center">
            {crewData
              .filter((item) => item.known_for_department === "Production")
              .map((item) => {
                const { name, profile_path, job } = item;
                const img = `https://image.tmdb.org/t/p/original${profile_path}`;
                return <SingleCastCard name={name} character={job} img={img} />;
              })}
          </div>
          {crewData.filter((item) => item.known_for_department === "Directing")
            .length !== 0 ? (
            <h2 className="text-xl font-bold pb-6 pt-12 md:px-16 lg:px-20">
              Directing
            </h2>
          ) : (
            ""
          )}

          <div className="md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6  justify-items-center">
            {crewData
              .filter((item) => item.known_for_department === "Directing")
              .map((item) => {
                const { name, profile_path, job } = item;
                const img = `https://image.tmdb.org/t/p/original${profile_path}`;
                return <SingleCastCard name={name} character={job} img={img} />;
              })}
          </div>
          {crewData.filter((item) => item.known_for_department === "Sound")
            .length !== 0 ? (
            <h2 className="text-xl font-bold pb-6 pt-12 md:px-16 lg:px-20">
              Sound
            </h2>
          ) : (
            ""
          )}
          <div className="md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6  justify-items-center">
            {crewData
              .filter((item) => item.known_for_department === "Sound")
              .map((item) => {
                const { name, profile_path, job } = item;
                const img = `https://image.tmdb.org/t/p/original${profile_path}`;
                return <SingleCastCard name={name} character={job} img={img} />;
              })}
          </div>
          {crewData.filter(
            (item) => item.known_for_department === "Costume & Make-Up"
          ).length !== 0 ? (
            <h2 className="text-xl font-bold pb-6 pt-12 md:px-16 lg:px-20">
              Costume and Make up
            </h2>
          ) : (
            ""
          )}
          <div className="md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6  justify-items-center">
            {crewData
              .filter(
                (item) => item.known_for_department === "Costume & Make-Up"
              )
              .map((item) => {
                const { name, profile_path, job } = item;
                const img = `https://image.tmdb.org/t/p/original${profile_path}`;
                return <SingleCastCard name={name} character={job} img={img} />;
              })}
          </div>
          {crewData.filter((item) => item.known_for_department === "Writing")
            .length !== 0 ? (
            <h2 className="text-xl font-bold pb-6 pt-12 md:px-16 lg:px-20">
              Writing
            </h2>
          ) : (
            ""
          )}
          <div className="md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6  justify-items-center">
            {crewData
              .filter((item) => item.known_for_department === "Writing")
              .map((item) => {
                const { name, profile_path, job } = item;
                const img = `https://image.tmdb.org/t/p/original${profile_path}`;
                return <SingleCastCard name={name} character={job} img={img} />;
              })}
          </div>
          {crewData.filter(
            (item) => item.known_for_department === "Visual Effects"
          ).length !== 0 ? (
            <h2 className="text-xl font-bold pb-6 pt-12 md:px-16 lg:px-20">
              Visual Effects
            </h2>
          ) : (
            ""
          )}
          <div className="md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6  justify-items-center">
            {crewData
              .filter((item) => item.known_for_department === "Visual Effects")
              .map((item) => {
                const { name, profile_path, job } = item;
                const img = `https://image.tmdb.org/t/p/original${profile_path}`;
                return <SingleCastCard name={name} character={job} img={img} />;
              })}
          </div>
          {crewData.filter((item) => item.known_for_department === "Art")
            .length !== 0 ? (
            <h2 className="text-xl font-bold pb-6 pt-12 md:px-16 lg:px-20">
              Art
            </h2>
          ) : (
            ""
          )}
          <div className="md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6  justify-items-center">
            {crewData
              .filter((item) => item.known_for_department === "Art")
              .map((item) => {
                const { name, profile_path, job } = item;
                const img = `https://image.tmdb.org/t/p/original${profile_path}`;
                return <SingleCastCard name={name} character={job} img={img} />;
              })}
          </div>
        </div>
      )}
    </>
  );
}
