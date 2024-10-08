import PropTypes from "prop-types"
import Movie from "./Movie";


const MovieList = ({movies}) => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 md:px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie)=>(
            <Movie movie={movie} key={movie.title}/>
        ))}
    </div>
  )
}
export default MovieList;
MovieList.propTypes = {
    movies: PropTypes.array,
}