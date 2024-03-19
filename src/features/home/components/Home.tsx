import useMovies from "../../movies/hooks/useMovies"
import MovieCard from "../../movies/components/MovieCard"
import { CardsContainer } from "../../movies/Movies.styles";
import Loader from "../../../common/components/loader/Loader";
import Empyt from "./Empty";

const Home: React.FC = () => {
  // Hooks
  const {movies, isError, isLoading} = useMovies();

  if(isLoading) return <Loader />

  if(isError || !isLoading && movies.length < 1) return <Empyt />

  return(
    <div>
      <CardsContainer >
        {
          movies.map(movie => {
            return(
              <MovieCard product={movie} key={movie.id} />
            )
          })
        }
      </CardsContainer>
    </div>
  )
}

export default Home