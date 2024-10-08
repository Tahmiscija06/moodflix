import { useParams } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import { useEffect, useState } from "react";
import { MOOD_GENRE_MAPPING } from "../common/constants";

const MovieListPage = () => {
  const { mood } = useParams();
  const [movies, setMovies] = useState ({});
  useEffect(()=> {
    fetch (`/data/movies_data_${MOOD_GENRE_MAPPING[mood]}.json`)
    .then((response) => response.json ())
    .then((data) => setMovies(data.results))
  }, [mood]
  
  )
  return (
    <div className="flex flex-col min-h-screen bg-black ">
      <Navbar/>
      <main className="flex-1">
        <div className="px-4 mt-4 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Movies for {mood}
        </h1>
        <MovieListPage movies={movies} />
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default MovieListPage