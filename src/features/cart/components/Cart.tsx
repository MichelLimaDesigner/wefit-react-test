import { useSelector } from "react-redux"
import { CartContent, ContentHeader } from "../Cart.styles"
import { selectCart } from "../store/cartSlice"
import Empyt from "../../home/components/Empty";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const cart = useSelector(selectCart);

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
    </CartContent>
  )
}

export default Cart