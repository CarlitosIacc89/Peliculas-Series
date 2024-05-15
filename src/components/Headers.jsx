"use client";
import Link from "next/link";
import React, { useState } from "react";
import HeaderMenuHidden from "./HeaderMenuHidden";
import InputHeader from "./InputHeader";
import useGenres from "./useGenres";

const Headers = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [focusMovies, setFocusMovies] = useState(false);
  const [focusTv, setFocusTv] = useState(false);
  const [focusGenres, setFocusGenres] = useState(false);

  const genres = useGenres();

  const handleFocusMovies = () => {
    setFocusMovies(true);
    setFocusGenres(false);
    setFocusTv(false);
  };
  const handleFocusTv = () => {
    setFocusMovies(false);
    setFocusGenres(false);
    setFocusTv(true);
  };
  const handleFocusGenres = () => {
    setFocusMovies(false);
    setFocusGenres(true);
    setFocusTv(false);
  };
  return (
    <header
      id="top"
      className="flex relative items-center justify-between h-24 bg-gray-900 shadow-md shadow-gray-800 px-3"
    >
      <nav className="flex items-center gap-8 grow justify-around">
        <Link href={"/"} className="text-3xl font-extrabold text-slate-100">
          <span className="text-red-600">Full</span>Movies
        </Link>
        <div className=" hidden md:flex items-center gap-8 pr-4">
          <div
            className="relative p-2"
            onMouseOver={handleFocusMovies}
            onMouseLeave={() => setFocusMovies(false)}
          >
            <Link href={"/movie"} className="header-link">
              Peliculas
            </Link>
            {focusMovies && (
              <div
                className="dropdown-menu"
                style={{ top: "calc(100%)" }}
                onMouseLeave={() => setFocusMovies(false)}
              >
                <Link href={"/movie"}>Populares</Link>
                <Link href={"/movie/now-playing"}>Tendencias</Link>
                <Link href={"/movie/top-rated"}>Mejores calificadas</Link>
              </div>
            )}
          </div>
          <div
            className="relative p-2"
            onMouseOver={handleFocusTv}
            onMouseLeave={() => setFocusTv(false)}
          >
            <Link href={"/series"} className="header-link">
              Series
            </Link>
            {focusTv && (
              <div
                className="dropdown-menu"
                style={{ top: "calc(100%)" }}
                onMouseLeave={() => setFocusTv(false)}
              >
                <Link href={"/series/top-rated"}>Mejores calificadas</Link>
                <Link href={"/series/airing-today"}>En emision hoy</Link>
                <Link href={"/series"}>Populares</Link>
              </div>
            )}
          </div>
          <div
            className="relative p-2"
            onMouseOver={handleFocusGenres}
            onMouseLeave={() => setFocusGenres(false)}
          >
            <Link href={"#"} className="header-link">
              Generos
            </Link>
            {focusGenres && (
              <div
                className="absolute bg-gray-200 py-4 w-[40rem] -left-64 gap-2 grid grid-rows-3 grid-cols-4 justify-center items-center rounded-lg z-50"
                style={{ top: "calc(100%)" }}
                onMouseLeave={() => setFocusTv(false)}
              >
                {genres.map((genre) => (
                  <Link
                    key={genre.id}
                    href={`/movie/genre/${genre.id}?name=${genre.name}`}
                    className="p-2 text-center font-semibold hover:bg-white text-sm px-6"
                  >
                    {genre.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
      <nav className="mr-10 ">
        <div className="hidden md:inline-block ">
          <InputHeader
            className={
              "bg-gray-100 border p-1 outline-none font-semibold focus:border-green-400 rounded-md w-80"
            }
          />
        </div>
        <div className="block md:hidden">
          <button
            type="button"
            className="rounded bg-red-600 p-2 text-white transition hover:text-gray-400"
            onClick={() => setMenuActive(!menuActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      <HeaderMenuHidden {...{ menuActive, setMenuActive }} />
    </header>
  );
};

export default Headers;
