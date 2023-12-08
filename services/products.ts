import { resolveApiResponse } from "@/helpers";
import { IApiResponse } from "@/types";

export const ProductsAPI = {
  getProducts: async (): Promise<IApiResponse> => {
    const response = await fetch("http://localhost:3000/api/products", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const products = resolveApiResponse(response.json());
    return products;
  },
};
