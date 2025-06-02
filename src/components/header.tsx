import { MdOutlinePets } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="flex max-w-7xl items-center justify-between bg-blue-400 p-3">
        <div className="flex items-center gap-x-2">
          {" "}
          <MdOutlinePets size={20} color="#fff" />
          <span className="text-lg font-medium text-white">PetShop</span>
        </div>
        <Link to="/cart" className="relative">
          <FaCartShopping size={20} color="#fff" />
          <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-semibold text-white">
            2
          </span>
        </Link>
      </div>
    </header>
  );
};
