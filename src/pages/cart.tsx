import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
import { Header } from "../components/header";
import toast from "react-hot-toast";

export const Cart = () => {
  const { cart, total, addCartItem, removeCartItem, checkout } =
    useContext(CartContext);

  const hanldeCheckout = () => {
    toast.success("Compra realizada");
    checkout();
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen w-full flex-col bg-zinc-100 py-8">
        <section className="mx-auto flex w-full max-w-7xl flex-col px-4">
          <h1 className="mb-4 text-lg font-medium">Meu Carrinho</h1>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex w-full flex-col items-center justify-between gap-y-3 rounded-lg bg-white py-3 pr-10 sm:flex-row"
            >
              <img
                src={item.cover}
                alt="Logo do Produto"
                className="max-w-[200px]"
              />
              <p className="font-semibold">
                Preço:
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeCartItem(item)}
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded bg-black text-white transition-opacity hover:opacity-70"
                >
                  -
                </button>
                <span>{item.amount}</span>
                <button
                  onClick={() => addCartItem(item)}
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded bg-black text-white transition-opacity hover:opacity-70"
                >
                  +
                </button>
              </div>
              <p className="font-semibold">
                Subtotal:
                {item.subtotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          ))}
          {cart.length > 0 ? (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-lg font-medium">
                Total:{" "}
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <button
                onClick={hanldeCheckout}
                className="cursor-pointer rounded-full bg-green-500 px-3 py-2 font-bold text-white transition-opacity hover:opacity-70"
              >
                Finalizar compra
              </button>
            </div>
          ) : (
            <p className="font-medium">
              Ops, parece que o carrinho está vazio...
            </p>
          )}
        </section>
      </div>
    </>
  );
};
