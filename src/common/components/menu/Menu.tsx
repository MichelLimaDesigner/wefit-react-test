import { Cart, Header, Itens, Logo } from "./Menu.styles"
import weMoviesLogo from "../../../assets/img/WeMovies.png";
import cartImg from "../../../assets/img/icons/cart.png";
import { useSelector } from "react-redux";
import { selectCart } from "../../../features/cart/store/cartSlice";
import { Link } from "react-router-dom";

const Menu:React.FC = () => {
  const cart = useSelector(selectCart);

  return (
    <Header >
      <Link to={"/"}>
        <Logo src={weMoviesLogo} alt="WeMovies" />
      </Link>
      <Cart >
          <Link to={"/carrinho"}>
        <div>
          <h5>Meu Carrinho</h5>
          <Itens>{cart.quantity} itens</Itens>
        </div>
        <img src={cartImg} />
          </Link>
      </Cart>
    </Header>
  )
}

export default Menu