import { ProductsAPI } from "@/services/products";
import { useEffect, useState } from "react";

export default function useInventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await ProductsAPI.getProducts();
      setProducts(response.data);
    };

    fetchProducts();
  }, []);
  return { products };
}
