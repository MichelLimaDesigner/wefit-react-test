import { Product } from "../movies/movies.types";

export interface ShoppingCart {
  items: Item[];
  quantity: number;
  totalValue: number;
}

export interface Item {
  product: Product;
  quantity: number;
  value: number;
}
