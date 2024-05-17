"use client";
import { imagenBaseUrl } from "@/helpers/options";
import Image from "next/image";
import React from "react";
import Star from "./icons/Star";
import date from "@/helpers/date";
import Seasons from "./Seasons";

const DataSeries = ({ item }) => {
  return (
    <section className="bg-white w-[95%] mx-auto mt-8 p-4">
      <h2 className="text-2xl p-3">Ultima temporada</h2>
      <div className="flex flex-col md:flex-row border w-[98%] mx-auto shadow-xl rounded-2xl mb-6 gap-4">
        <div className="w-40 mx-auto p-2 md:p-0">
          <Image
            src={
              item.last_episode_to_air.still_path
                ? `${imagenBaseUrl}${item.last_episode_to_air.still_path}`
                : "/sin-imagen.jpg"
            }
            width={550}
            height={550}
            alt="imagen"
            className="w-full size-32 object-cover mx-auto rounded-lg md:rounded-none"
          />
        </div>
        <div className="grow flex flex-col gap-2 justify-center items-center  md:items-start">
          <h2 className="text-2xl">
            Temporada {item.last_episode_to_air.season_number}
          </h2>
          <p className="flex gap-3 text-sm font-medium text-slate-500 mb-2">
            <span className="flex items-center bg-gray-900 text-white px-1 rounded-md">
              <Star className="w-3 h-3" />
              {item.last_episode_to_air.vote_average * 10}%
            </span>
            <span>{item.last_air_date.slice(0, 4)}</span>
            <span>{item.last_episode_to_air.episode_number} episodios</span>
          </p>
          <div className="flex  gap-4 font-medium pb-2">
            <p className="text-center">
              Fecha de inicio:{" "}
              <span className="text-slate-600">
                {item.seasons[item.seasons.length - 1].air_date
                  ? date(item.seasons[item.seasons.length - 1].air_date)
                  : "Sin datos"}
              </span>
            </p>
            <p className="text-center">
              Fecha final:{" "}
              <span className="text-slate-600">
                {date(item.last_episode_to_air.air_date)}
              </span>
            </p>
          </div>
        </div>
      </div>
      <Seasons {...{ item }} />
    </section>
  );
};

export default DataSeries;
