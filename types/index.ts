export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
}

export interface IApiResponse {
  data: any;
  message?: string;
  error?: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
}
