import { useEffect } from "react"
import PurchaseMade from "../../cart/components/PurchaseMade"
import { getMovies } from "../../movies/services/MoviesService"

const Home: React.FC = () => {
  useEffect(() => {
    getMovies()
  }, [])

  return(
    <div>
      
    </div>
  )
}

export default Home