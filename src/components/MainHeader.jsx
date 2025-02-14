import cartImage from "../assets/cart.png";
import { CartStateContext } from "../App";
import { useContext } from "react";

const MainHeader = () => {
  const cart = useContext(CartStateContext);
  const cartCount = cart.length;

  return (
    <header className="header bg-black">
      <button className="header-right">
        <img className="w-5 h-6 bg-cover" src={cartImage} />
        {cartCount > 0 && (
          <div className="absolute top-[12px] left-[12px] w-[19px] h-[19px] rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
            {cart.length}
          </div>
        )}
      </button>
    </header>
  );
};

export default MainHeader;
