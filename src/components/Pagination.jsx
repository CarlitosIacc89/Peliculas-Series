"use client";
import React from "react";

const Pagination = ({ page, setPage, data }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="flex items-center">
        <button
          disabled={page <= 1 ? true : false}
          type="button"
          onClick={() => setPage(page - 1)}
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-gray-300 text-gray-900 rtl:rotate-180 disabled:bg-slate-500"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div>
          <span className=" rounded border border-gray-400 p-1 px-3 bg-blue-400 text-white text-center text-sm font-medium [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none">
            {page}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-gray-300 text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="text-sm text-slate-600 mt-3">
        Pagina {page} de {data?.total_pages.toLocaleString("AR")}{" "}
      </p>
    </div>
  );
};

export default Pagination;
