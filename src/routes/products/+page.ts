import { getProducts } from "../services/productService";

export async function load({ fetch }) {
    try {
      const response = await getProducts();
      const products = await response.json();
      console.log(products)
      return { products };
    } catch (error) {
      console.error(error);
      return { products: [] };
    }
  }