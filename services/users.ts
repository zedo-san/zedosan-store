import { resolveApiResponse } from "@/helpers";
import { TLoginSchema } from "@/schema/login.schema";
import { IApiResponse } from "@/types";

export const UsersAPI = {
  login: async (params: TLoginSchema): Promise<IApiResponse> => {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const userData = resolveApiResponse(response.json());
    return userData;
  },
};
