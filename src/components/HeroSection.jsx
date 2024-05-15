import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-[url(/portada-alien.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/55 sm:bg-transparent sm:from-white/75 sm:to-white/10 ltr:sm:bg-gradient-to-l sm:bg-gradient-to-r"></div>

      <div className="relative my-auto content-center mx-auto max-w-screen-xl px-4 py-8 lg:flex h-96 lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-2xl  font-extrabold sm:text-4xl">
            Bienvenido a la pagina de series y peliculas
            <strong className="block font-extrabold">
              {" "}
              <span className="text-red-600">Full</span>Movies.{" "}
            </strong>
          </h1>

          <p className="mt-4 text-center w-full font-bold ">
            Aqui encontraras toda la informacion de tus peliculas y series
            favoritas. Estrenos, futuros estrenos, populares, etc.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
            <Link
              href="/movie"
              className="block w-auto rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 "
            >
              Ir a peliculas
            </Link>

            <Link
              href="/series"
              className="block w-auto rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:text-red-400 focus:outline-none focus:ring active:text-rose-500 "
            >
              Ir a series
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
