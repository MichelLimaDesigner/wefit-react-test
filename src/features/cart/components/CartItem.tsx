import { useEffect, useState } from "react"
import { Item, ItemHead, ItemHeader, ItemImage, ItemPrice, ItemQtdInput } from "../Cart.styles"
import { IItem } from "../cart.types"
import { ButtonIcon } from "../../../common/styles/GlobalStyles"
import minusIcon from "../../../assets/img/icons/minus.png";
import plusIcon from "../../../assets/img/icons/plus.png";
import thrashIcon from "../../../assets/img/icons/thrash.png";
import { convertToBRACurrency } from "../../../utils/convertToBRACurrency";
import useCart from "../hooks/useCart";

interface ICardItem {
  item: IItem
}

const CartItem: React.FC<ICardItem> = ({item}) => {
  // Hooks
  const { removeItem, addItem } = useCart();
  // States
  const [quantity, setQuantity] = useState(item.quantity);
  const subTotal = quantity * item.product.price;

  const handleInputQuantity = (value: string) => {
    const newQuantity = parseInt(value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleIncreaseQtd = () => {
    setQuantity((qtd) => qtd + 1);
  };

  const handleDecreaseQtd = () => {
    if (quantity > 1) setQuantity((qtd) => qtd - 1);
  };

  useEffect(() => {
    const newItem: IItem = {
      product: item.product,
      quantity: quantity,
      value: subTotal
    }

    addItem(newItem);
  }, [quantity])

  return (
    <Item>
      <ItemHeader >
        <ItemImage >
          <img src={item.product.image} alt="" />
        </ItemImage>
        <div>
          <h3>{item.product.title}</h3>
          <h4>{convertToBRACurrency(item.product.price)}</h4>
        </div>
      </ItemHeader>

      <ItemQtdInput>
        <ButtonIcon onClick={handleDecreaseQtd}>
          <img src={minusIcon} />
        </ButtonIcon>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(event) => handleInputQuantity(event.target.value)}
        />
        <ButtonIcon onClick={handleIncreaseQtd}>
          <img src={plusIcon} />
        </ButtonIcon>
      </ItemQtdInput>

      <ItemPrice>{convertToBRACurrency(subTotal)}</ItemPrice>

      <ButtonIcon className="text-right" onClick={() => removeItem(item.product.id)}>
        <img src={thrashIcon} />
      </ButtonIcon>
    </Item>
  )
}

export default CartItem