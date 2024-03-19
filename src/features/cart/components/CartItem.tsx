import { useEffect, useState } from "react"
import { Item, ItemImage, ItemPrice, ItemQtdInput } from "../Cart.styles"
import { IItem } from "../cart.types"
import { ButtonIcon } from "../../../common/styles/GlobalStyles"
import minusIcon from "../../../assets/img/icons/minus.png";
import plusIcon from "../../../assets/img/icons/plus.png";
import thrashIcon from "../../../assets/img/icons/thrash.png";
import { convertToBRACurrency } from "../../../utils/convertToBRACurrency";

interface ICardItem {
  item: IItem
}

const CartItem: React.FC<ICardItem> = ({item}) => {
  // States
  const [quantity, setQuantity] = useState(item.quantity);
  const [subTotal, setsubTotal] = useState(item.value);

  const handleIncreaseQtd = () => {
    setQuantity(qtd => qtd + 1);
  }

  const handleDecreaseQtd = () => {
    if(quantity > 1) setQuantity(qtd => qtd - 1);
  }

  useEffect(() => {
    const newSubtotal = item.value * quantity;
    setsubTotal(newSubtotal);
  }, [item.value, quantity]);

  return (
    <Item>
      <ItemImage >
        <img src={item.product.image} alt="" />
      </ItemImage>

      <ItemQtdInput>
        <ButtonIcon onClick={handleDecreaseQtd}>
          <img src={minusIcon} />
        </ButtonIcon>
        <input
          type="number"
          min={1}
          value={quantity}
        />
        <ButtonIcon onClick={handleIncreaseQtd}>
          <img src={plusIcon} />
        </ButtonIcon>
      </ItemQtdInput>

      <ItemPrice>{convertToBRACurrency(subTotal)}</ItemPrice>

      <ButtonIcon >
        <img src={thrashIcon} />
      </ButtonIcon>
    </Item>
  )
}

export default CartItem