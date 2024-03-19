import { Button, Card, CardImg } from "../Movies.styles"
import addToCartImg from "../../../assets/img/icons/add-to-cart.png";
import viuva from "../../../assets/img/viuva-negra.png";

const MovieCard: React.FC = () => {
  return (
    <Card >
      <CardImg >
        <img src={viuva} alt="" />
      </CardImg>
      <h4>Viuva negra</h4>
      <h5>R$ 30,00</h5>
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