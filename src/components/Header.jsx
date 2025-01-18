import cartImage from "../assets/cart.png";
import { useContext } from "react";
import { ProductStateContext } from "../App";

const Header = () => {
  const products = useContext(ProductStateContext);
  const cartCount = products.filter((product) => product.isInCart).length;

  return (
    <header className="fixed bg-black inset-x-0 top-0 h-[69px]">
      <div className="absolute top-1/2 transform -translate-y-1/2 right-[30px] cursor-pointer">
        <img className="w-5 h-6 bg-cover" src={cartImage} />
      </div>
      <div className="absolute bottom-[16px] right-[22px] w-[19px] h-[19px] rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
        {cartCount}
      </div>
    </header>
  );
};

export default Header;
