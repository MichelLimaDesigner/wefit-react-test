import { Button, Card, CardImg } from "../Movies.styles"
import addToCartImg from "../../../assets/img/icons/add-to-cart.png";
import { Product } from "../movies.types";

interface Card {
  product: Product
}

const MovieCard: React.FC<Card> = ({product}) => {
  return (
    <Card >
      <CardImg >
        <img src={product.image} alt={product.title} />
      </CardImg>
      <h4>{product.title}</h4>
      <h5>{product.price}</h5>
      <Button >
        <figure>
          <img src={addToCartImg} alt="Adicionar ao Carrinho" />
          <figcaption>0</figcaption>
        </figure>
        ADICIONAR AO CARRINHO
      </Button>
    </Card>
  )
}

export default MovieCard