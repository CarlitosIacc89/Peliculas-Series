import CarouselItems from "@/components/CarouselItems";
import CarouselTrailers from "@/components/CarouselTrailers";

import HeroSection from "@/components/HeroSection";

import SectionAside from "@/components/SectionAside";
import { BASE_URL_MOVIE, BASE_URL_SERIE, options } from "@/helpers/options";

async function getData() {
  try {
    const urls = {
      nowPlayingMovies: `${BASE_URL_MOVIE}/now_playing?language=es-ES&page=1`,
      popularMovies: `${BASE_URL_MOVIE}/popular?language=es-ES&page=1`,
      topRatedMovies: `${BASE_URL_MOVIE}/top_rated?language=es-ES&page=1`,
      upcomingMovies: `${BASE_URL_MOVIE}/upcoming?language=es-ES&page=1`,
      popularSeries: `${BASE_URL_SERIE}/popular?language=es-ES&page=1`,
      airingTodaySeries: `${BASE_URL_SERIE}/airing_today?language=es-ES&page=1`,
    };

    const [
      nowPlayingMoviesRes,
      topRatedMoviesRes,
      popularMoviesRes,
      upcomingMoviesRes,
      popularSeriesRes,
      airingTodaySeriesRes,
    ] = await Promise.all([
      fetch(urls.nowPlayingMovies, options),
      fetch(urls.topRatedMovies, options),
      fetch(urls.popularMovies, options),
      fetch(urls.upcomingMovies, options),
      fetch(urls.popularSeries, options),
      fetch(urls.airingTodaySeries, options),
    ]);

    const nowPlayingMoviesData = await nowPlayingMoviesRes.json();
    const topRatedMoviesData = await topRatedMoviesRes.json();
    const popularMoviesData = await popularMoviesRes.json();
    const upcomingMoviesData = await upcomingMoviesRes.json();
    const popularSeriesData = await popularSeriesRes.json();
    const airingTodaySeriesData = await airingTodaySeriesRes.json();

    const idMoviesUpcoming = [];
    upcomingMoviesData.results.slice(0, 10).forEach((mov) => {
      idMoviesUpcoming.push(mov.id);
    });

    //Trailers de peliculas
    const fetchMoviesData = async () => {
      try {
        const promises = idMoviesUpcoming.map(async (id) => {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=f662fb1cfcfa243c47505204f2a97e5e&append_to_response=videos`,
            options
          );
          const data = await response.json();
          const trailers = data.videos.results.filter(
            (video) => video.type === "Trailer"
          );
          const image = data.backdrop_path;

          return {
            title: data.original_title,
            trailers,
            image,
            id: data.id,
          };
        });

        const movieData = await Promise.all(promises);
        return movieData;
      } catch (error) {
        return [];
      }
    };

    const trailersUpcoming = await fetchMoviesData();

    //Fin de funcion trailers

    return {
      nowPlayingMoviesData,
      topRatedMoviesData,
      popularMoviesData,
      upcomingMoviesData,
      popularSeriesData,
      airingTodaySeriesData,
      idMoviesUpcoming,
      trailersUpcoming,
    };
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const {
    nowPlayingMoviesData,
    topRatedMoviesData,
    popularMoviesData,

    popularSeriesData,
    airingTodaySeriesData,

    trailersUpcoming,
  } = await getData();

  return (
    <section>
      <HeroSection />
      <div className="flex flex-col xl:flex-row mt-10 gap-16 max-w-[95%] mx-auto">
        <div className="h-full space-y-8">
          <SectionAside items={nowPlayingMoviesData.results.slice(0, 15)} />
          <SectionAside items={airingTodaySeriesData.results.slice(0, 15)} />
        </div>
        <div className="grid grid-rows-3 gap-8">
          <CarouselItems
            items={popularMoviesData.results}
            text={"Peliculas populares"}
          />
          <CarouselItems
            items={topRatedMoviesData.results}
            text={"Peliculas top"}
          />
          <CarouselItems
            items={popularSeriesData.results}
            text={"Series populares"}
          />
        </div>
      </div>
      <CarouselTrailers items={trailersUpcoming} />
    </section>
  );
}
//f662fb1cfcfa243c47505204f2a97e5e; apikey peliculas

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjYyZmIxY2ZjZmEyNDNjNDc1MDUyMDRmMmE5N2U1ZSIsInN1YiI6IjYzOGUzNjI1ZTk0MmVlMDBjOTA4OGIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9QhgmFk9cmXCjOgDwOWt-Ri_vy_DDhuYSGvZgjDKrZk; tokenPeliculas
