import useMovies from "../../movies/hooks/useMovies"
import Loader from "../../../common/components/loader/Loader";
import Empyt from "./Empty";
import MoviesContainer from "../../movies/components/MoviesContainer";

const Home: React.FC = () => {
  // Hooks
  const {movies, isError, isLoading} = useMovies();
  if(isLoading) return <Loader />

  if(isError || !isLoading && movies.length < 1) return <Empyt isError={true}/>

  return(
    <div>
      <MoviesContainer movies={movies}/>
    </div>
  )
}

export default Home