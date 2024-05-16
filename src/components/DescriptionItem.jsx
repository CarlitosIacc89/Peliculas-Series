"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Play from "./icons/Play";
import CircularProgress from "./CircularProgress";
import { imagenBaseUrl } from "@/helpers/options";
import { usePathname } from "next/navigation";
import certificationMovie from "@/helpers/certificationMovie";
import certificationSerie from "@/helpers/certificationSerie";
import Trailer from "./Trailer";

const DescriptionItem = ({ item }) => {
  const [trailer, setTrailer] = useState(false);
  const [serie, setSerie] = useState(false);
  const [cer, setCer] = useState(null);
  const url = usePathname();

  useEffect(() => {
    if (url.includes("series")) {
      setSerie(true);
      certificationSerie(item.certification).then((res) => setCer(res));
    } else {
      setSerie(false);
      certificationMovie(item.certification).then((res) => setCer(res));
    }
  }, [url, serie, item]);

  const genres = item?.genres.map((genre) => genre.name);
  const genreStrings = genres.join(", ");
  return (
    <div className=" flex flex-col gap-2 md:gap-4 text-white text-sm md:text-xl font-bold">
      <div>
        <h2 className="text-2xl md:text-4xl">
          {serie ? item?.name : item?.title}
          {!url.includes("series") && (
            <span className="font-normal">
              {" "}
              ({item?.release_date.slice(0, 4)})
            </span>
          )}
        </h2>
      </div>
      <div className="space-x-4 mt-2">
        <span className="border border-white p-1 px-2">
          {!serie ? cer?.certification : cer?.rating || "Sin datos"}
        </span>

        <span>
          {url.includes("series")
            ? item?.first_air_date.slice(0, 4)
            : item?.release_date.slice(0, 4)}
        </span>

        <span>| {genreStrings}</span>
      </div>
      <div>
        <div className="relative mt-3 md:mt-6 flex items-center">
          <CircularProgress
            percentage={item?.vote_average}
            className=" flex items-center justify-center"
          />
          <div className="px-3">Puntuacion de los usuarios</div>
        </div>
      </div>
      <div className="relative" onClick={() => setTrailer(true)}>
        <p className="flex h-12 gap-2 items-center hover:text-gray-300 cursor-pointer">
          <Play />
          <span>Reproducir trailer</span>
        </p>
        {trailer && <Trailer {...{ item, setTrailer }} />}
      </div>
      <div className="">
        <p className="text-xl md:text-2xl py-2">Resumen</p>
        <p className="font-semibold">
          {item?.overview.length > 0 ? (
            item?.overview
          ) : (
            <span className="text-sm">Resumen no disponible</span>
          )}
        </p>
      </div>
      <h2>Disponible en: </h2>
      <div className="flex gap-4">
        {item?.watch && item?.watch?.flatrate ? (
          item?.watch?.flatrate.map((companie) => (
            <div key={companie.provider_id}>
              <div className=" inline-flex items-center max-w-14 h-auto  justify-center  rounded-xl">
                <Image
                  src={`${imagenBaseUrl}${companie?.logo_path}`}
                  width={100}
                  height={100}
                  alt="logo"
                  className="w-full rounded-lg mx-auto"
                />
              </div>
            </div>
          ))
        ) : (
          <span className="text-sm">No hay proveedores disponibles</span>
        )}
      </div>
    </div>
  );
};

export default DescriptionItem;
