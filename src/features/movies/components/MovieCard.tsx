import { Button, Card, CardImg } from "../Movies.styles"
import addToCartImg from "../../../assets/img/icons/add-to-cart.png";
import { Product } from "../movies.types";
import { convertToBRACurrency } from "../../../utils/convertToBRACurrency";
import useCart from "../../cart/hooks/useCart";
import { IItem } from "../../cart/cart.types";

interface Card {
  product: Product
}

const MovieCard: React.FC<Card> = ({product}) => {
  // Hooks
  const {addItem} = useCart();

  const addItemToCart = () => {
    const item: IItem = {
      product: product,
      quantity: 1,
      value: product.price
    }

    addItem(item);
  }

  return (
    <Card >
      <CardImg >
        <img src={product.image} alt={product.title} />
      </CardImg>
      <h4>{product.title}</h4>
      <h5>{convertToBRACurrency(product.price)}</h5>
      <Button onClick={addItemToCart}>
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