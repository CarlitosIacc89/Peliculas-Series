import React from "react";
import CardItem from "./CardItem";

const ItemsSection = ({ items }) => {
  return (
    <>
      <div className="p-4 mb-3">
        <p className="text-base font-medium text-slate-500 text-center pb-6">
          {" "}
          Se muestran {items?.results?.length} elementos de{" "}
          {items?.total_results?.toLocaleString("AR")}
        </p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-6  lg:grid-cols-5  md:grid-cols-4 sm:grid-cols-3 gap-y-8 mb-10  min-h-screen ">
        {items?.results?.length > 0 ? (
          items?.results?.map((item) => <CardItem key={item.id} item={item} />)
        ) : (
          <p className=" w-52 h-10 mx-auto p-2 rounded-md font-bold text-sm bg-red-400 text-white justify-center text-center col-span-6">
            No hay resultados
          </p>
        )}
      </div>
    </>
  );
};
export default ItemsSection;
