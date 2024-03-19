import { Product } from "../movies/movies.types";

export interface IShoppingCart {
  items: IItem[];
  quantity: number;
  totalValue: number;
}

export interface IItem {
  product: Product;
  quantity: number;
  value: number;
}
