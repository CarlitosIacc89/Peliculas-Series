"use client";

import React, { useEffect, useState } from "react";

import LinkAside from "./LinkAside";

const SectionAside = ({ items }) => {
  const [links, setLinks] = useState(null);
  useEffect(() => {
    setLinks(items);
  }, [items]);
  return (
    <aside className="hidden h-full xl:block bg-white max-w-md rounded-md shadow-xl shadow-black pb-4">
      <div>
        <h2 className="text-2xl text-center px-2 py-3 font-bold">
          {links && links[0].first_air_date
            ? "Series  reproduciéndose ahora"
            : "Peliculas  reproduciéndose ahora"}
        </h2>
      </div>
      {links && links.map((item) => <LinkAside key={item.id} item={item} />)}
    </aside>
  );
};

export default SectionAside;
