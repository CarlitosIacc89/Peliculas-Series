"use client";

import { imagenBaseUrl } from "@/helpers/options";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Play from "./icons/Play";
import Close from "./icons/Close";

const CarouselTrailers = ({ items }) => {
  const [trailer, setTrailer] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState(null);

  const [backGround, setBackGround] = useState(
    `${imagenBaseUrl}${items && items[0].image}`
  );

  return (
    <div
      className={`relative h-full md:h-96 mt-20 flex flex-col justify-center py-4 w-full mx-auto overflow-x-auto bg-cover bg-center bg-no-repeat custom-scrollbar`}
      style={{
        backgroundImage: `url(${backGround})`,
      }}
    >
      {trailer && (
        <div className="inset-0 fixed bg-black/80 flex items-center justify-center z-10">
          <div
            className="absolute top-8 right-7 md:right-20 text-white rounded-full border border-white cursor-pointer"
            onClick={() => {
              setTrailer(false);
              setMovieTrailer(null);
            }}
          >
            <Close />
          </div>
          <div className="flex flex-col w-[90%] h-[50%] md:h-[80%] rounded-lg object-cover  items-center">
            <iframe
              src={`https://www.youtube.com/embed/${
                movieTrailer && movieTrailer?.trailers[0].key
              }?si=70Gy-LFVUX5afDuX`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            ;
          </div>
        </div>
      )}
      <div className="absolute w-[3000px] md:w-[4250px] overflow-x-auto top-0 left-0 right-0 bottom-0 bg-blue-800/30"></div>
      <div className="sticky left-0 top-0 pl-5 mb-4">
        <span className="text-white mb-4 font-bold text-base md:text-2xl">
          Trailers de proximos estrenos
        </span>
      </div>
      <div className="whitespace-nowrap w-ful">
        {items &&
          items.map((item) => (
            <div
              key={item.id}
              className="relative inline-block w-64 md:w-96 max-w-96 mx-5"
              onMouseOver={() => setBackGround(`${imagenBaseUrl}${item.image}`)}
            >
              <div className="relative transform hover:scale-105 transition duration-200 cursor-pointer">
                <Image
                  width={300}
                  height={168}
                  src={`${imagenBaseUrl}${item.image}`}
                  alt="imagen"
                  className="w-full rounded-xl "
                />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  onClick={() => {
                    setMovieTrailer(item);
                    setTrailer(true);
                  }}
                >
                  <Play className="w-20 h-20" />
                </div>
              </div>
              <div className="text-center text-wrap mt-2 font-bold md:text-xl line-clamp-1 mx-auto text-white">
                {item.title}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarouselTrailers;
