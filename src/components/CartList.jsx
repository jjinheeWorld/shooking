import { useContext } from "react";
import { CartStateContext } from "../App";
import CartItem from "./CartItem";

const CartList = () => {
  const cart = useContext(CartStateContext);
  return (
    <div className="mt-[69px] pt-[32px] px-[23px]">
      <h2 className="text-[30px] font-extrabold mb-[7px]">장바구니</h2>
      <div className="text-base font-normal mb-[10px]">
        현재 {cart.length}개의 상품이 담겨있습니다.
      </div>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
