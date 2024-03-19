import api from "../../../config/api";
import { IProduct } from "../movies.types";

const getMoviesService = async (): Promise<IProduct[]> => {
  try {
    const products = await api.get<IProduct[]>("/products");
    return products.data as IProduct[];
  } catch (err) {
    console.error(err);
    throw new Error();
  }
};

export { getMoviesService };
