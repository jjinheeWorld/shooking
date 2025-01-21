import { ProductDispatchContext } from "../App";
import { getProductImage } from "../util/get-product-image";
import Button from "./Button";
import { useContext } from "react";

const ProductCard = ({ id, name, content, price, isInCart }) => {
  const { onAddToCart } = useContext(ProductDispatchContext);
  const formatPrice = (price) => {
    const formattedPrice = price.toLocaleString("ko-KR");
    return `${formattedPrice}원`;
  };

  const onClickAddToCart = () => {
    onAddToCart(id);
  };

  return (
    <div className="w-[calc((100%-16px)/2)] overflow-hidden rounded-[15px] border border-solid border-[#f2f2f2]">
      <img
        className="w-full h-[115px] md:h-[165px] lg:h-[215px] object-cover"
        src={getProductImage(id + 1)}
      />
      <div className="pl-[17px] pt-[17px] pr-[12px] pb-[20px] flex flex-col gap-[7px]">
        <div className="text-base font-medium">{name}</div>
        <div className="text-[13px] font-normal text-[#7c7a7a]">{content}</div>
        <div className="text-sm font-medium">{formatPrice(price)}</div>
        <Button
          text={isInCart ? "담김!" : "담기"}
          onClick={onClickAddToCart}
          isDisabled={isInCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
