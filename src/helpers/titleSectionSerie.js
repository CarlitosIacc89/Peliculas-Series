export function titleSectionSerie(params) {
  let title = "";
  if (params.toLocaleLowerCase().includes("airing_today")) {
    title = "En emision hoy";
  } else if (params.toLocaleLowerCase().includes("top")) {
    title = "Series top";
  } else if (params.toLocaleLowerCase().includes("on_the_air")) {
    title = "A emitir en el transcurso de 7 dias";
  } else {
    title = "Series populares";
  }

  return title;
}

export function titleSectionMovie(params) {
  let title = "";
  if (params.toLocaleLowerCase().includes("top")) {
    title = "Peliculas top";
  } else if (params.toLocaleLowerCase().includes("series")) {
    title = "Series populares";
  } else if (params.toLocaleLowerCase().includes("now")) {
    title = "Tendencias ahora";
  } else {
    title = "Peliculas populares";
  }
  return title;
}
