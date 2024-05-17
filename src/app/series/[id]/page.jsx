import React from "react";
import DescriptionItem from "@/components/DescriptionItem";
import MovieCast from "@/components/MovieCast";

import { BASE_URL_SERIE, imagenBaseUrl, options } from "@/helpers/options";
import Image from "next/image";
import DataSeries from "@/components/DataSeries";
import { API_KEY } from "@/helpers/key";

async function getData(id) {
  try {
    const urls = {
      serie: `${BASE_URL_SERIE}/${id}?api_key=${API_KEY}&append_to_response=videos`,
      serieCredits: `${BASE_URL_SERIE}/${id}?api_key=${API_KEY}&append_to_response=credits&language=es-ES`,
      serieWatch: `${BASE_URL_SERIE}/${id}/watch/providers?api_key=${API_KEY}&language=es-ES`,
      certificationSerie: `${BASE_URL_SERIE}/${id}/content_ratings?api_key=${API_KEY}`,
    };

    const [movieRes, movieCreditsRes, movieWatchRes, certificationRes] =
      await Promise.all([
        fetch(urls.serie, options),
        fetch(urls.serieCredits, options),
        fetch(urls.serieWatch, options),
        fetch(urls.certificationSerie, options),
      ]);

    if (
      !movieRes.ok ||
      !movieCreditsRes.ok ||
      !movieWatchRes.ok ||
      !certificationRes.ok
    ) {
      throw new Error(
        "Hubo un error al cargar las series. Prueba con recargar la pagina"
      );
    }

    const movieData = await movieRes.json(); //DATOS DE LA PELICULA
    const movieCreditsData = await movieCreditsRes.json(); //CREDITOS DE LA PELICULA
    const movieWatchData = await movieWatchRes.json(); //EN DONDE MIRAR LA PELICULA
    const certificationData = await certificationRes.json(); //CERTIFICACION DE LA SERIE

    const ar = Object.entries(movieWatchData?.results).filter(
      ([key, value]) => key === "AR"
    ); //FILTRO PARA ARGENTINA

    const watch = ar.length > 0 ? ar[0][1] : null;

    const movieComplete = { ...movieData, ...movieCreditsData, watch };
    const trailers = movieComplete?.videos?.results?.filter(
      (video) => video.type === "Trailer"
    );

    //Filtro por las certificaciones de Argentina
    const certificationAr = certificationData?.results?.filter(
      (cerMovie) => cerMovie.iso_3166_1 === "AR"
    );
    //Filtro por las certificaciones de Usa
    const certificationUs = certificationData?.results?.filter(
      (cerMovie) => cerMovie.iso_3166_1 === "US"
    );

    //Uno los dos array de las certificaciones de cada pais
    const certification = [...certificationAr, ...certificationUs];

    const movieCompleteWithTrailers = {
      ...movieComplete,
      trailers,
      certification,
    };

    return movieCompleteWithTrailers;
  } catch (error) {
    const errorText =
      error.message || "Hubo un error. Prueba con cargar la pagina nuevamente";
    return errorText;
  }
}

const PageSerieId = async ({ params }) => {
  const data = await getData(params.id);

  const backGround = imagenBaseUrl + data.backdrop_path;

  return (
    <>
      <section
        className={`relative  bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url(${backGround})`,
        }}
      >
        <div className="absolute z-10 inset-0 bg-black/60 "></div>
        <div className="relative flex flex-col sm:flex-row z-20 py-8 px-11 gap-8">
          <div className="min-w-[30%]">
            <div>
              <Image
                src={`${imagenBaseUrl}${data?.poster_path}`}
                width={300}
                height={450}
                alt="poster"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
          <DescriptionItem item={data} />
        </div>
      </section>
      <DataSeries item={data} />
      <MovieCast {...{ data }} />
    </>
  );
};

export default PageSerieId;
