"use client";
import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import Link from "next/link";
import {
  carouselItemsImage,
  carouselItemsRoute,
} from "@/helpers/carouselItems";

const CarouselItems = ({ items, text }) => {
  const [cards, setCards] = useState(null);
  const [image, setImage] = useState(null);
  const [link, setLink] = useState("#");
  useEffect(() => {
    setLink(carouselItemsRoute(text));
    setCards(items);
    setImage(carouselItemsImage(text));
  }, [text, image, items]);

  return (
    <div
      className={`relative h-full flex flex-col px-2 py-4 w-full mx-auto overflow-x-auto  bg-cover bg-center bg-no-repeat custom-scrollbar rounded-lg`}
      style={{ backgroundImage: `url(/${image && image})` }}
    >
      <div className="sticky left-0 pl-5 mb-4">
        <Link
          href={link}
          className="text-xl md:text-3xl font-semibold hover:text-blue-600 "
        >
          {text} <span className="text-sm md:text-base">(Ver todos)</span>
        </Link>
      </div>
      <div className="whitespace-nowrap w-full space-x-4">
        {cards && cards.map((item) => <CardItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default CarouselItems;
