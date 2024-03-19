import { ButtonIcon } from "../../../common/styles/GlobalStyles"
import { convertToBRACurrency } from "../../../utils/convertToBRACurrency"
import { ItemHeaderMobile, ItemImgMobile, ItemInputMobile, ItemMobile, ItemMobileBody, ItemPrice, ItemQtdInput } from "../Cart.styles"
import { IItem } from "../cart.types"
import minusIcon from "../../../assets/img/icons/minus.png";
import plusIcon from "../../../assets/img/icons/plus.png";
import thrashIcon from "../../../assets/img/icons/thrash.png";

interface ICardMobile {
  item: IItem
  quantity: number
  subTotal: number
  handleDecreaseQtd: () => void
  handleInputQuantity: (value: string) => void
  handleIncreaseQtd: () => void
  removeItem: (itemID: number) => void
}

const CardItemMobile: React.FC<ICardMobile> = ({
  item,
  quantity,
  subTotal,
  removeItem,
  handleDecreaseQtd,
  handleInputQuantity,
  handleIncreaseQtd
}) => {
  return (
    <ItemMobile>
      <ItemImgMobile >
        <img src={item.product.image} alt={item.product.title} />
      </ItemImgMobile>

      <ItemMobileBody>
        <ItemHeaderMobile >
          <h3>{item.product.title}</h3>
          <h4>{convertToBRACurrency(item.product.price)}</h4>
          <ButtonIcon className="text-right thrash" onClick={() => removeItem(item.product.id)}>
            <img src={thrashIcon} />
          </ButtonIcon>
        </ItemHeaderMobile>

        <ItemInputMobile>
          <ItemQtdInput>
            <ButtonIcon onClick={handleDecreaseQtd}>
              <img src={minusIcon} />
            </ButtonIcon>
            <input
              type="number"
              min={1}
              name="quantity"
              value={quantity}
              onChange={(event) => handleInputQuantity(event.target.value)}
            />
            <ButtonIcon onClick={handleIncreaseQtd}>
              <img src={plusIcon} />
            </ButtonIcon>

            <ItemPrice className="mobile">
              <p>SUBTOTAL</p>
              {convertToBRACurrency(subTotal)}
            </ItemPrice>
          </ItemQtdInput>
        </ItemInputMobile>
      </ItemMobileBody>
    </ItemMobile>
  )
}

export default CardItemMobile