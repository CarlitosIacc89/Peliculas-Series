"use client";
import ItemsSection from "@/components/ItemsSection";
import Pagination from "@/components/Pagination";
import Spinner from "@/components/icons/Spinner";
import { options } from "@/helpers/options";
import { titleSectionMovie } from "@/helpers/titleSectionSerie";
import React, { Suspense, useEffect, useState } from "react";

const PageMovies = ({ api = "popular" }) => {
  const [data, setData] = useState(null);
  const [params, setParams] = useState(api);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setText(titleSectionMovie(params));
    const getData = async (page) => {
      try {
        setLoader(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${params}?language=es-ES&page=${page}`,
          options
        );
        if (!res.ok) {
          throw new Error("Hubio un error al cargar las peliculas");
        }
        const data = await res.json();
        setLoader(false);
        return setData(data);
      } catch (error) {
        const err =
          error.message ||
          "Hubo un error al cargar las peliculas. Prueba con recargar la pagina";
        setLoader(false);
        return setError(err);
      }
    };

    getData(page);
  }, [page, params]);

  return (
    <section
      className="mx-auto mt-8 py-6 rounded-md min-h-screen bg-contain"
      style={{ backgroundImage: "url(/fondo-movie.jpg)" }}
    >
      {loader && (
        <div className="inset-0 fixed bg-black/80 flex items-center justify-center z-10">
          <Spinner color="text-white" />
        </div>
      )}
      <h1 className="text-3xl font-medium p-2 ml-2 mb-3 text-center md:text-start">
        {text}
      </h1>
      {error ? (
        <p className="text-red-600 font-semibold text-center">{error}</p>
      ) : (
        <>
          {data && <ItemsSection items={data} />}
          <Pagination {...{ page, setPage, data }} />
        </>
      )}
    </section>
  );
};

export default PageMovies;
