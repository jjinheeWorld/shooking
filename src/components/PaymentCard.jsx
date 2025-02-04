const PaymentCard = () => {
  return (
    <div className="mt-[69px] relative left-1/2 transform -translate-x-1/2 w-[208px] h-[123px] rounded-[5px] bg-[#333333]">
      <div className="absolute w-[40px] h-[26px] top-[47px] left-[14px] rounded-[4px] bg-[#CBBA64]"></div>
      <div className="absolute bottom-[10px] left-[18px] card-text">NAME</div>
      <div className="absolute bottom-[10px] right-[18px] card-text">MM/YY</div>
    </div>
  );
};

export default PaymentCard;
