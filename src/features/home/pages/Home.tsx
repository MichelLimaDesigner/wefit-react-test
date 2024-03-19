import { CardsContainer } from "../../movies/Movies.styles"
import MovieCard from "../../movies/components/MovieCard"

const Home: React.FC = () => {
  return(
    <div>
      <CardsContainer >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </CardsContainer>
    </div>
  )
}

export default Home