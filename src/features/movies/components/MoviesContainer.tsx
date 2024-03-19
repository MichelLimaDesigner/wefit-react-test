import { CardsContainer } from "../Movies.styles"
import MovieCard from "./MovieCard";
import { Product } from "../movies.types";

interface Container {
  movies: Product[]
}

const MoviesContainer: React.FC<Container> = ({movies}) => {
  return (
    <CardsContainer >
      {
        movies.map(movie => {
          return(
            <MovieCard
              product={movie}
              key={movie.id}
            />
          )
        })
      }
    </CardsContainer>
  )
}

export default MoviesContainer