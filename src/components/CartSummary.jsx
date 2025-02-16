const CartSummary = () => {
  return (
    <div className="px-[23px]">
      <div className="py-[21px] border-b-[1px] border-[#EBEBEB]">
        <div className="flex justify-between items-center pb-[7px]">
          <div className="text-base font-bold">상품금액</div>
          <div className="text-2xl font-bold">95,000원</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-base font-bold">배송비</div>
          <div className="text-2xl font-bold">3,000원</div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-[21px] pb-[43px]">
        <div className="text-base font-bold">총 금액</div>
        <div className="text-2xl font-bold">98,000원</div>
      </div>
    </div>
  );
};

export default CartSummary;
