import { createContext } from "react";

export type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
};

export type CartItem = ProductType & {
  amount: number;
  subtotal: number;
};

type CartContextData = {
  cart: CartItem[];
  cartAmount: number;
  addCartItem: (product: ProductType) => void;
  removeCartItem: (product: ProductType) => void;
  checkout: () => void;
  total: number;
};

export const CartContext = createContext({} as CartContextData);
