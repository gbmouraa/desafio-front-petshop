import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
import { MdOutlinePets } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Header = () => {
  const { cartAmount } = useContext(CartContext);

  return (
    <header className="w-full bg-blue-400">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-3">
        <Link to="/" className="flex items-center gap-x-2">
          {" "}
          <MdOutlinePets size={20} color="#fff" />
          <span className="text-lg font-medium text-white">PetShop</span>
        </Link>
        <Link to="/cart" className="relative">
          <FaCartShopping size={20} color="#fff" />
          {cartAmount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-semibold text-white">
              {cartAmount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};
