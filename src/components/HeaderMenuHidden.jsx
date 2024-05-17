"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import InputHeader from "./InputHeader";
import useGenres from "./useGenres";
import { useRouter } from "next/navigation";

const HeaderMenuHidden = ({ menuActive, setMenuActive }) => {
  const [genreId, setGenreId] = useState(null);
  const genres = useGenres();
  const route = useRouter();

  useEffect(() => {
    if (genreId) {
      route.push(`/movie/genre/${genreId.id}?name=${genreId.name}`);
      setMenuActive(!menuActive);
    }
  }, [genreId, route]);
  return (
    <nav className="z-50">
      <ul
        className={`absolute top-28  right-2 flex  flex-col items-center gap-6 p-14  w-[95%] sm:w-80 py-8 rounded-xl bg-gray-900 list-menu-hidden ${
          menuActive
            ? "opacity-100 visible transition duration-300"
            : "opacity-0 invisible"
        }`}
      >
        <li>
          <InputHeader
            {...{ menuActive, setMenuActive }}
            className={
              "bg-gray-100 border p-2 text-black font-semibold rounded-md w-64 outline-none focus:border-green-400"
            }
          />
        </li>
        <li>
          <Link href={"/"} onClick={() => setMenuActive(!menuActive)}>
            Inicio
          </Link>
        </li>
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="group flex items-center justify-between rounded-lg px-4 py-2 text-white ">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H3zM9 7a1 1 0 011-1h5a1 1 0 110 2H7a1 1 0 01-1-1zm-5 5a1 1 0 100 2h5a1 1 0 100-2H4zm0 4a1 1 0 100 2h5a1 1 0 100-2H4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="text-sm font-medium"> Peliculas </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <Link
                  href={"/movie"}
                  onClick={() => setMenuActive(!menuActive)}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-white"
                >
                  Populares
                </Link>
              </li>

              <li>
                <Link
                  href={"/movie/now-playing"}
                  onClick={() => setMenuActive(!menuActive)}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-white"
                >
                  Tendencias
                </Link>
              </li>
              <li>
                <Link
                  href={"/movie/top-rated"}
                  onClick={() => setMenuActive(!menuActive)}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-white"
                >
                  Mejores calificadas
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="group flex items-center justify-between rounded-lg px-4 py-2 text-white ">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zM2 5a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1zm13 9a2 2 0 01-2 2H7a2 2 0 01-2-2v-1h10v1zm2-7a1 1 0 00-1-1H4a1 1 0 00-1 1v1h14V7z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="text-sm font-medium"> Series </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <Link
                  href={"/series"}
                  onClick={() => setMenuActive(!menuActive)}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-white"
                >
                  Populares
                </Link>
              </li>

              <li>
                <Link
                  href={"/series/airing-today"}
                  onClick={() => setMenuActive(!menuActive)}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-white"
                >
                  En emision hoy
                </Link>
              </li>
              <li>
                <Link
                  href={"/series/top-rated"}
                  onClick={() => setMenuActive(!menuActive)}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-white"
                >
                  Mejores calificadas
                </Link>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <select
            className="w-40 m-0"
            defaultValue={""}
            onChange={(e) =>
              setGenreId({
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].textContent,
              })
            }
          >
            <option value={""} disabled>
              Genero
            </option>
            {genres?.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenuHidden;
