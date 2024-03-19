import api from "../../../config/api";
import { Product } from "../movies.types";

const getMovies = async () => {
  try {
    const teste = await api.get<Product[]>("/products");
    console.log(teste.data);
    // return teste;
  } catch (err) {
    console.error(err);
    throw new Error();
  }
};

export { getMovies };
