import { CartContent, ContentFooter, ContentHeader, TotalPrice } from "../Cart.styles"
import Empyt from "../../home/components/Empty";
import CartItem from "./CartItem";
import { Button } from "../../movies/Movies.styles";
import { convertToBRACurrency } from "../../../utils/convertToBRACurrency";
import useCart from "../hooks/useCart";

const Cart: React.FC = () => {
  // Hooks
  const {cart} = useCart();

  if(cart.quantity === 0) return <Empyt />

  return (
    <CartContent >
      <ContentHeader >
        <p>PRODUTO</p>
        <p>QTD</p>
        <p>SUBTOTAL</p>
      </ContentHeader>
      {
        cart.items.map((item, index) => {
          return (
            <CartItem
              key={index}
              item={item}
            />
          )
        })
      }

      <ContentFooter>
        <Button >
          FINALIZAR PEDIDO
        </Button>
        <TotalPrice>
          <h4>TOTAL:</h4>
          <h3>
            {convertToBRACurrency(cart.totalValue)}
          </h3>
        </TotalPrice>
      </ContentFooter>
    </CartContent>
  )
}

export default Cart