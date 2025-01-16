import { getProductImage } from "../util/get-product-image";
import Button from "./Button";

const ProductCard = () => {
  return (
    <div className="aspect-[184/247] w-[calc((100%-16px)/2)] overflow-hidden rounded-[15px] border border-solid border-[#f2f2f2]">
      <img className="w-full object-cover" src={getProductImage(1)} />
      <div className="pl-[17px] pt-[17px] pr-[12px] pb-[20px] flex flex-col gap-[7px]">
        <div className="text-base font-medium">브랜드A</div>
        <div className="text-[13px] font-normal text-[#7c7a7a]">
          편안하고 착용감이 좋은 신발
        </div>
        <div className="text-sm font-medium">35,000원</div>
        <Button text={"담기"} />
      </div>
    </div>
  );
};

export default ProductCard;
