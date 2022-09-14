export interface IAuthType {
  username: string;
  password: string;
  token: string;
}

export interface IUser {
  email: string;
  name: string;
  age: number;
  phone: number;
  prefix: number;
}

export interface IAuthState {
  loading: boolean;
  allProducts: IAuthType | null;
  product: IUser[];
}
