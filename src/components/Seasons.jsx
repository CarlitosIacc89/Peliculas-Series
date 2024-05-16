"use client";
import Image from "next/image";
import React from "react";
import Star from "./icons/Star";
import date from "@/helpers/date";
import { imagenBaseUrl } from "@/helpers/options";

const Seasons = ({ item }) => {
  return (
    <div className="space-y-4">
      <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 mb-6">
          <h2 className="font-medium text-2xl hover:text-slate-400">
            Ver todas las temporadas
          </h2>

          <span className="relative size-5 shrink-0 hover:text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 opacity-100 group-open:opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 opacity-0 group-open:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </summary>

        {item &&
          item.seasons.map((serie) => (
            <div key={serie.id}>
              <div className="flex flex-col md:flex-row border w-[98%] mx-auto shadow-xl rounded-2xl mb-6 gap-4">
                <div className="w-40 mx-auto p-2 md:p-0">
                  <Image
                    src={`${imagenBaseUrl}${serie.poster_path}`}
                    width={550}
                    height={550}
                    alt="imagen"
                    className="w-full size-32 object-cover mx-auto rounded-lg md:rounded-none"
                  />
                </div>
                <div className="grow flex flex-col gap-2 justify-center items-center  md:items-start">
                  <h2 className="text-2xl">Temporada {serie.season_number}</h2>
                  <p className="flex gap-3 text-sm font-medium text-slate-500 mb-2">
                    <span className="flex items-center bg-gray-900 text-white px-1 rounded-md">
                      <Star className="w-3 h-3" />
                      {serie.vote_average > 0 ? serie.vote_average * 10 : 0}%
                    </span>
                    <span>
                      {serie.air_date
                        ? serie.air_date.slice(0, 4)
                        : "Sin datos"}
                    </span>
                    <span>{serie.episode_count} episodios</span>
                  </p>
                  <div className="flex  gap-4 font-medium pb-2">
                    <p className="text-center">
                      Fecha de Emision:{" "}
                      <span className="text-slate-600">
                        {serie.air_date ? date(serie.air_date) : "Sin datos"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </details>
    </div>
  );
};

export default Seasons;
