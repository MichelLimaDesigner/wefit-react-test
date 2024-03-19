import api from "../../../config/api";
import { Product } from "../movies.types";

const getMoviesService = async (): Promise<Product[]> => {
  try {
    const products = await api.get<Product[]>("/products");
    return products.data as Product[];
  } catch (err) {
    console.error(err);
    throw new Error();
  }
};

export { getMoviesService };
