import Link from "next/link";
import React from "react";
import Eye from "./icons/Eye";

const LinkAside = ({ item }) => {
  return (
    <Link
      href={`/${item?.first_air_date ? "series" : "movie"}/${item.id}`}
      className="flex items-center py-2 px-3 justify-between hover:text-gray-500 font-semibold"
    >
      <div className="flex gap-4 items-center">
        <span className="border border-gray-500 rounded-full w-5 h-5 flex items-center justify-center">
          <Eye className="w-3 h-3" />
        </span>
        <span className="w-80 line-clamp-1 pr-3">
          {item?.first_air_date ? item.name : item.title}{" "}
        </span>
      </div>
      {item?.first_air_date ? (
        <span className="text-sm bg-red-400 text-white rounded-lg px-2">
          serie
        </span>
      ) : (
        <span className="text-sm bg-blue-400 text-white rounded-lg px-2">
          pelicula
        </span>
      )}
    </Link>
  );
};

export default LinkAside;
