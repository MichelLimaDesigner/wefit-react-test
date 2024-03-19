import { CardsContainer } from "../Movies.styles"
import MovieCard from "./MovieCard";
import { IProduct } from "../movies.types";

interface Container {
  movies: IProduct[]
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