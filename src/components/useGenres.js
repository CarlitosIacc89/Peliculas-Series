import { useEffect, useState } from "react";

const useGenres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=f662fb1cfcfa243c47505204f2a97e5e&language=es"
        );
        if (!res.ok) {
          throw new Error("Hubo un error al obtener los generos");
        }
        const data = await res.json();
        setGenres(data.genres);
      } catch (error) {
        setGenres(error.message || "Hubo un error al cargar los generos");
      }
    };
    fetchGenres();
  }, []);
  return genres;
};
export default useGenres;
