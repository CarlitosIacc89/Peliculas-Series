import { imagenBaseUrl } from "@/helpers/options";
import Image from "next/image";
import React from "react";

const MovieCast = ({ data }) => {
  return (
    <>
      <div
        className={`relative h-full flex flex-col py-4 w-[95%] mt-8 mx-auto overflow-x-auto bg-white bg-cover bg-center bg-no-repeat custom-scrollbar rounded-lg`}
      >
        <div className="sticky left-0 pl-5 mb-4">
          <span className="text-xl md:text-2xl font-semibold hover:text-blue-600 ">
            Actores principales
          </span>
        </div>
        <div className="whitespace-nowrap w-full">
          {data.credits.cast.map((actor) => (
            <div
              key={actor.id}
              className="inline-block w-36 md:w-48 max-w-48  mx-5"
            >
              <div className="w-full">
                <Image
                  src={
                    actor.profile_path
                      ? `${imagenBaseUrl}${actor.profile_path}`
                      : "/no-profile.webp"
                  }
                  width={500}
                  height={500}
                  alt="profile"
                  className="w-full h-52 md:h-60 object-cover"
                />
              </div>
              <div className="space-y-2 p-2">
                <p className="font-extrabold text-wrap line-clamp-1">
                  {actor.original_name}
                </p>
                <p className="font-semibold text-sm text-slate-600 line-clamp-1 text-wrap">
                  {actor.character}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <a
          href="#"
          className="relative w-96 block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-white mt-8"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div className="flex justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-2xl">
                Director/a
              </h3>

              <p className="mt-1 font-bold text-gray-600">
                {data.credits.crew.length > 0
                  ? data.credits.crew[0].original_name
                  : "Sin datos"}
              </p>
            </div>

            <div className=" ">
              <Image
                src={
                  data.credits.crew.length > 0
                    ? data.credits.crew[0].profile_path
                      ? `${imagenBaseUrl}${data.credits.crew[0].profile_path}`
                      : "/no-profile.webp"
                    : "/no-profile.webp"
                }
                width={50}
                height={50}
                alt="profile"
                className="size-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default MovieCast;
