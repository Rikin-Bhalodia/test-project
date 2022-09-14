export interface Products {
  name: number;
  price: number;
  description: string;
  quantity: number;
  url: string;
  productId: number;
}

export interface ProductList {
  products: Array<Products>;
}
