export function carouselItemsRoute(text) {
  let route = "";
  if (text.toLowerCase().includes("peliculas populares")) {
    route = "/movie";
  } else if (text.toLowerCase().includes("series")) {
    route = "/series";
  } else {
    route = "/movie/top-rated";
  }
  return route;
}

export function carouselItemsImage(text) {
  let imagen = text.toLowerCase().includes("series")
    ? "fondo-series-edit.jpg"
    : "fondo-movie.jpg";

  return imagen;
}
