import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-8">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <Link
            className="inline-block rounded-full bg-red-600 p-2 text-white shadow transition hover:bg-red-500 sm:p-3 lg:p-4"
            href="#top"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <Link
                href={"#"}
                className="text-3xl font-extrabold text-slate-100"
              >
                <span className="text-red-600">Full</span>Movies
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center text-2xl font-bold leading-relaxed text-white lg:text-left">
              ¡¡Gracias por estar aqui!! 😉​
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <Link
                className="text-white transition hover:text-gray-700/75 font-bold"
                href="/movie"
              >
                {" "}
                Peliculas{" "}
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-gray-700/75 font-bold"
                href="/series"
              >
                {" "}
                Series{" "}
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-slate-200 lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
