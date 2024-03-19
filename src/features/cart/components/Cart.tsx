import { CartContent, ContentFooter, ContentHeader, TotalPrice } from "../Cart.styles"
import Empyt from "../../home/components/Empty";
import CartItem from "./CartItem";
import { convertToBRACurrency } from "../../../utils/convertToBRACurrency";
import useCart from "../hooks/useCart";
import Button from "../../../common/components/button/Button";

const Cart: React.FC = () => {
  // Hooks
  const {cart, finishPurchase} = useCart();

  if(cart.quantity === 0) return <Empyt isError={false} />

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
        <Button onClick={finishPurchase}>
          FINALIZAR PEDIDO
        </Button>
        <TotalPrice>
          <h4>TOTAL</h4>
          <h3>
            {convertToBRACurrency(cart.totalValue)}
          </h3>
        </TotalPrice>
      </ContentFooter>
    </CartContent>
  )
}

export default Cart