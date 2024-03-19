import { IProduct } from "../movies/movies.types";

export interface IShoppingCart {
  items: IItem[];
  quantity: number;
  totalValue: number;
}

export interface IItem {
  product: IProduct;
  quantity: number;
  value: number;
}
