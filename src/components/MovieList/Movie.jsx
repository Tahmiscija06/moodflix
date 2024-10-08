import { Star } from "lucide-react"
import PropTypes from "prop-types"

const Movie = ({ movie }) => {
  return (
    <div className="relative transition-transform duration-500 transform hover:scale-105">
        <img
        className="object-cover w-full rounded-lg shadow-lg"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white duration-300 rounded-lg opacity-0 bg-gradient-to-t from-black via-transparent to-transparent hover:opacity-100">
            <h2 className="mb-1 text-2xl font-bold">{movie.title}</h2>
            <p className="mb-2 text-xs text-gray-300 line-clamp-3">
                {movie.overwiev}
                <p className="text-xs text-gray-400">
                    <Star className="w-4 h-4 mr-2"/>
                    Realese Date: {movie.release_date}
                </p >
                <p className="text-xs text-gray-400">Rating: {movie.vote_average}({movie.vote_count}votes)</p>
            </p>
        </div>
    </div>
  )
}

export default Movie
Movie.propTypes = {
    movie: PropTypes.object.isRequired
}