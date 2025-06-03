import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/cart-context";
import type { ProductType } from "../contexts/cart-context";
import { Header } from "../components/header";
import { FaCartPlus } from "react-icons/fa6";
import { api } from "../services/api";
import toast from "react-hot-toast";

export const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const { addCartItem } = useContext(CartContext);

  const handleAddNewItem = (item: ProductType) => {
    addCartItem(item);
    toast.success("Item adicionado ao carrinho");
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await api.get("/products");
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-100">
      <Header />
      <div className="px-4 py-6">
        <h1 className="text-xl font-medium text-zinc-700">Lista de produtos</h1>
        <section className="my-6 flex w-full max-w-7xl flex-wrap gap-6">
          {products?.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-[300px] overflow-hidden rounded-lg bg-white"
            >
              <img
                src={product.cover}
                alt="Logo do produto"
                className="mx-auto block w-full max-w-[250px]"
              />
              <div className="p-2 font-medium">
                <p className="pb-2">{product.title}</p>
                <div className="flex items-center gap-x-2">
                  <p>
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <button
                    onClick={() => handleAddNewItem(product)}
                    className="cursor-pointer rounded bg-black p-1 transition-opacity hover:opacity-70"
                  >
                    <FaCartPlus color="#fff" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
