import { useState, type ReactNode } from "react";
import { CartContext, type CartItem, type ProductType } from "./cart-context";

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const addCartItem = (newItem: ProductType) => {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      const cartList = [...cart];

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].subtotal =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalCartValue(cartList);
      return;
    }

    const data = {
      ...newItem,
      amount: 1,
      subtotal: newItem.price,
    };

    setCart((prev) => [...prev, data]);
    totalCartValue([...cart, data]);
  };

  const removeCartItem = (item: ProductType) => {
    const indexItem = cart.findIndex((product) => product.id === item.id);

    if (cart[indexItem].amount > 1) {
      const cartList = [...cart];

      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].subtotal =
        cartList[indexItem].subtotal - cartList[indexItem].price;

      setCart(cartList);
      totalCartValue(cartList);
      return;
    }

    const removedItem = cart.filter((product) => product.id !== item.id);

    setCart(removedItem);
    totalCartValue(removedItem);
  };

  const checkout = () => {
    setCart([]);
  };

  const totalCartValue = (cart: CartItem[]) => {
    const totalValue = cart.reduce((acumulator, current) => {
      return acumulator + current.subtotal;
    }, 0);

    setTotal(totalValue);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addCartItem,
        removeCartItem,
        total,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
