import { Cart, Header, Itens, Logo } from "./Menu.styles"
import weMoviesLogo from "../../../assets/img/WeMovies.png";
import cartImg from "../../../assets/img/icons/cart.png";
import { useSelector } from "react-redux";
import { selectCart } from "../../../features/cart/store/cartSlice";

const Menu:React.FC = () => {
  const cart = useSelector(selectCart);

  return (
    <Header >
      <Logo src={weMoviesLogo} alt="WeMovies" />
      <Cart >
        <div>
          <h5>Meu Carrinho</h5>
          <Itens>{cart.quantity} itens</Itens>
        </div>
        <img src={cartImg} />
      </Cart>
    </Header>
  )
}

export default Menu