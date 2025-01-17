import { getProductImage } from "../util/get-product-image";
import Button from "./Button";

const ProductCard = ({ id, name, content, price, isInCart }) => {
  const formatPrice = (price) => {
    const formattedPrice = price.toLocaleString("ko-KR");
    return `${formattedPrice}원`;
  };

  return (
    <div className="aspect-[184/247] w-[calc((100%-16px)/2)] overflow-hidden rounded-[15px] border border-solid border-[#f2f2f2]">
      <img className="w-full object-cover" src={getProductImage(id + 1)} />
      <div className="pl-[17px] pt-[17px] pr-[12px] pb-[20zx] flex flex-col gap-[7px]">
        <div className="text-base font-medium">{name}</div>
        <div className="text-[13px] font-normal text-[#7c7a7a]">{content}</div>
        <div className="text-sm font-medium">{formatPrice(price)}</div>
        <Button text={"담기"} />
      </div>
    </div>
  );
};

export default ProductCard;
