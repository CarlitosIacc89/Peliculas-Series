"use client";
import ItemsSection from "@/components/ItemsSection";
import Pagination from "@/components/Pagination";
import Spinner from "@/components/icons/Spinner";
import { API_KEY } from "@/helpers/key";
import { options } from "@/helpers/options";
import React, { useEffect, useState } from "react";

const PageQuery = ({ params }) => {
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const urlEncodeTitle = params.query;
  const decodeTitle = decodeURIComponent(urlEncodeTitle);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const apiMovies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.query}&include_adult=false&language=es-ES&page=${page}`;
      const apiSeries = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${params.query}&include_adult=false&language=es-ES&page=${page}`;

      const fetchMovies = fetch(apiMovies, options);
      const fetchSeries = fetch(apiSeries, options);

      const [moviesRes, seriesRes] = await Promise.all([
        fetchMovies,
        fetchSeries,
      ]);
      if (!moviesRes.ok || !seriesRes.ok) {
        setLoading(false);
        throw new Error(
          "hubo un error al cargar las peliculas y series. Intente recargar la pagina"
        );
      }
      const dataMovies = await moviesRes.json();
      const dataSeries = await seriesRes.json();

      const dataAll = {
        page: dataMovies.page,
        results: [...dataMovies.results, ...dataSeries.results],
        total_pages: dataMovies.total_pages + dataSeries.total_pages,
        total_results: dataMovies.total_results + dataSeries.total_results,
      };
      setLoading(false);
      return dataAll;
    }
    getData().then((res) => setSearch(res));
  }, [params, page]);

  return (
    <section
      className="mt-8 min-h-screen bg-cover"
      style={{ backgroundImage: "url(/search-page.jpg)" }}
    >
      {loading && (
        <div className="inset-0 fixed bg-black/80 flex items-center justify-center z-10">
          <Spinner />
        </div>
      )}
      <h2 className="font-bold px-4 py-2">
        Resultados para la busqueda de{" "}
        <mark className="p-1 rounded-md">{decodeTitle}</mark>
      </h2>
      {search && <ItemsSection items={search} />}
      {search && <Pagination page={page} setPage={setPage} data={search} />}
    </section>
  );
};

export default PageQuery;
