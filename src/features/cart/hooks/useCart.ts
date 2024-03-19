import { useDispatch, useSelector } from "react-redux";
import { changeCartItems, resetCart, selectCart } from "../store/cartSlice";
import { IItem, IShoppingCart } from "../cart.types";
import { useNavigate } from "react-router-dom";

const useCart = () => {
  // Hooks
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getItem = (itemID: number) => {
    const item = cart.items.find((item) => item.product.id === itemID);
    const quantityInCart = item?.quantity || 0;
    return quantityInCart;
  };

  const addItem = (item: IItem) => {
    const items: IItem[] = [...cart.items];
    const itemIndex = items.findIndex((e) => e.product.id === item.product.id);

    if (itemIndex !== -1) {
      items[itemIndex] = item;
    } else {
      items.push(item);
    }
    dispatchItems(items);
  };

  const calcTotalQuantity = (items: IItem[]) => {
    const quantity = items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );
    return quantity;
  };

  const calcSubtotal = (items: IItem[]) => {
    const newSubtotal = items.reduce((acc, cur) => acc + cur.value, 0);
    return newSubtotal;
  };

  const removeItem = (itemID: number) => {
    const items: IItem[] = Object.assign(cart.items);
    const newItems = items.filter((item) => item.product.id !== itemID);
    dispatchItems(newItems);
  };

  const dispatchItems = (items: IItem[]) => {
    const subtotal = calcSubtotal(items);
    const quantity = calcTotalQuantity(items);
    const newCart: IShoppingCart = {
      ...cart,
      items: items,
      totalValue: subtotal,
      quantity: quantity,
    };
    dispatch(changeCartItems(newCart));
  };

  const finishPurchase = () => {
    dispatch(resetCart());
    navigate("/compra-finalizada");
  };

  return {
    cart,
    getItem,
    addItem,
    removeItem,
    finishPurchase,
  };
};

export default useCart;
