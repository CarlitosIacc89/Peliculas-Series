"use client";
import AlertGenres from "@/components/AlertGenres";
import ItemsSection from "@/components/ItemsSection";
import Pagination from "@/components/Pagination";
import Spinner from "@/components/icons/Spinner";
import { API_KEY } from "@/helpers/key";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PageGenreId = ({ params }) => {
  const [items, setItems] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const path = useSearchParams();
  const genre = path.get("name");

  useEffect(() => {
    setLoading(true);
    async function getData(id, page) {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}&page=${page}`
        );
        if (!res.ok) {
          setLoading(false);
          throw new Error("Hubo un error. Prueba con recargar la pagina");
        }
        const data = await res.json();
        setLoading(false);
        return setItems(data);
      } catch (error) {
        const err = error.message;
        setLoading(false);
        return setError(err);
      }
    }
    getData(params.id, page);
  }, [params, page]);
  return (
    <section
      className="mx-auto mt-8 py-6 rounded-md min-h-screen bg-cover"
      style={{ backgroundImage: "url(/font-genres-3.avif)" }}
    >
      {loading && (
        <div className="inset-0 fixed bg-black/80 flex items-center justify-center z-10">
          <Spinner color="text-white" />
        </div>
      )}
      <AlertGenres />
      <h2 className="text-xl font-medium text-center">
        Genero:{" "}
        <span className="bg-blue-800 rounded-lg text-white p-1 px-2 ">
          {genre}
        </span>
      </h2>
      {error ? (
        <p className="text-red-600 font-semibold text-center">{error}</p>
      ) : (
        <>
          {items && <ItemsSection items={items} />}
          <Pagination {...{ page, setPage }} data={items} />
        </>
      )}
    </section>
  );
};

export default PageGenreId;
