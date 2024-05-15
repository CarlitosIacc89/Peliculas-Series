import React from "react";
import Close from "./icons/Close";

const Trailer = ({ item, setTrailer }) => {
  return (
    <div className="inset-0 fixed bg-black/80 flex items-center justify-center z-10">
      <div
        className="absolute top-5 right-4 md:right-20 text-white rounded-full border border-white cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setTrailer(false);
        }}
      >
        <Close />
      </div>
      <div className="flex flex-col w-[90%] h-[50%] sm:h-[80%] rounded-lg object-cover justify-center  items-center">
        {item.trailers.length > 0 || item.videos.results.length > 0 ? (
          <iframe
            src={`https://www.youtube.com/embed/${
              item.trailers.length > 0
                ? item.trailers[0].key
                : item.videos.results[0].key
            }?si=70Gy-LFVUX5afDuX`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full mt-2"
          ></iframe>
        ) : (
          <span>Trailer no disponible</span>
        )}
      </div>
    </div>
  );
};

export default Trailer;
