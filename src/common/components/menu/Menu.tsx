import { Cart, Header, Itens, Logo } from "./Menu.styles"
import weMoviesLogo from "../../../assets/img/WeMovies.png";
import cartImg from "../../../assets/img/icons/cart.png";

const Menu:React.FC = () => {
  return (
    <Header >
      <Logo src={weMoviesLogo} alt="WeMovies" />
      <Cart >
        <div>
          <h5>Meu Carrinho</h5>
          <Itens>0 itens</Itens>
        </div>
        <img src={cartImg} />
      </Cart>
    </Header>
  )
}

export default Menu