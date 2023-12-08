import { IUser } from "@/types";

export const mapToObject = (eventMap: Map<any, any>) => {
  return Object.fromEntries(eventMap);
};

export const objectToMap = (obj: any) => {
  return new Map(Object.entries(obj));
};

export const getUserDataResponse = (user: IUser) => {
  const userData = objectToMap(user);
  userData.delete("password");
  return userData;
};

export const resolveApiResponse = async (promise: Promise<any>) => {
  const resolved = objectToMap({
    data: null,
    error: null,
  });

  const data = await promise;
  if (data.error) {
    resolved.set("error", data.error);
  } else {
    resolved.set("data", data.data);
  }

  return mapToObject(resolved);
};
