import { useDispatch, useSelector } from "react-redux";
import { CardsContainer } from "../Movies.styles"
import MovieCard from "./MovieCard";
import { Product } from "../movies.types";
import { changeCartItems, selectCart } from "../../cart/store/cartSlice";
import { Item, ShoppingCart } from "../../cart/cart.types";

interface Container {
  movies: Product[]
}

const MoviesContainer: React.FC<Container> = ({movies}) => {
  // Hooks
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleAddItem = (product: Product) => {
    const totalValue = calcTotalValue(product.price);
    const totalQuantity = calcTotalQuantity();
    const item: Item = {
      product: product,
      quantity: 1,
      value: product.price
    }

    const newCart: ShoppingCart = {
      items: [...cart.items, item],
      quantity: totalQuantity,
      totalValue: totalValue
    }

    dispatch(changeCartItems(newCart));
  }

  const calcTotalQuantity = () => {
    const quantity = cart.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0,
    );
    return quantity + 1;
  }

  const calcTotalValue = (productValue: number) => {
    const value = cart.totalValue + productValue;
    return value;
  }

  return (
    <CardsContainer >
        {
          movies.map(movie => {
            return(
              <MovieCard
                product={movie}
                key={movie.id}
                handleAddItem={handleAddItem}
              />
            )
          })
        }
    </CardsContainer>
  )
}

export default MoviesContainer