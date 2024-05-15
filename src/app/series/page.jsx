"use client";
import ItemsSection from "@/components/ItemsSection";
import Pagination from "@/components/Pagination";
import Spinner from "@/components/icons/Spinner";
import { options } from "@/helpers/options";
import { titleSectionSerie } from "@/helpers/titleSectionSerie";
import React, { useEffect, useState } from "react";

const PageSeries = ({ api = "popular" }) => {
  const [data, setData] = useState(null);
  const [params, setParams] = useState(api);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [filterItems, setFilterItems] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setText(titleSectionSerie(params));

    const getData = async (page) => {
      try {
        setLoader(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${params}?language=en-US&page=${page}`,
          options
        );
        if (!res.ok) {
          throw new Error("Hubio un error al cargar las series");
        }
        const data = await res.json();
        setLoader(false);
        return setData(data);
      } catch (error) {
        const err =
          error.message ||
          "Hubo un error al cargar las series. Prueba con recargar la pagina";
        setLoader(false);
        return err;
      }
    };
    getData(page);
  }, [page, filterItems, params]);

  return (
    <section
      className="mx-auto mt-8 py-6 rounded-md min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/fondo-series-edit.jpg)" }}
    >
      {loader && (
        <div className="inset-0 fixed bg-black/80 flex items-center justify-center z-10">
          <Spinner />
        </div>
      )}
      <h1 className="text-3xl font-medium p-2 ml-2 mb-3 text-center md:text-start">
        {text}
      </h1>
      {data && <ItemsSection items={data} setFilterItems={setFilterItems} />}
      <Pagination {...{ page, setPage, data }} />
    </section>
  );
};

export default PageSeries;
