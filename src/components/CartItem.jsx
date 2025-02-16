import { getProductImage } from "../util/get-product-image";
import minusImage from "../assets/minus.png";
import plusImage from "../assets/plus.png";

const CartItem = ({ id, name, price }) => {
  const formatPrice = (price) => {
    const formattedPrice = price.toLocaleString("ko-KR");
    return `${formattedPrice}원`;
  };

  return (
    <div className="flex items-center py-5 border-b-[1px] border-[#EBEBEB]">
      <img
        className="w-36 aspect-square rounded-[30px]"
        src={getProductImage(id + 1)}
      />
      <div className="pl-14">
        <div className="text-base font-medium pb-2">{name}</div>
        <div className="text-2xl font-bold pb-6">{formatPrice(price)}</div>
        <div className="flex gap-4">
          <button className="bg-[#E6E6E6] p-[6px] rounded-[10px]">
            <img className="w-3" src={minusImage} />
          </button>
          <div>개수</div>
          <button className="bg-[#E6E6E6] p-[6px] rounded-[10px]">
            <img className="w-3" src={plusImage} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
