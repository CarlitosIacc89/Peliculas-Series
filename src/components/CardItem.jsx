"use client";
import { imagenBaseUrl } from "@/helpers/options";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import CircularProgress from "./CircularProgress";
import Spinner from "./icons/Spinner";

const CardItem = ({ item }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Link
      href={`/${!item?.first_air_date ? "movie" : "series"}/${item.id}`}
      className="inline-block w-36 md:w-48 max-w-48 mx-auto"
    >
      <div className="relative h-44 md:h-72 w-32 md:w-auto mx-auto">
        <div className="group h-full">
          {loading && (
            <p className="absolute inset-0 flex items-center justify-center">
              <Spinner color="text-black" />
            </p>
          )}
          <Image
            src={`${
              item.poster_path
                ? imagenBaseUrl + item.poster_path
                : "/sin-imagen.jpg"
            }`}
            width={250}
            height={350}
            alt="imagen"
            className="w-full h-full rounded-lg transition-transform group-hover:transform group-hover:-translate-y-4 object-cover"
            onLoadingComplete={() => setLoading(false)}
          />

          <div
            className={`absolute ${
              item?.first_air_date ? "bg-rose-500" : "bg-blue-500"
            }  text-white font-semibold text-sm p-1 top-0 left-0 rounded-tl-lg rounded-br-lg transition-all group-hover:-translate-y-4`}
          >
            {item.first_air_date ? "serie" : "movie"}
          </div>
        </div>
        <CircularProgress percentage={item.vote_average} />
      </div>
      <div className="text-center mt-9 w-full">
        <div className="text-wrap font-bold line-clamp-1 hover:text-teal-500 ">
          {item.title || item.name}
        </div>
        <div className="text-sm text-slate-800 font-semibold">
          {item?.release_date?.slice(0, 4) || item?.first_air_date?.slice(0, 4)}
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
